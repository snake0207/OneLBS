import TitleBar from '#/components/common/menu/TitleBar'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    Stack,
    Button,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Icon,
} from '@mui/material'

import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import { usePopupActions } from '#/store/usePopupStore'
import { useNavigate } from 'react-router'

import user from '#/mock/data/user.json'

import style from './style.module'
import Select from '#/components/common/Select'
import {
    getServiceTypeList,
    getAccuracys,
    getPosMethods,
    getPlanes,
    getModes,
} from '#/common/libs/permission'
import { useEffect, useState } from 'react'
import { usePostRegisterService } from '#/hooks/queries/system'
import CreateIcon from '@mui/icons-material/Create'
import { registerServiceSchema } from '#/contents/validationSchema'
import CheckBox from '#/components/common/input/CheckBox'
import MuiDialog from '#/components/common/popup/MuiDialog/MuiDialog'

const CreateForm = () => {
    const navigate = useNavigate()
    const { mutate, isPending } = usePostRegisterService()
    const [serviceType, setServiceType] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [posMethod, setPosMethod] = useState(0)
    const [plane, setPlane] = useState(0)
    const [mode, setMode] = useState(0)
    const [fieldCheck, setFieldCheck] = useState({
        userCheck: false,
        authCheck: false,
        cellCheck: false,
        gpsCheck: false,
        lppeCheck: false,
        ksaCheck: false,
        ksaCellCheck: false,
        ksaGnssCheck: false,
        ksaWifiCheck: false,
        ksaAtmosphericCheck: false,
        ksaFlpCheck: false,
    })
    const [state, setState] = useState({
        save: false,
        edit: false,
        delete: false,
        msg: '',
        openDialog: false,
    })

    const popupActions = usePopupActions()
    const formik = useFormik({
        initialValues: {
            // serviceName: '',
            // serviceCode: '',
            // cpName: '',
            // serviceProvider: '',
            // userCheck: false,
            // authCheck: false,
            // serviceType: 0,
            accuracy: 0,
            respTime: '15',
            // cellCheck: 'N',
            // posMethod: 0,
            // gpsCheck: 'N',
            // plane: 0,
            // mode: 0,
            // lppeCheck: 'N',
            // lppRespTime: '',
            // ksaCheck: 'N',
            // version: '',
            // ksaCellCheck: 'N',
            // ksaGnssCheck: 'N',
            // ksaWifiCheck: 'N',
            // ksaAtmosphericCheck: 'N',
            // ksaFlpCheck: 'N',
            // collectionCount: '',
        },
        validationSchema: registerServiceSchema,
        onSubmit: (form) => {
            const apiParams = { ...form, ...fieldCheck }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('response : ', data)
                        // popupActions.showPopup('alert', `등록 되었습니다.`)
                    },
                },
            )
        },
        onReset: (values) => {
            console.log('onReset', values)
        },
    })

    const handleClickSave = () => {
        console.log('handleClickSave >> ', state)
        setState((prevState) => ({
            ...prevState,
            save: true,
            msg: '입력한 정보로 저장 하시겠습니까?',
            openDialog: true,
        }))
        // formik.handleSubmit()
    }
    const handleClickEdit = () => {
        console.log('handleClickEdit >> ', state)
        setState((prevState) => ({
            ...prevState,
            edit: true,
            msg: '수정한 정보로 저장 하시겠습니까?',
            openDialog: true,
        }))
        // formik.handleSubmit()
    }

    const handleClickDelete = () => {
        console.log('handleClickDelete >> ', state)
        setState((prevState) => ({
            ...prevState,
            delete: true,
            msg: '삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?',
            openDialog: true,
        }))
        // formik.handleReset()
        // popupActions.showPopup(
        //     'confirm',
        //     `회원 탈퇴시 계정은 즉시 삭제됩니다. 회원 탈퇴 하시겠습니까?`,
        //     () => {
        //         // TODO: 회원탈퇴 API 호출
        //         popupActions.showPopup('alert', `회원 탈퇴가 완료 되었습니다.`)
        //         navigate('/login')
        //     },
        // )
    }

    const handleFormikSubmit = () => {
        formik.handleSubmit()
        setState({ save: false, edit: false, delete: false, msg: '', openDialog: false })
    }

    console.log(state)

    return (
        <Box>
            <TitleBar title={`서비스 가입`} />
            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                <Box sx={style.contentBox}>
                    {/* <Box display="flex" alignItems="center" mb={2}>
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
                    </Table> */}

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

                    {/* <Table sx={style.table_set_option}>
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
                                <TableCell>
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
                                <TableCell>
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
                                <TableCell>
                                    <TextInput name="lppRespTime" formik={formik} />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={3}>{`KSA`}</TableCell>
                                <TableCell>{`사용`}</TableCell>
                                <TableCell>
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
                                <TableCell>
                                    <TextInput name="version" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`수집 정보`}</TableCell>
                                <TableCell colSpan={3}>
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
                                <TableCell>
                                    <TextInput name="collectionCount" formik={formik} />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table> */}

                    {/* 하단 버튼 */}
                    <Box align={'right'}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <Button
                                onClick={() => navigate('/system/service')}
                                sx={style.bluelineButton}
                            >
                                {`취소`}
                            </Button>
                            <Button onClick={handleClickSave} sx={style.bluelineButton}>
                                {`등록`}
                            </Button>
                            <Button onClick={handleClickEdit} sx={style.bluelineButton}>
                                {`수정`}
                            </Button>
                            <Button onClick={handleClickDelete} sx={style.lineButton}>
                                {`삭제`}
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </form>
            {state.openDialog && (
                <MuiDialog
                    isOpen={state.openDialog}
                    content={state.msg}
                    onCancel={() => setOpenDialog(false)}
                    onConfirm={handleFormikSubmit}
                />
            )}
        </Box>
    )
}

export default CreateForm
