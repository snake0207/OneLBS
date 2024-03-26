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
import { useState } from 'react'
import { usePostRegisterService } from '#/hooks/queries/system'
import CreateIcon from '@mui/icons-material/Create'
import { registerServiceSchema } from '#/contents/validationSchema'
import CheckBox from '#/components/common/input/CheckBox'

const CreateForm = () => {
    const navigate = useNavigate()
    const { mutate, isPending } = usePostRegisterService()
    const [serviceType, setServiceType] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [posMethod, setPosMethod] = useState(0)
    const [plane, setPlane] = useState(0)
    const [mode, setMode] = useState(0)
    const [ksaCheck, setKsaCheck] = useState(false)
    const [userCheck, setUserCheck] = useState(false)
    const [authCheck, setAuthCheck] = useState(false)
    const [cellCheck, setCellCheck] = useState(false)
    const [gpsCheck, setGpsCheck] = useState(false)
    const [lppeCheck, setLppeCheck] = useState(false)
    const [ksaCellCheck, setKsaCellCheck] = useState(false)
    const [ksaGnssCheck, setKsaGnssCheck] = useState(false)
    const [ksaWifiCheck, setKsaWifiCheck] = useState(false)
    const [ksaAtmosphericCheck, setKsaAtmosphericCheck] = useState(false)
    const [ksaFlpCheck, setKsaFlpCheck] = useState(false)

    const popupActions = usePopupActions()
    const formik = useFormik({
        initialValues: {
            serviceName: '',
            serviceCode: '',
            cpName: '',
            serviceProvider: '',
            userCheck: false,
            authCheck: false,
            serviceType: 0,
            // accuracy: 0,
            // respTime: 0,
            // cellCheck: 'N',
            // posMethod: 0,
            // gpsCheck: 'N',
            // plane: 0,
            // mode: 0,
            // lppeCheck: 'N',
            // lppRespTime: 0,
            // ksaCheck: 'N',
            // version: '',
            // ksaCellCheck: 'N',
            // ksaGnssCheck: 'N',
            // ksaWifiCheck: 'N',
            // ksaAtmosphericCheck: 'N',
            // ksaFlpCheck: 'N',
            // collectionCount: 0,
        },
        validationSchema: registerServiceSchema,
        onSubmit: (form) => {
            const reqParams = { ...form, userCheck: userCheck, authCheck: authCheck }
            console.log('onSubmit >> ', JSON.stringify(reqParams, null, 2))
            mutate(
                { ...reqParams },
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

    const handleEdit = () => {
        console.log('handleEdit')
        formik.handleSubmit()
    }

    const handleWithdraw = () => {
        console.log('handleWithdraw')

        formik.handleReset()
        popupActions.showPopup(
            'confirm',
            `회원 탈퇴시 계정은 즉시 삭제됩니다. 회원 탈퇴 하시겠습니까?`,
            () => {
                // TODO: 회원탈퇴 API 호출
                popupActions.showPopup('alert', `회원 탈퇴가 완료 되었습니다.`)
                navigate('/login')
            },
        )
    }

    return (
        <Box>
            <TitleBar title={`서비스 가입`} />
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
                                        checked={userCheck}
                                        onChange={() => setUserCheck((prev) => !prev)}
                                        name="userCheck"
                                    />
                                </TableCell>
                                <TableCell>{`상호인증확인`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={authCheck}
                                        onChange={() => setAuthCheck((prev) => !prev)}
                                        name="authCheck"
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
                    </Table> */}

                    {/* <Table sx={style.table_set_option}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{`기지국측위`}</TableCell>
                                <TableCell>{`사용`}</TableCell>
                                <TableCell component="td">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={cellCheck}
                                                onChange={() => setCellCheck((prev) => !prev)}
                                                name="cellCheck"
                                            />
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
                                        onChange={(item) => setPosMethod(item.value)}
                                        style={{
                                            height: '40px',
                                            width: '100%',
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
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={gpsCheck}
                                                onChange={() => setGpsCheck((prev) => !prev)}
                                                name="gpsCheck"
                                            />
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
                                        onChange={(item) => setPlane(item.value)}
                                        style={{
                                            height: '40px',
                                            width: '100%',
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
                                        onChange={(item) => setMode(item.value)}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{`LPPe 사용`}</TableCell>
                                <TableCell>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={lppeCheck}
                                                onChange={() => setLppeCheck((prev) => !prev)}
                                                name="lppeCheck"
                                            />
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
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={ksaCheck}
                                                onChange={() => setKsaCheck((prev) => !prev)}
                                                name="ksaCheck"
                                            />
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
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={ksaCellCheck}
                                                    onChange={() =>
                                                        setKsaCellCheck((prev) => !prev)
                                                    }
                                                    name="ksaCellCheck"
                                                />
                                            }
                                            label="CELL"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={ksaGnssCheck}
                                                    onChange={() =>
                                                        setKsaGnssCheck((prev) => !prev)
                                                    }
                                                    name="ksaGnssCheck"
                                                />
                                            }
                                            label="GNSS"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={ksaWifiCheck}
                                                    onChange={() =>
                                                        setKsaWifiCheck((prev) => !prev)
                                                    }
                                                    name="ksaWifiCheck"
                                                />
                                            }
                                            label="WiFi"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={ksaAtmosphericCheck}
                                                    onChange={() =>
                                                        setKsaAtmosphericCheck((prev) => !prev)
                                                    }
                                                    name="ksaAtmosphericCheck"
                                                />
                                            }
                                            label="기압"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={ksaFlpCheck}
                                                    onChange={() => setKsaFlpCheck((prev) => !prev)}
                                                    name="ksaFlpCheck"
                                                />
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
                            <Button type="submit" onClick={handleEdit} sx={style.bluelineButton}>
                                {`등록`}
                            </Button>
                            <Button type="submit" onClick={handleEdit} sx={style.bluelineButton}>
                                {`수정`}
                            </Button>
                            <Button onClick={handleWithdraw} sx={style.lineButton}>
                                {`삭제`}
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default CreateForm
