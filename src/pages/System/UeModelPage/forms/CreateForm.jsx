import CreateIcon from '@mui/icons-material/Create'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router'

import { MuiMainButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'
import TextInput from '#/components/common/input/TextInput'
import TitleBar from '#/components/common/menu/TitleBar'
import { registUESchema } from '#/contents/validationSchema'
import { usePostRegistUE } from '#/hooks/queries/system'

const SearchPopup = lazy(() => import('./SearchPopup'))
const MuiDialog = lazy(() => import('#/components/common/popup/MuiDialog'))
const MuiAlert = lazy(() => import('#/components/common/popup/MuiAlert'))

import style from './style.module'

const CreateForm = () => {
    const navigate = useNavigate()
    const { mutate, isPending } = usePostRegistUE()
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [tempModelCodes, setTempModelCodes] = useState([])
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        msg: '입력한 정보로 저장 하시겠습니까?',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            modelCode: [],
            tmpModelCode: '',
            note: '',
            posConfig: {
                cellConfig: {
                    lpp: 'N',
                    lppa: 'N',
                },
                gnssConfig: {
                    msa: 'N',
                    msb: 'N',
                    cp: 'N',
                    lppe: 'N',
                    suplVer: '1.0',
                    tls: 'N',
                    emergencyFlag: 'N',
                },
                ksaConfig: {
                    ver: 0,
                },
            },
        },
        validationSchema: registUESchema,
        onSubmit: (form) => {
            const apiParams = {
                ...form,
                modelCode: [...tempModelCodes.map((item) => item.modelCode)],
            }
            // 임시로 사용된 tmpModelCode 삭제
            delete apiParams.tmpModelCode
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('response : ', data)
                        setApiSuccess(`CREATE API RESULT : ${data?.data}`)
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

    const handleInputUeCode = (modelCode) => {
        // const _modelCode = formik.values.tmpModelCode
        console.log('UE : ', modelCode)
        setTempModelCodes((prev) => [{ id: Date.now(), modelCode }, ...prev])
    }

    const handleRefreshUeCode = (id) => {
        setTempModelCodes([...tempModelCodes.filter((item) => item.id != id)])
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
                                <TableCell rowSpan={2}>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`모델 코드`}
                                </TableCell>
                                <TableCell component="td">
                                    <Stack direction="row" gap={1} alignItems={`center`}>
                                        <TextInput
                                            name="tmpModelCode"
                                            formik={formik}
                                            editClick={() => setIsOpenPopup(true)}
                                        />
                                        <Typography
                                            color="primary"
                                            sx={{ textAlign: 'right', width: '30%' }}
                                        >
                                            {tempModelCodes?.length > 0
                                                ? `${tempModelCodes[0].modelCode} 포함 총 ${tempModelCodes.length}종`
                                                : ''}
                                        </Typography>
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
                                        {tempModelCodes?.map((item) => (
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
                                                    <HighlightOffOutlinedIcon
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
                                    <TextInput name="note" formik={formik} />
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
                                        checked={
                                            formik.values.posConfig.cellConfig.lpp === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.cellConfig.lpp',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.cellConfig.lpp === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.cellConfig.lpp}
                                    />
                                </TableCell>
                                <TableCell>{`LPPa-ECID`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.cellConfig.lppa === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.cellConfig.lppa',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.cellConfig.lppa === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.cellConfig.lppa}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={4}>{`위성 측위`}</TableCell>
                                <TableCell>{`MSA`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.msa === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.msa',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.msa === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.msa}
                                    />
                                </TableCell>
                                <TableCell>{`MSB`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.msb === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.msb',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.msb === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.msb}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`CP`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.cp === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.cp',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.cp === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.cp}
                                    />
                                </TableCell>
                                <TableCell>{`LPPe`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.lppe === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.lppe',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.lppe === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.lppe}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`SUPL ver`}
                                </TableCell>
                                <TableCell>
                                    <TextInput
                                        name="posConfig.gnssConfig.suplVer"
                                        formik={formik}
                                    />
                                </TableCell>
                                <TableCell>{`SUPL TLS`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.tls === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.tls',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.tls === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.tls}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`SUPL Emergency Flag`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.emergencyFlag === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.emergencyFlag',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.emergencyFlag === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.emergencyFlag}
                                    />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={3}>{`KSA`}</TableCell>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`Ver`}
                                </TableCell>
                                <TableCell>
                                    <TextInput name="posConfig.ksaConfig.ver" formik={formik} />
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
                <Suspense fallback={<div>Loading...</div>}>
                    <MuiDialog
                        isOpen={state.openDialog}
                        content={state.msg}
                        onCancel={handleStateReset}
                        onConfirm={handleFormikSubmit}
                    />
                </Suspense>
            )}
            {apiSuccess && (
                <Suspense fallback={<div>Loading...</div>}>
                    <MuiAlert
                        msg={apiSuccess}
                        autoHideDuration={3000}
                        callback={() => navigate('/system/ue-list')}
                    />
                </Suspense>
            )}
            {isOpenPopup && (
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchPopup
                        isOpen={isOpenPopup}
                        title={`단말 코드 중복 체크`}
                        onCancel={() => setIsOpenPopup(false)}
                        onConfirm={(param) => {
                            setIsOpenPopup(false)
                            handleInputUeCode(param)
                            // formik.setFieldValue('serviceCode', param)
                        }}
                    />
                </Suspense>
            )}
        </Box>
    )
}

export default CreateForm
