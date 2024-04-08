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

import TextInput from '#/components/common/input/TextInput'
import TitleBar from '#/components/common/menu/TitleBar'
import Select from '#/components/common/Select'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'
import {
    getServiceTypeList,
    getAccuracys,
    getPosMethods,
    getPlanes,
    getModes,
} from '#/common/libs/service'
import { usePostServiceRegist } from '#/hooks/queries/system'
import { registServiceSchema } from '#/contents/validationSchema'
import SearchPopup from './SearchPopup'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'

const CreateForm = () => {
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
    const [isOpenServicePopup, setIsOpenServicePopup] = useState(false)
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        msg: '입력한 정보로 저장 하시겠습니까?',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            serviceName: '',
            serviceCode: '',
            cpName: '',
            serviceProvider: '',
            userCheck: false,
            authCheck: false,
            serviceType: 0,
            accuracy: 0,
            respTime: '15',
            cellCheck: 'N',
            posMethod: 0,
            gpsCheck: 'N',
            plane: 0,
            mode: 0,
            lppeCheck: 'N',
            lppRespTime: '',
            ksaCheck: 'N',
            version: '',
            ksaCellCheck: 'N',
            ksaGnssCheck: 'N',
            ksaWifiCheck: 'N',
            ksaAtmosphericCheck: 'N',
            ksaFlpCheck: 'N',
            collectionCount: '',
        },
        validationSchema: registServiceSchema,
        onSubmit: (form) => {
            const apiParams = { ...form }
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
        formik.handleSubmit()
        handleStateReset()
    }
    const handleStateReset = () => {
        setState((prevState) => ({ ...prevState, openDialog: false }))
    }

    const handleOpenServicePopup = () => {
        setIsOpenServicePopup(true)
    }

    console.log('location state.row : ', row)

    return (
        <Box>
            <TitleBar title={`서비스 등록`} />
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
                                <TableCell style={style.cellTitle}>{`서비스명`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="serviceName" formik={formik} />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`서비스코드`}</TableCell>
                                <TableCell component="td">
                                    <TextInput
                                        name="serviceCode"
                                        formik={formik}
                                        editClick={handleOpenServicePopup}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`고객사`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="cpName" formik={formik} />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`제공사`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="serviceProvider" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`가입자등록확인`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={formik.values.userCheck === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'userCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={formik.values.userCheck === 'Y' ? `적용` : `미적용`}
                                        value={formik.values.userCheck}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`상호인증확인`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={formik.values.authCheck === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'authCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={formik.values.authCheck === 'Y' ? `적용` : `미적용`}
                                        value={formik.values.authCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`서비스유형`}</TableCell>
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
                                <TableCell style={style.cellTitle}>{`희망 정확도`}</TableCell>
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
                                <TableCell style={style.cellTitle}>{`희망 응답시간(초)`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="respTime" formik={formik} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    <Table sx={style.table_set_option}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`기지국측위`}</TableCell>
                                <TableCell style={style.cellTitle}>{`사용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={formik.values.cellCheck === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'cellCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={formik.values.cellCheck === 'Y' ? `적용` : `미적용`}
                                        value={formik.values.cellCheck}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`측위방법`}</TableCell>
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
                                <TableCell style={style.cellTitle} rowSpan={3}>{`위성 측위`}</TableCell>
                                <TableCell style={style.cellTitle}>{`사용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={formik.values.gpsCheck === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'gpsCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={formik.values.gpsCheck === 'Y' ? `적용` : `미적용`}
                                        value={formik.values.gpsCheck}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`Plane`}</TableCell>
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
                                <TableCell style={style.cellTitle}>{`Mode`}</TableCell>
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
                                <TableCell style={style.cellTitle}>{`LPPe 사용`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={formik.values.lppeCheck === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'lppeCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={formik.values.lppeCheck === 'Y' ? `적용` : `미적용`}
                                        value={formik.values.lppeCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`LPP 희망응답시간(초)`}</TableCell>
                                <TableCell>
                                    <TextInput name="lppRespTime" formik={formik} />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle} rowSpan={3}>{`KSA`}</TableCell>
                                <TableCell style={style.cellTitle}>{`사용`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={formik.values.ksaCheck === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'ksaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={formik.values.ksaCheck === 'Y' ? `적용` : `미적용`}
                                        value={formik.values.ksaCheck}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`버전`}</TableCell>
                                <TableCell>
                                    <TextInput name="version" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`수집 정보`}</TableCell>
                                <TableCell colSpan={3}>
                                    <FormGroup row>
                                        <CheckBox
                                            checked={
                                                formik.values.ksaCellCheck === 'Y' ? true : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'ksaCellCheck',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.ksaCellCheck}
                                            label={`CELL`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.ksaGnssCheck === 'Y' ? true : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'ksaGnssCheck',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.ksaGnssCheck}
                                            label={`GNSS`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.ksaWifiCheck === 'Y' ? true : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'ksaWifiCheck',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.ksaWifiCheck}
                                            label={`WiFi`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.ksaAtmosphericCheck === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'ksaAtmosphericCheck',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.ksaAtmosphericCheck}
                                            label={`기압`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.ksaFlpCheck === 'Y' ? true : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'ksaFlpCheck',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.ksaFlpCheck}
                                            label={`FLP`}
                                        />
                                    </FormGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`수집 횟수`}</TableCell>
                                <TableCell>
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
                                name="list"
                                title="취소"
                                onClick={() => navigate('/system/service/list')}
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
            {isOpenServicePopup && (
                <SearchPopup
                    isOpen={isOpenServicePopup}
                    title={`서비스 코드 중복 체크`}
                    onCancel={() => setIsOpenServicePopup(false)}
                    onConfirm={(param) => {
                        setIsOpenServicePopup(false)
                        formik.setFieldValue('serviceCode', param)
                    }}
                />
            )}
        </Box>
    )
}

export default CreateForm
