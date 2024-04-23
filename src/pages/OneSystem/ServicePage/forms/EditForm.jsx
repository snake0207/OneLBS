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
import { usePostServiceDelete, usePostServiceUpdate } from '#/hooks/queries/system'
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
    const { mutate, isPending } = usePostServiceUpdate()
    const { mutate: mutateDelete, isPending: isDeletePending } = usePostServiceDelete()
    const [apiResult, setApiResult] = useState('')
    const [state, setState] = useState({
        edit: false,
        delete: false,
        msg: '',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            serviceName: row?.serviceName,
            serviceCode: row?.serviceCode,
            customerName: row?.customerName,
            cpName: row?.cpName,
            checkSubscriber: row?.checkSubscriber || 'N',
            checkCrossAuth: row?.checkCrossAuth || 'N',
            serviceType: row?.serviceType || 'N',
            roamCountryCheck: row?.roamCountryCheck || 'N',
            smsSendDirectly: row?.smsSendDirectly || 'N',
            smsSendMonthly: row?.smsSendMonthly || 'N',
            smsCallbackNumber: row?.smsCallbackNumber,
            smsContent: row?.smsContent,
            posConfig: {
                requiredAccuracy: row?.posConfig?.requiredAccuracy || 'HIGH',
                requiredTimeout: row?.posConfig?.requiredTimeout || '15',
                cellConfig: {
                    use: row?.posConfig.cellConfig.use || 'N',
                    method: row?.posConfig.cellConfig.method || 'CellID',
                },
                gnssConfig: {
                    use: row?.posConfig?.gnssConfig?.use || 'N',
                    plane: row?.posConfig?.gnssConfig?.plane || 'CP',
                    mode: row?.posConfig?.gnssConfig?.mode || 'MSA',
                    lppe: row?.posConfig?.gnssConfig?.lppe || 'N',
                    lppRespTime: row?.posConfig?.gnssConfig?.lppRespTime || 0,
                },
                ksaConfig: {
                    use: row?.posConfig?.ksaConfig?.use || 'N',
                    ver: row?.posConfig?.ksaConfig?.ver || 0,
                    qos: {
                        cell: row?.posConfig?.ksaConfig?.qos?.cell || 'N',
                        gnss: row?.posConfig?.ksaConfig?.qos?.gnss || 'N',
                        wifi: row?.posConfig?.ksaConfig?.qos?.wifi || 'N',
                        pres: row?.posConfig?.ksaConfig?.qos?.pres || 'N',
                        flp: row?.posConfig?.ksaConfig?.qos?.flp || 'N',
                        ble: row?.posConfig?.ksaConfig?.qos?.ble || 'N',
                        mag: row?.posConfig?.ksaConfig?.qos?.mag || 'N',
                        temp: row?.posConfig?.ksaConfig?.qos?.temp || 'N',
                        light: row?.posConfig?.ksaConfig?.qos?.light || 'N',
                        act: row?.posConfig?.ksaConfig?.qos?.act || 'N',
                    },
                    count: row?.posConfig?.ksaConfig?.count || 0,
                },
            },
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
                        setApiResult(`UPDATE API RESULT : ${data?.data}`)
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

    const handleDeleteSubmit = () => {
        console.log('handleDeleteSubmit...')
        mutateDelete(
            { serviceCode: row?.serviceCode },
            {
                onSuccess: ({ data }) => {
                    console.log('delete-response : ', data)
                    setApiResult(`DELETE API RESULT : ${data?.data}`)
                },
            },
        )
        handleStateReset()
    }

    const handleFormikSubmit = () => {
        state.edit && formik.handleSubmit()
        state.delete && handleDeleteSubmit()
        handleStateReset()
    }
    const handleStateReset = () => {
        setState({ edit: false, delete: false, msg: '', openDialog: false })
    }

    // console.log('location state.row : ', row)

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
                                <TableCell style={style.cellTitle}>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`서비스명`}
                                </TableCell>
                                <TableCell component="td">
                                    <TextInput name="serviceName" formik={formik} />
                                </TableCell>
                                <TableCell style={style.cellTitle}>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`서비스코드`}
                                </TableCell>
                                <TableCell component="td">
                                    <TextInput name="serviceCode" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`고객사`}
                                </TableCell>
                                <TableCell component="td">
                                    <TextInput name="customerName" formik={formik} />
                                </TableCell>
                                <TableCell style={style.cellTitle}>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`제공사`}
                                </TableCell>
                                <TableCell component="td">
                                    <TextInput name="cpName" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`가입자등록확인`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.checkSubscriber === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'checkSubscriber',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.checkSubscriber === 'Y'
                                                ? `적용`
                                                : `미적용`
                                        }
                                        value={formik.values.checkSubscriber}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`상호인증확인`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.checkCrossAuth === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'checkCrossAuth',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.checkCrossAuth === 'Y' ? `적용` : `미적용`
                                        }
                                        value={formik.values.checkCrossAuth}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`서비스유형`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="serviceType"
                                        items={getServiceTypeList()}
                                        formik={formik}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`로밍국가확인용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.roamCountryCheck === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'roamCountryCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.roamCountryCheck === 'Y'
                                                ? `적용`
                                                : `미적용`
                                        }
                                        value={formik.values.roamCountryCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`위치제공 즉시통지`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.smsSendDirectly === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'smsSendDirectly',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.smsSendDirectly === 'Y'
                                                ? `적용`
                                                : `미적용`
                                        }
                                        value={formik.values.smsSendDirectly}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`위치제공 월간통지`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.smsSendMonthly === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'smsSendMonthly',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.smsSendMonthly === 'Y' ? `적용` : `미적용`
                                        }
                                        value={formik.values.smsSendMonthly}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`통지SMS콜백`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="smsCallbackNumber" formik={formik} />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`발송문구`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="smsContent" formik={formik} />
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
                    <Table sx={style.table_set_base}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`희망 정확도`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="posConfig.requiredAccuracy"
                                        items={getAccuracys()}
                                        formik={formik}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`희망 응답시간(초)`}
                                </TableCell>
                                <TableCell component="td">
                                    <TextInput name="posConfig.requiredTimeout" formik={formik} />
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
                                        checked={
                                            formik.values.posConfig.cellConfig.use === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'posConfig.cellConfig.use',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.posConfig.cellConfig.use === 'Y'
                                                ? `적용`
                                                : `미적용`
                                        }
                                        value={formik.values.posConfig.cellConfig.use}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`측위방법`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="posConfig.cellConfig.method"
                                        items={getPosMethods()}
                                        formik={formik}
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
                                <TableCell
                                    style={style.cellTitle}
                                    rowSpan={3}
                                >{`위성 측위`}</TableCell>
                                <TableCell style={style.cellTitle}>{`사용`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.use === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.use',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.posConfig.gnssConfig.use === 'Y'
                                                ? `적용`
                                                : `미적용`
                                        }
                                        value={formik.values.posConfig.gnssConfig.use}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`Plane`}</TableCell>
                                <TableCell component="td">
                                    <Select
                                        name="posConfig.gnssConfig.plane"
                                        items={getPlanes()}
                                        formik={formik}
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
                                        name="posConfig.gnssConfig.mode"
                                        items={getModes()}
                                        formik={formik}
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
                                        checked={
                                            formik.values.posConfig.gnssConfig.lppe === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.lppe',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.posConfig.gnssConfig.lppe === 'Y'
                                                ? `적용`
                                                : `미적용`
                                        }
                                        value={formik.values.posConfig.gnssConfig.lppe}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    style={style.cellTitle}
                                >{`LPP 희망응답시간(초)`}</TableCell>
                                <TableCell>
                                    <TextInput
                                        name="posConfig.gnssConfig.lppRespTime"
                                        formik={formik}
                                    />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle} rowSpan={3}>{`KSA`}</TableCell>
                                <TableCell style={style.cellTitle}>{`사용`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.ksaConfig.use === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'posConfig.ksaConfig.use',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        label={
                                            formik.values.posConfig.ksaConfig.use === 'Y'
                                                ? `적용`
                                                : `미적용`
                                        }
                                        value={formik.values.posConfig.ksaConfig.use}
                                    />
                                </TableCell>
                                <TableCell style={style.cellTitle}>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`버전`}
                                </TableCell>
                                <TableCell>
                                    <TextInput name="posConfig.ksaConfig.ver" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`수집 정보`}</TableCell>
                                <TableCell colSpan={3}>
                                    <FormGroup row>
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.cell === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.cell',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.cell}
                                            label={`CELL`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.gnss === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.gnss',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.gnss}
                                            label={`GNSS`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.wifi === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.wifi',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.wifi}
                                            label={`WiFi`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.pres === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.pres',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.pres}
                                            label={`기압`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.flp === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.flp',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.flp}
                                            label={`FLP`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.ble === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.ble',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.ble}
                                            label={`BLE`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.mag === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.mag',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.mag}
                                            label={`MAG`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.temp === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.temp',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.temp}
                                            label={`TEMP`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.light === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.light',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.light}
                                            label={`LIGHT`}
                                        />
                                        <CheckBox
                                            checked={
                                                formik.values.posConfig.ksaConfig.qos.act === 'Y'
                                                    ? true
                                                    : false
                                            }
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posConfig.ksaConfig.qos.act',
                                                    e.target.value === 'Y' ? 'N' : 'Y',
                                                )
                                            }
                                            value={formik.values.posConfig.ksaConfig.qos.act}
                                            label={`ACT`}
                                        />
                                    </FormGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`수집 횟수`}</TableCell>
                                <TableCell>
                                    <TextInput name="posConfig.ksaConfig.count" formik={formik} />
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
                                disabled={isDeletePending}
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
            {apiResult && (
                <MuiAlert
                    msg={apiResult}
                    autoHideDuration={5000}
                    callback={() => {
                        setApiResult('')
                        navigate('/system/service/list')
                    }}
                />
            )}
        </Box>
    )
}

export default EditForm
