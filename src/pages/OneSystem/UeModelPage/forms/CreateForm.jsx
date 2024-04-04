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
import { usePostRegistUE } from '#/hooks/queries/system'
import { registUESchema } from '#/contents/validationSchema'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'

const CreateForm = () => {
    const {
        state: { row },
    } = useLocation()
    const navigate = useNavigate()
    const [ueCodes, setUeCodes] = useState([])
    const { mutate, isPending } = usePostRegistUE()
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        msg: '입력한 정보로 저장 하시겠습니까?',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            ueName: '',
            tmpModelCode: '',
            ueCodes: [],
            remarks: '',
            lppEcidCheck: 'N',
            lppaEcidCheck: 'N',
            msaCheck: 'N',
            msbCheck: 'N',
            cpCheck: 'N',
            lppeCheck: 'N',
            suplVersion: '1.0',
            tlsCheck: 'N',
            emergencyCheck: 'N',
            ksaVersion: '1.0',
        },
        validationSchema: registUESchema,
        onSubmit: (form) => {
            const apiParams = {
                ...form,
                ueCodes: [...ueCodes.map((item) => item.modelCode)],
            }
            // 임시로 사용된 tmpModelCode 삭제
            delete apiParams.tmpModelCode
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

    const handleInputUeCode = () => {
        const ue = formik.values.tmpModelCode
        console.log('UE : ', ue)
        setUeCodes((prev) => [{ id: Date.now(), modelCode: formik.values?.tmpModelCode }, ...prev])
    }

    const handleRefreshUeCode = (id) => {
        setUeCodes([...ueCodes.filter((item) => item.id != id)])
    }

    return (
        <Box>
            <TitleBar title={`단말 모델 등록`} />
            <form style={{ width: '100%' }}>
                <Box sx={style.contentBox}>
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
                                        <TextInput name="tmpModelCode" formik={formik} />
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
                                        {ueCodes?.map((item) => (
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
                                        checked={formik.values.lppEcidCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'lppEcidCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.lppEcidCheck === 'Y' ? '적용' : '미적용'
                                        }
                                        value={formik.values.lppEcidCheck}
                                    />
                                </TableCell>
                                <TableCell>{`LPPa-ECID`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={formik.values.lppaEcidCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'lppaEcidCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.lppaEcidCheck === 'Y' ? '적용' : '미적용'
                                        }
                                        value={formik.values.lppaEcidCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={4}>{`위성 측위`}</TableCell>
                                <TableCell>{`MSA`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={formik.values.msaCheck === 'Y' ? '적용' : '미적용'}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell>{`MSB`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={formik.values.msbCheck === 'Y' ? '적용' : '미적용'}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`CP`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={formik.values.cpCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'cpCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={formik.values.cpCheck === 'Y' ? '적용' : '미적용'}
                                        value={formik.values.cpCheck}
                                    />
                                </TableCell>
                                <TableCell>{`LPPe`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={formik.values.lppeCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'lppeCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={formik.values.lppeCheck === 'Y' ? '적용' : '미적용'}
                                        value={formik.values.lppeCheck}
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
                                        checked={formik.values.tlsCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'tlsCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={formik.values.tlsCheck === 'Y' ? '적용' : '미적용'}
                                        value={formik.values.tlsCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`SUPL Emergency Flag`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.emergencyCheck === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'emergencyCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.emergencyCheck === 'Y' ? '적용' : '미적용'
                                        }
                                        value={formik.values.emergencyCheck}
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
        </Box>
    )
}

export default CreateForm
