import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
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
} from '#/hooks/queries/one-facility'
import { MuiMainButton } from '#/components/common/button/MuiButton'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import dayjs from 'dayjs'
import MuiDialog from '#/components/common/popup/MuiDialog'
import MuiAlert from '#/components/common/popup/MuiAlert'

const formikInitValues = {
    mac: '',
    ssid: '',
    grade: '',
    band: '',
    building: '',
    floor: '',
    latitude: '',
    longitude: '',
    create_date: '',
    update_date: '',
}

const DetailForm = () => {
    const navigate = useNavigate()
    const [isSearchClick, setIsSearchClick] = useState(false)
    const [modeToggle, setModeToggle] = useState(false)
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        edit: false,
        delete: false,
        save: false,
        msg: '',
        openDialog: false,
    })
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { mutate: mutateRegist, isPending: isRegistPending } = usePostFacilityRegistWifi()
    const { mutate: mutateDelete, isPending: isDeletePending } = usePostFacilityDeleteWifi()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostFacilityUpdateWifi()
    const { data: apiResult } = useGetFacilityWifiSearch(
        { queryParams },
        {
            enabled: isSearchClick,
        },
    )
    const formik = useFormik({
        initialValues: formikInitValues,
        // validationSchema: loginSchema,
        onSubmit: (values) => {
            const apiParams = { ...values }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            const currentTime = dayjs()
            mutateRegist(
                { ...apiParams, create_date: currentTime.format('YYYY-MM-DD HH:mm:ss') },
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
        setIsSearchClick(true)
        setQueryParams({ ...queryParams, ...values, page: 1 })
        setModeToggle(false)
    }

    const handleUpdateSubmit = () => {
        console.log('handleUpdateSubmit...')
        const currentTime = dayjs()
        console.log('currentTime : ', currentTime)
        mutateUpdate(
            { ...formik.values, update_date: currentTime.format('YYYY-MM-DD HH:mm:ss') },
            {
                onSuccess: ({ data }) => {
                    console.log('update-response : ', data)
                    setApiSuccess(`UPDATE API RESULT `)
                },
            },
        )
        handleStateReset()
    }

    const handleDeleteSubmit = () => {
        console.log('handleDeleteSubmit...')
        mutateDelete(
            { mac: apiResult?.mac },
            {
                onSuccess: ({ data }) => {
                    console.log('delete-response : ', data)
                    setApiSuccess(`DELETE API RESULT `)
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
        console.log('handleInputAllClear...')
        formik.setValues({ ...formikInitValues })
        handleStateReset()
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

    useEffect(() => {
        if (apiResult) {
            console.log('apiResult : ', apiResult)
            formik.setValues({ ...apiResult })
            setIsSearchClick(false)
        }
    }, [apiResult, isSearchClick])

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
                        {modeToggle ? (
                            <Button
                                type="text"
                                onClick={() => {
                                    apiResult && formik.setValues(apiResult)
                                    setModeToggle((prev) => !prev)
                                }}
                                startIcon={<ChangeCircleOutlinedIcon />}
                            >{`편집 화면으로 전환`}</Button>
                        ) : (
                            <Button
                                type="text"
                                onClick={() => {
                                    handleInputAllClear()
                                    setModeToggle((prev) => !prev)
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
                                    <TableCell style={{ width: '20%' }}>
                                        <TextInput name={`grade`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`Band`}</TableCell>
                                    <TableCell style={{ width: '20%' }}>
                                        <TextInput name={`band`} formik={formik} />
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
                                    <TableCell style={{ width: '20%' }}>{}</TableCell>
                                    <TableCell style={style.cellTitle}>{``}</TableCell>
                                    <TableCell style={{ width: '20%' }}>{}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={style.cellTitle}>{`위도`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`latitude`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`경도`}</TableCell>
                                    <TableCell style={style.cellInput}>
                                        <TextInput name={`longitude`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`생성일시`}</TableCell>
                                    <TableCell style={{ width: '20%' }}>
                                        <TextInput name={`create_date`} formik={formik} />
                                    </TableCell>
                                    <TableCell style={style.cellTitle}>{`갱신일시`}</TableCell>
                                    <TableCell style={{ width: '20%' }}>
                                        <TextInput name={`update_date`} formik={formik} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </form>
                </Box>

                {/* 측위 목록 */}
                <Box sx={{ width: '100%', height: '400px', backgroundColor: 'lightgray', mb: 4 }}>
                    지도영역
                </Box>
                {/* 하단 버튼 */}
                {modeToggle ? (
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
                    autoHideDuration={5000}
                    callback={() => setApiSuccess(false)}
                />
            )}
        </Box>
    )
}

export default DetailForm
