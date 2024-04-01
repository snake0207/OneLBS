import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    Stack,
    FormGroup,
} from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'

import TitleBar from '#/components/common/menu/TitleBar'
import TextInput from '#/components/common/input/TextInput'
import Select from '#/components/common/Select'
import { usePostServiceRegist } from '#/hooks/queries/system'
import { registServiceSchema } from '#/contents/validationSchema'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton } from '#/components/common/button/MuiButton'
import {
    getServiceTypeList,
    getAccuracys,
    getPosMethods,
    getPlanes,
    getModes,
} from '#/common/libs/service'

import style from './style.module'
import CheckBox from '#/components/common/input/CheckBox'
import MuiAlert from '#/components/common/popup/MuiAlert'

const EditForm = () => {
    const {
        state: { row },
    } = useLocation()
    const navigate = useNavigate()
    const { mutate, isPending } = usePostServiceRegist()
    const [serviceType, setServiceType] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [posMethod, setPosMethod] = useState(0)
    const [plane, setPlane] = useState(0)
    const [mode, setMode] = useState(0)
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        edit: false,
        delete: false,
        msg: '',
        openDialog: false,
    })
    const [fieldCheck, setFieldCheck] = useState({
        userCheck: row?.userCheck,
        authCheck: row?.authCheck,
        cellCheck: row?.cellCheck,
        gpsCheck: row?.gpsCheck,
        lppeCheck: row?.lppeCheck,
        ksaCheck: row?.ksaCheck,
        ksaCellCheck: row?.ksaCellCheck,
        ksaGnssCheck: row?.ksaGnssCheck,
        ksaWifiCheck: row?.ksaWifiCheck,
        ksaAtmosphericCheck: row?.ksaAtmosphericCheck,
        ksaFlpCheck: row?.ksaFlpCheck,
    })

    const formik = useFormik({
        initialValues: {
            serviceName: row?.serviceName,
            serviceCode: row?.serviceCode,
            cpName: row?.cpName,
            serviceProvider: row?.serviceProvider,
            userCheck: row?.userCheck,
            authCheck: row?.authCheck,
            serviceType: row?.serviceType,
            accuracy: row?.accuracy,
            respTime: row?.respTime,
            cellCheck: row?.cellCheck,
            posMethod: row?.posMethod,
            gpsCheck: row?.gpsCheck,
            plane: row?.plane,
            mode: row?.mode,
            lppeCheck: row?.lppeCheck,
            lppRespTime: row?.lppRespTime,
            ksaCheck: row?.ksaCheck,
            version: row?.version,
            ksaCellCheck: row?.ksaCellCheck,
            ksaGnssCheck: row?.ksaGnssCheck,
            ksaWifiCheck: row?.ksaWifiCheck,
            ksaAtmosphericCheck: row?.ksaAtmosphericCheck,
            ksaFlpCheck: row?.ksaFlpCheck,
            collectionCount: row?.collectionCount,
        },
        validationSchema: registServiceSchema,
        onSubmit: (form) => {
            const apiParams = { ...form, ...fieldCheck }
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
        onReset: (values) => {
            console.log('onReset', values)
        },
    })

    const handleClickEdit = () => {
        setState((prevState) => ({
            ...prevState,
            edit: true,
            msg: '수정한 정보로 저장 하시겠습니까?',
            openDialog: true,
        }))
    }

    const handleClickDelete = () => {
        console.log('handleClickDelete >> ', state)
        setState((prevState) => ({
            ...prevState,
            delete: true,
            msg: '삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?',
            openDialog: true,
        }))
    }

    const handleFormikSubmit = () => {
        formik.handleSubmit()
        handleStateReset()
    }
    const handleStateReset = () => {
        setState({ edit: false, delete: false, msg: '', openDialog: false })
    }

    console.log('location state.row : ', row)

    return (
        <Box>
            <TitleBar title={`서비스 수정`} />
            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
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
                                <TableCell>{`서비스명`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="serviceName" formik={formik} />
                                </TableCell>
                                <TableCell>{`서비스코드`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="serviceCode" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`고객사`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="cpName" formik={formik} />
                                </TableCell>
                                <TableCell>{`제공사`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="serviceProvider" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`가입자등록확인`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.userCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                userCheck: e.target.checked,
                                            })
                                        }
                                        label=""
                                    />
                                </TableCell>
                                <TableCell>{`상호인증확인`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.authCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                authCheck: e.target.checked,
                                            })
                                        }
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`서비스유형`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="serviceType"
                                        value={serviceType}
                                        items={getServiceTypeList()}
                                        formik={formik}
                                        onChange={(item) => setServiceType(item.value)}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
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
                    <Table sx={style.table_set_base}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{`희망 정확도`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="accuracy"
                                        value={accuracy}
                                        items={getAccuracys()}
                                        formik={formik}
                                        onChange={(item) => setAccuracy(item.value)}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{`희망 응답시간(초)`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="respTime" formik={formik} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    <Table sx={style.table_set_option}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{`기지국측위`}</TableCell>
                                <TableCell>{`사용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.cellCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                cellCheck: e.target.checked,
                                            })
                                        }
                                        label=""
                                    />
                                </TableCell>
                                <TableCell>{`측위방법`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="posMethod"
                                        value={posMethod}
                                        items={getPosMethods()}
                                        formik={formik}
                                        onChange={(item) => setPosMethod(item.value)}
                                        style={{
                                            height: '40px',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={3}>{`위성 측위`}</TableCell>
                                <TableCell>{`사용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.gpsCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                gpsCheck: e.target.checked,
                                            })
                                        }
                                        label=""
                                    />
                                </TableCell>
                                <TableCell>{`Plane`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="plane"
                                        value={plane}
                                        items={getPlanes()}
                                        formik={formik}
                                        onChange={(item) => setPlane(item.value)}
                                        style={{
                                            height: '40px',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`Mode`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="mode"
                                        value={mode}
                                        items={getModes()}
                                        formik={formik}
                                        onChange={(item) => setMode(item.value)}
                                        style={{
                                            height: '40px',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{`LPPe 사용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.lppeCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                lppeCheck: e.target.checked,
                                            })
                                        }
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`LPP 희망응답시간(초)`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="lppRespTime" formik={formik} />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={3}>{`KSA`}</TableCell>
                                <TableCell>{`사용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={fieldCheck.ksaCheck}
                                        onChange={(e) =>
                                            setFieldCheck({
                                                ...fieldCheck,
                                                ksaCheck: e.target.checked,
                                            })
                                        }
                                        label=""
                                    />
                                </TableCell>
                                <TableCell>{`버전`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="version" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`수집 정보`}</TableCell>
                                <TableCell colSpan={3} component="td">
                                    <FormGroup row>
                                        <CheckBox
                                            checked={fieldCheck.ksaCellCheck}
                                            onChange={(e) =>
                                                setFieldCheck({
                                                    ...fieldCheck,
                                                    ksaCellCheck: e.target.checked,
                                                })
                                            }
                                            label="CELL"
                                        />
                                        <CheckBox
                                            checked={fieldCheck.ksaGnssCheck}
                                            onChange={(e) =>
                                                setFieldCheck({
                                                    ...fieldCheck,
                                                    ksaGnssCheck: e.target.checked,
                                                })
                                            }
                                            label="GNSS"
                                        />
                                        <CheckBox
                                            checked={fieldCheck.ksaWifiCheck}
                                            onChange={(e) =>
                                                setFieldCheck({
                                                    ...fieldCheck,
                                                    ksaWifiCheck: e.target.checked,
                                                })
                                            }
                                            label="WiFi"
                                        />
                                        <CheckBox
                                            checked={fieldCheck.ksaAtmosphericCheck}
                                            onChange={(e) =>
                                                setFieldCheck({
                                                    ...fieldCheck,
                                                    ksaAtmosphericCheck: e.target.checked,
                                                })
                                            }
                                            label="기압"
                                        />
                                        <CheckBox
                                            checked={fieldCheck.ksaFlpCheck}
                                            onChange={(e) =>
                                                setFieldCheck({
                                                    ...fieldCheck,
                                                    ksaFlpCheck: e.target.checked,
                                                })
                                            }
                                            label="FLP"
                                        />
                                    </FormGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`수집 횟수`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="collectionCount" formik={formik} />
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
                                name="cancel"
                                title="목록"
                                onClick={() => navigate('/system/service/list')}
                            />
                            <MuiMainButton
                                disabled={isPending}
                                name="edit"
                                title="수정"
                                onClick={handleClickEdit}
                            />
                            <MuiMainButton
                                disabled={isPending}
                                name="delete"
                                title="삭제"
                                onClick={handleClickDelete}
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

export default EditForm
