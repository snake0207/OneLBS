import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    IconButton,
    Stack,
} from '@mui/material'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined'
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined'
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'

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

const DetailForm = () => {
    const navigate = useNavigate()
    const [isSearchClick, setIsSearchClick] = useState(false)
    const [modeToggle, setModeToggle] = useState(false)
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        edit: false,
        delete: false,
        msg: '',
        openDialog: false,
    })
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { mutate, isPending: isRegistPending } = usePostFacilityRegistWifi()
    const { mutate: mutateDelete, isPending: isDeletePending } = usePostFacilityDeleteWifi()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostFacilityUpdateWifi()
    const { data: apiResult } = useGetFacilityWifiSearch(
        { queryParams },
        {
            enabled: isSearchClick,
        },
    )

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setIsSearchClick(true)
        setQueryParams({ ...queryParams, ...values, page: 1 })
    }

    const handleDeleteSubmit = () => {
        console.log('handleDeleteSubmit...')
        mutateDelete(
            { mac: apiResult?.mac },
            {
                onSuccess: ({ data }) => {
                    console.log('delete-response : ', data)
                    setApiSuccess(`DELETE API RESULT : ${data.id}`)
                },
            },
        )
    }

    const handleFormikSubmit = () => {
        state.edit && formik.handleSubmit() // 수정
        state.delete && handleDeleteSubmit() // 삭제
        handleStateReset()
    }
    const handleStateReset = () => {
        setState({ edit: false, delete: false, msg: '', openDialog: false })
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
            // const { count, lists } = apiResult
            // setFetchData({ ...apiResult })
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
                            <IconButton onClick={() => setModeToggle((prev) => !prev)}>
                                <FormatColorTextOutlinedIcon />
                            </IconButton>
                        ) : (
                            <IconButton onClick={() => setModeToggle((prev) => !prev)}>
                                <EditNoteOutlinedIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
                {/*  */}
                <Box>
                    <Table sx={style.table_base}>
                        <TableBody>
                            {/* row - 1, #009ACC */}
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`MAC`}</TableCell>
                                <TableCell style={style.cellInput}>{apiResult?.mac}</TableCell>
                                <TableCell style={style.cellTitle}>{`SSID`}</TableCell>
                                <TableCell style={style.cellInput}>{apiResult?.ssid}</TableCell>
                                <TableCell style={style.cellTitle}>{`Grade`}</TableCell>
                                <TableCell style={{ width: '20%' }}>{apiResult?.grade}</TableCell>
                                <TableCell style={style.cellTitle}>{`Band`}</TableCell>
                                <TableCell style={{ width: '20%' }}>{apiResult?.band}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`Building`}</TableCell>
                                <TableCell style={style.cellInput}>{apiResult?.building}</TableCell>
                                <TableCell style={style.cellTitle}>{`Floor`}</TableCell>
                                <TableCell style={style.cellInput}>{apiResult?.floor}</TableCell>
                                <TableCell style={style.cellTitle}>{``}</TableCell>
                                <TableCell style={{ width: '20%' }}>{}</TableCell>
                                <TableCell style={style.cellTitle}>{``}</TableCell>
                                <TableCell style={{ width: '20%' }}>{}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={style.cellTitle}>{`위도`}</TableCell>
                                <TableCell style={style.cellInput}>{apiResult?.latitude}</TableCell>
                                <TableCell style={style.cellTitle}>{`경도`}</TableCell>
                                <TableCell style={style.cellInput}>
                                    {apiResult?.longitude}
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`생성일시`}</TableCell>
                                <TableCell style={{ width: '20%' }}>
                                    {apiResult?.create_date}
                                </TableCell>
                                <TableCell style={style.cellTitle}>{`갱신일시`}</TableCell>
                                <TableCell style={{ width: '20%' }}>
                                    {apiResult?.update_date}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>

                {/* 측위 목록 */}
                <Box sx={{ width: '100%', height: '400px', backgroundColor: 'lightgray' }}>
                    지도영역
                </Box>
                {/* 하단 버튼 */}
                {modeToggle ? (
                    <Box align={'right'}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <MuiMainButton
                                disabled={isRegistPending}
                                name="list"
                                title="초기화"
                                onClick={() => console.log('Init....')}
                            />
                            <MuiMainButton
                                disabled={isRegistPending}
                                name="create"
                                title="저장"
                                onClick={() => console.log('SAVE....')}
                            />
                        </Stack>
                    </Box>
                ) : (
                    <Box align={'right'}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <MuiMainButton
                                disabled={isDeletePending || isUpdatePending}
                                name="cancel"
                                title="목록"
                                onClick={() => navigate('/system/ue/list')}
                            />
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
