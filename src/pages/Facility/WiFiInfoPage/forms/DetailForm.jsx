import { useEffect, useState } from 'react'
import {
    Box,
    Table,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Stack,
    Button,
} from '@mui/material'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined'

import TitleBar from '#/components/common/menu/TitleBar'

import style from './style.module'
import SearchFilter from '../Filter'
import {
    useGetFacilityWifiSearch,
    usePostFacilityDeleteWifi,
    usePostFacilityRegistWifi,
    usePostFacilityUpdateWifi,
} from '#/hooks/queries/facility'
import { MuiMainButton } from '#/components/common/button/MuiButton'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import MuiDialog from '#/components/common/popup/MuiDialog'
import MuiAlert from '#/components/common/popup/MuiAlert'
import { gradeTypeLabel } from '#/common/libs/facility'
import OllehMap from './OllehMap'

const formikInitValues = {
    mac: '',
    ssid: '',
    grade: 0,
    building: '',
    floor: '',
    vap: {
        utmk: { latitude: '', longitude: '' },
        wgs84: { latitude: '', longitude: '' },
    },
    regDate: '',
    updDate: '',
    gridX: [],
    gridY: [],
    rssi: [],
    dataCount: [],
}

const DetailForm = () => {
    const [isQueryState, setIsQueryState] = useState(false)
    const [modeCreate, setModeCreate] = useState(true)
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        edit: false,
        delete: false,
        save: false,
        msg: '',
        openDialog: false,
    })
    const [queryParams, setQueryParams] = useState({})
    const { mutate: mutateRegist, isPending: isRegistPending } = usePostFacilityRegistWifi()
    const { mutate: mutateDelete, isPending: isDeletePending } = usePostFacilityDeleteWifi()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostFacilityUpdateWifi()
    const init_pos = {
        longitude: 127.1279874,
        latitude: 37.3998912,
        title: 'KT 분당',
    }
    const [locations, setLocations] = useState([init_pos])
    const { data: apiResult } = useGetFacilityWifiSearch(queryParams, {
        enabled: isQueryState,
    })

    const formik = useFormik({
        initialValues: formikInitValues,
        // validationSchema: loginSchema,
        onSubmit: (values) => {
            const apiParams = {
                mac: values.mac,
                ssid: values.ssid,
                grade: values.grade || 0,
                building: values.building || '',
                floor: values.floor || '',
                latitude: values.vap.wgs84.latitude,
                longitude: values.vap.wgs84.longitude,
                source: queryParams.source || 'C',
            }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutateRegist(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('response : ', data)
                        // data.data의 결과값을 확인 후 필요한 처리 수행
                    },
                },
            )
        },
    })

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setModeCreate(false)
        setQueryParams({ ...queryParams, ...values })
        setIsQueryState(true)
    }

    const handleUpdateSubmit = () => {
        console.log('handleUpdateSubmit...')
        const updParams = {
            mac: formik.values.mac,
            ssid: formik.values.ssid,
            grade: formik.values.grade || 0,
            building: formik.values.building || '',
            floor: formik.values.floor || '',
            latitude: formik.values.vap.wgs84.latitude,
            longitude: formik.values.vap.wgs84.longitude,
            source: queryParams.source,
        }
        mutateUpdate(
            { ...updParams },
            {
                onSuccess: ({ data }) => {
                    console.log('update-response : ', data)
                    setApiSuccess(`UPDATE API RESULT ${data?.data}`)
                    if (data?.code === '0000') {
                        // 상태값 변경으로 refetch 수행
                        setIsQueryState(true)
                    }
                },
            },
        )
        handleStateReset()
    }

    const handleDeleteSubmit = () => {
        console.log('handleDeleteSubmit...')
        mutateDelete(
            { mac: apiResult?.data?.mac, source: queryParams.source },
            {
                onSuccess: ({ data }) => {
                    console.log('delete-response : ', data)
                    setApiSuccess(`DELETE API RESULT ${data?.data}`)
                    if (data?.code === '0000') {
                        // 상태값 변경으로 refetch 수행
                        setIsQueryState(true)
                    }
                },
            },
        )
        handleStateReset()
    }

    const handleFormikSubmit = () => {
        state.save && formik.handleSubmit() // 수정
        state.edit && handleUpdateSubmit() // 등록(신규)
        state.delete && handleDeleteSubmit() // 삭제
        handleStateReset()
    }

    const handleStateReset = () => {
        setState({ edit: false, delete: false, save: false, msg: '', openDialog: false })
    }

    const handleInputAllClear = () => {
        console.log('handleInputAllClear()...')
        formik.setValues({ ...formikInitValues })
    }

    const handleClickSave = () => {
        setState((prevState) => ({
            ...prevState,
            save: true,
            msg: '입력한 정보로 저장 하시겠습니까?',
            openDialog: true,
        }))
    }

    const handleClickEdit = () => {
        setState((prevState) => ({
            ...prevState,
            edit: true,
            msg: '수정한 정보로 저장 하시겠습니까?',
            openDialog: true,
        }))
    }

    const handleClickDelete = () => {
        setState((prevState) => ({
            ...prevState,
            delete: true,
            msg: '삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?',
            openDialog: true,
        }))
    }

    const handleMapClick = (wgs84) => {
        console.log('handleMapClick... : ', wgs84, ',', modeCreate)
        formik.setFieldValue('vap.wgs84', wgs84)
        // setLocations([wgs84])
    }

    const setFormikValueApiResult = () => {
        formik.setValues({ ...apiResult?.data })
        formik.setFieldValue('grade', apiResult?.data?.grade || 0)
        formik.setFieldValue('building', apiResult?.data?.building || '')
        formik.setFieldValue('floor', apiResult?.data?.floor || '')
        formik.setFieldValue('updDate', apiResult?.data?.updDate || '')
        const vap = {
            utmk: {
                longitude: apiResult?.data?.vap?.utmk[0],
                latitude: apiResult?.data?.vap?.utmk[1],
            },
            wgs84: {
                longitude: apiResult?.data?.vap?.wgs84[0],
                latitude: apiResult?.data?.vap?.wgs84[1],
            },
        }
        formik.setFieldValue('vap', vap)
        setLocations([
            {
                ...vap.wgs84,
                title: apiResult?.data?.building || apiResult?.data?.ssid || '',
            },
        ])
    }

    useEffect(() => {
        if (isQueryState && apiResult) {
            console.log('apiResult : ', apiResult)
            setIsQueryState(false)
            setApiSuccess(`QUERY API RESULT ${apiResult?.message}`)
            if (apiResult?.code === '0000') {
                setFormikValueApiResult()
            } else {
                formik.setValues({ ...formikInitValues })
                setLocations([init_pos])
            }
        }
    }, [apiResult, queryParams])

    return (
        <Box>
            <TitleBar title={`WiFi 시설정보`} />
            <SearchFilter onSearch={handleSearch} />
            <Box sx={style.contentBox}>
                {/* 검색 결과 & 페이지 mode 변경 */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box display="flex" alignItems="center">
                        <PlaylistAddCheckOutlinedIcon />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '16px',
                                fontWeight: 500,
                                color: 'text.darkgray',
                            }}
                        >
                            {`검색 결과`}
                        </Typography>
                    </Box>
                    <Box>
                        {modeCreate ? (
                            <Button
                                type="text"
                                onClick={() => {
                                    setModeCreate(false)
                                    apiResult?.code === '0000' && setFormikValueApiResult()
                                }}
                                startIcon={<ChangeCircleOutlinedIcon />}
                            >{`편집 화면으로 전환`}</Button>
                        ) : (
                            <Button
                                type="text"
                                onClick={() => {
                                    handleInputAllClear()
                                    setModeCreate(true)
                                }}
                                startIcon={<ChangeCircleOutlinedIcon />}
                            >{`등록 화면으로 전환`}</Button>
                        )}
                    </Box>
                </Box>
                {/*  */}
                <Box>
                    <form>
                        <Table sx={style.table_base}>
                            <TableBody>
                                {/* row - 1, #009ACC */}
                                <TableRow>
                                    <TableCell style={style.cellTitle}>{`MAC`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`mac`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`SSID`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`ssid`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`Grade`}</TableCell>
                                    <TableCell style={style.cellInputWide}>
                                        <TextInput name={`grade`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`신뢰도`}</TableCell>
                                    <TableCell style={style.cellInputWide}>
                                        <Typography>
                                            {apiResult?.data?.hasOwnProperty('grade') &&
                                            apiResult?.data?.grade !== null
                                                ? gradeTypeLabel[formik.values.grade].label
                                                : ''}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={style.cellTitle}>{`Building`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`building`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`Floor`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`floor`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{``}</TableCell>
                                    <TableCell style={style.cellInputWide}>{``}</TableCell>
                                    <TableCell style={style.cellTitle}>{``}</TableCell>
                                    <TableCell style={style.cellInputWide}>{``}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={style.cellTitle}>{`위도`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`vap.wgs84.latitude`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`경도`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`vap.wgs84.longitude`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`생성일시`}</TableCell>
                                    <TableCell style={style.cellInputWide}>
                                        <TextInput name={`regDate`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`갱신일시`}</TableCell>
                                    <TableCell style={style.cellInputWide}>
                                        <TextInput name={`updDate`} formik={formik} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </form>
                </Box>

                {/* 측위 목록 */}
                <Box sx={{ width: '100%', height: '400px', mb: 4 }}>
                    {!isQueryState && locations.length > 0 && (
                        <OllehMap
                            // key={Math.random()}
                            locations={[...locations]}
                            gridX={
                                modeCreate
                                    ? null
                                    : apiResult?.code === '0000'
                                      ? formik.values.gridX
                                      : null
                            }
                            gridY={
                                modeCreate
                                    ? null
                                    : apiResult?.code === '0000'
                                      ? formik.values.gridY
                                      : null
                            }
                            rssi={
                                modeCreate
                                    ? null
                                    : apiResult?.code === '0000'
                                      ? formik.values.rssi
                                      : null
                            }
                            modeCreate={modeCreate}
                            onMapClick={(wgs84) => handleMapClick(wgs84)}
                        />
                    )}
                </Box>
                {/* 하단 버튼 */}
                {modeCreate ? (
                    <Box align={'right'}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <MuiMainButton
                                disabled={isRegistPending}
                                name="cancel"
                                title="초기화"
                                onClick={handleInputAllClear}
                            />
                            <MuiMainButton
                                disabled={isRegistPending}
                                name="create"
                                title="저장"
                                onClick={handleClickSave}
                            />
                        </Stack>
                    </Box>
                ) : (
                    <Box align={'right'}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <MuiMainButton
                                disabled={isDeletePending || isUpdatePending}
                                name="edit"
                                title="수정"
                                onClick={handleClickEdit}
                            />
                            <MuiMainButton
                                disabled={isDeletePending || isUpdatePending}
                                name="delete"
                                title="삭제"
                                onClick={handleClickDelete}
                            />
                        </Stack>
                    </Box>
                )}
            </Box>
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
                    autoHideDuration={3000}
                    callback={() => setApiSuccess('')}
                />
            )}
        </Box>
    )
}

export default DetailForm
