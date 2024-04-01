import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import { Box, Table, TableHead, TableRow, TableCell, Typography, Stack } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

import TextInput from '#/components/common/input/TextInput'
import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton, MuiSubButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'
import { usePostUeRegist } from '#/hooks/queries/system'
import { registUESchema } from '#/contents/validationSchema'
import SearchPopup from './SearchPopup'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'

const CreateForm = () => {
    const {
        state: { row },
    } = useLocation()
    const navigate = useNavigate()
    const [ueState, setUeState] = useState([])
    const { mutate, isPending } = usePostUeRegist()
    const [isOpenServicePopup, setIsOpenServicePopup] = useState(false)
    const [apiSuccess, setApiSuccess] = useState('')
    const [fieldCheck, setFieldCheck] = useState({
        lppEcidCheck: false,
        lppaEcidCheck: false,
        msaCheck: false,
        msbCheck: false,
        cpCheck: false,
        lppeCheck: false,
        tlsCheck: false,
        emergencyCheck: false,
    })
    const [state, setState] = useState({
        msg: '입력한 정보로 저장 하시겠습니까?',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            ueName: '',
            modelCode: '',
            ueCode: [],
            remarks: '',
            lppEcidCheck: false,
            lppaEcidCheck: false,
            msaCheck: false,
            msbCheck: false,
            cpCheck: false,
            lppeCheck: false,
            suplVersion: '',
            tlsCheck: false,
            emergencyCheck: false,
            ksaVersion: '',
        },
        validationSchema: registUESchema,
        onSubmit: (form) => {
            const apiParams = {
                ...form,
                ...fieldCheck,
                ueCode: [...ueState.map((item) => item.modelCode)],
            }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('response : ', data)
                        setApiSuccess(`API RESULT : ${data.id}`)
                    },
                },
            )
        },
    })

    const handleClickSave = () => {
        setState((prevState) => ({ ...prevState, openDialog: true }))
    }

    const handleFormikSubmit = () => {
        console.log('handleFormikSubmit..')
        formik.handleSubmit()
        handleStateReset()
    }
    const handleStateReset = () => {
        setState((prevState) => ({ ...prevState, openDialog: false }))
    }

    const handleOpenServicePopup = () => {
        setIsOpenServicePopup(true)
    }

    const handleInputUeCode = () => {
        const ue = formik.values.modelCode
        console.log('UE : ', ue)
        setUeState((prev) => [{ id: Date.now(), modelCode: formik.values?.modelCode }, ...prev])
    }

    const handleRefreshUeCode = (id) => {
        setUeState([...ueState.filter((item) => item.id != id)])
    }

    console.log('UE-LIST : ', ueState)

    return (
        <Box>
            <TitleBar title={`단말 모델 등록`} />
            <form style={{ width: '100%' }}>
                <Box sx={style.contentBox}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <CreateIcon onClick={() => console.log('ICON CLICK')} />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '16px',
                                fontWeight: 500,
                                color: 'text.darkgray',
                            }}
                        >
                            {`기본 정보`}
                        </Typography>
                    </Box>
                    <Typography fontSize="small" sx={{ color: 'text.darkgray' }}>
                        <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                        {`필수 입력입니다.`}
                    </Typography>
                    <Table sx={style.table_info}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{`모델 명`}</TableCell>
                                <TableCell component="td" colSpan={3}>
                                    <TextInput name="ueName" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={2}>{`모델 코드`}</TableCell>
                                <TableCell component="td">
                                    <Stack direction="row" gap={1}>
                                        <TextInput name="modelCode" formik={formik} />
                                        <MuiSubButton
                                            name="create"
                                            title="추가"
                                            onClick={handleInputUeCode}
                                        />
                                    </Stack>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="td">
                                    <Box
                                        sx={{
                                            height: '160px',
                                            overflow: 'auto',
                                            border: `1px solid`,
                                            borderRadius: '4px',
                                            borderColor: 'table.viewTopBorder',
                                        }}
                                    >
                                        {ueState?.map((item) => (
                                            <Box
                                                key={item.id}
                                                sx={{
                                                    width: '50%',
                                                    margin: '4px 12px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography sx={{ mt: 0, mb: 0 }}>
                                                    {item.modelCode}
                                                </Typography>
                                                {item.id && (
                                                    <RemoveCircleOutlineIcon
                                                        onClick={() => handleRefreshUeCode(item.id)}
                                                        sx={{ color: 'gray' }}
                                                    />
                                                )}
                                            </Box>
                                        ))}
                                    </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`비고`}</TableCell>
                                <TableCell component="td" colSpan={3}>
                                    <TextInput name="remarks" formik={formik} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    {/* 측위 기능 설정 */}
                    <Box display="flex" alignItems="center" mb={2}>
                        <CreateIcon />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '16px',
                                fontWeight: 500,
                                color: 'text.darkgray',
                            }}
                        >
                            {`측위 기능 설정`}
                        </Typography>
                    </Box>
                    <Typography fontSize="small" sx={{ color: 'text.darkgray' }}>
                        <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                        {`필수 입력입니다.`}
                    </Typography>

                    <Table sx={style.table_set_option}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{`기지국측위`}</TableCell>
                                <TableCell>{`LPP-ECID`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.lppEcidCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                lppEcidCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.lppEcidCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                                <TableCell>{`LPPa-ECID`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.lppaEcidCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                lppaEcidCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.lppaEcidCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={4}>{`위성 측위`}</TableCell>
                                <TableCell>{`MSA`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.msaCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                msaCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.msaCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                                <TableCell>{`MSB`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.msbCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                msbCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.msbCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`CP`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={fieldCheck.cpCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                cpCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.cpCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                                <TableCell>{`LPPe`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={fieldCheck.lppeCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                lppeCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.lppeCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`SUPL ver`}</TableCell>
                                <TableCell>
                                    <TextInput name="suplVersion" formik={formik} />
                                </TableCell>
                                <TableCell>{`SUPL TLS`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={fieldCheck.tlsCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                tlsCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.tlsCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`SUPL Emergency Flag`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={fieldCheck.emergencyCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                emergencyCheck: e.target.checked,
                                            })
                                        }
                                        label={fieldCheck.emergencyCheck ? '적용' : '미적용'}
                                    />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={3}>{`KSA`}</TableCell>
                                <TableCell>{`버전`}</TableCell>
                                <TableCell>
                                    <TextInput name="ksaVersion" formik={formik} />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    {/* 하단 버튼 */}
                    <Box align={'right'}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <MuiMainButton
                                disabled={isPending}
                                name="list"
                                title="취소"
                                onClick={() => navigate('/system/ue/list')}
                            />
                            <MuiMainButton
                                disabled={isPending}
                                name="create"
                                title="저장"
                                onClick={handleClickSave}
                            />
                        </Stack>
                    </Box>
                </Box>
            </form>
            {state.openDialog && (
                <MuiDialog
                    isOpen={state.openDialog}
                    content={state.msg}
                    onCancel={handleStateReset}
                    onConfirm={handleFormikSubmit}
                />
            )}
            {apiSuccess && (
                <MuiAlert
                    msg={apiSuccess}
                    autoHideDuration={5000}
                    callback={() => setApiSuccess(false)}
                />
            )}
            {/* {isOpenServicePopup && (
                <SearchPopup
                    isOpen={isOpenServicePopup}
                    title={`서비스 코드 중복 체크`}
                    onCancel={() => setIsOpenServicePopup(false)}
                    onConfirm={(param) => {
                        setIsOpenServicePopup(false)
                        formik.setFieldValue('serviceCode', param)
                    }}
                />
            )} */}
        </Box>
    )
}

export default CreateForm
