import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Stack,
    TableContainer,
    Paper,
} from '@mui/material'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined'

import TitleBar from '#/components/common/menu/TitleBar'

import style from './style.module'
import { useGetServiceHistoryDetail } from '#/hooks/queries/one-service'

const TitleArea = ({ title }) => {
    return (
        <Box display="flex" alignItems="center" mb={2}>
            <PlaylistAddCheckOutlinedIcon />
            <Typography
                sx={{
                    ml: 1,
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'text.darkgray',
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

const DetailForm = () => {
    const {
        state: { row },
    } = useLocation()
    const navigate = useNavigate()
    const [apiSuccess, setApiSuccess] = useState('')
    const [fetchData, setFetchData] = useState({
        poslist: { count: 0, lists: [] },
        btslist: { count: 0, lists: [] },
        wifilist: { count: 0, lists: [] },
        translist: { count: 0, lists: [] },
    })
    const { data: apiResult } = useGetServiceHistoryDetail(
        { id: row?.id },
        {
            enabled: true,
        },
    )

    useEffect(() => {
        if (apiResult) {
            console.log('apiResult : ', apiResult)
            // const { count, lists } = apiResult
            setFetchData({ ...apiResult })
        }
    }, [apiResult])

    console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`측위 결과 상세`} />
            <Box sx={style.contentBox}>
                <TitleArea title={`측위 결과 요약`} />

                <Table sx={style.table_base}>
                    <TableHead>
                        {/* row - 1 */}
                        <TableRow sx={{ backgroundColor: '#009ACC' }}>
                            <TableCell sx={{ width: '8%' }}>{`센터`}</TableCell>
                            <TableCell sx={{ width: '12%' }}>{`요청일시`}</TableCell>
                            <TableCell sx={{ width: '12%' }}>{`응답일시`}</TableCell>
                            <TableCell sx={{ width: '10%' }}>{`서비스`}</TableCell>
                            <TableCell sx={{ width: '8%' }}>{`OP Type`}</TableCell>
                            <TableCell sx={{ width: '8%' }}>{`요청자`}</TableCell>
                            <TableCell sx={{ width: '8%' }}>{`대상자`}</TableCell>
                            <TableCell sx={{ width: '8%' }}>{`측위방식`}</TableCell>
                            <TableCell sx={{ width: '10%' }}>{`단말모델`}</TableCell>
                            <TableCell sx={{ width: '6%' }}>{`결과`}</TableCell>
                            <TableCell sx={{ width: '8%' }}>{`응답시간`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{row?.center}</TableCell>
                            <TableCell>{row?.req_date}</TableCell>
                            <TableCell>{row?.resp_date}</TableCell>
                            <TableCell>{row?.serviceCode}</TableCell>
                            <TableCell>{row?.opType}</TableCell>
                            <TableCell>{row?.reqNo}</TableCell>
                            <TableCell>{row?.targetNo}</TableCell>
                            <TableCell>{row?.posMethod}</TableCell>
                            <TableCell>{row?.ueModel}</TableCell>
                            <TableCell>{row?.respCode}</TableCell>
                            <TableCell>{row?.respTime}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>

                {/* 측위 목록 */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 4,
                        }}
                    >
                        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                            <Box sx={{ width: '50%' }}>
                                <TitleArea title={`측위 목록`} />
                                <TableContainer component={Box} style={{ maxHeight: 200 }}>
                                    <Table sx={style.table_base}>
                                        <TableHead>
                                            {/* row - 1 */}
                                            <TableRow style={{ backgroundColor: '#009ACC' }}>
                                                <TableCell
                                                    style={{ width: '20%' }}
                                                >{`마커`}</TableCell>
                                                <TableCell
                                                    style={{ width: '40%' }}
                                                >{`측위방식`}</TableCell>
                                                <TableCell
                                                    style={{ width: '40%' }}
                                                >{`알고리즘`}</TableCell>
                                            </TableRow>
                                            {fetchData?.poslist?.count ? (
                                                fetchData.poslist.lists.map((item, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell>
                                                            <PersonPinCircleOutlinedIcon />
                                                        </TableCell>
                                                        <TableCell>{item.posMethod}</TableCell>
                                                        <TableCell>{item.algorithm}</TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell>{`No data Found`}</TableCell>
                                                </TableRow>
                                            )}
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box sx={{ width: '50%' }}>
                                <TitleArea title={`기지국 목록`} />
                                <TableContainer component={Box} style={{ maxHeight: 200 }}>
                                    <Table sx={style.table_base}>
                                        <TableHead>
                                            {/* row - 1 */}
                                            <TableRow sx={{ backgroundColor: '#009ACC' }}>
                                                <TableCell
                                                    style={{ width: '20%' }}
                                                >{`Type`}</TableCell>
                                                <TableCell
                                                    style={{ width: '50%' }}
                                                >{`Cell-ID`}</TableCell>
                                                <TableCell
                                                    style={{ width: '30%' }}
                                                >{`Serving`}</TableCell>
                                            </TableRow>
                                            {fetchData?.btslist?.count ? (
                                                fetchData.btslist.lists.map((item, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell>{item.type}</TableCell>
                                                        <TableCell>{item.cellid}</TableCell>
                                                        <TableCell>{item.serving}</TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell>{`No data Found`}</TableCell>
                                                </TableRow>
                                            )}
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Stack>
                        <Box sx={{ width: '100%', height: '200px' }}>
                            <TitleArea title={`WiFi 목록`} />
                            <TableContainer component={Box} style={{ maxHeight: 200 }}>
                                <Table sx={style.table_base}>
                                    <TableHead>
                                        {/* row - 1 */}
                                        <TableRow style={{ backgroundColor: '#009ACC' }}>
                                            <TableCell style={{ width: '30%' }}>{`MAC`}</TableCell>
                                            <TableCell style={{ width: '10%' }}>{`SSID`}</TableCell>
                                            <TableCell
                                                style={{ width: '10%' }}
                                            >{`Grade`}</TableCell>
                                            <TableCell style={{ width: '10%' }}>{`Band`}</TableCell>
                                            <TableCell style={{ width: '10%' }}>{`RSSI`}</TableCell>
                                            <TableCell
                                                style={{ width: '30%' }}
                                            >{`Status`}</TableCell>
                                        </TableRow>
                                        {fetchData?.wifilist?.count ? (
                                            fetchData.wifilist.lists.map((item, idx) => (
                                                <TableRow key={idx}>
                                                    <TableCell>{item.mac}</TableCell>
                                                    <TableCell>{item.ssid}</TableCell>
                                                    <TableCell>{item.grade}</TableCell>
                                                    <TableCell>{item.band}</TableCell>
                                                    <TableCell>{item.rssi}</TableCell>
                                                    <TableCell>{item.status}</TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell>{`No data Found`}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <TitleArea title={`하위 트랜잭션 목록`} />
                            <TableContainer component={Box} style={{ maxHeight: 300 }}>
                                <Table sx={style.table_base}>
                                    <TableHead>
                                        {/* row - 1 */}
                                        <TableRow style={{ backgroundColor: '#009ACC' }}>
                                            <TableCell
                                                style={{ width: '20%' }}
                                            >{`시스템`}</TableCell>
                                            <TableCell
                                                style={{ width: '20%' }}
                                            >{`측위방식`}</TableCell>
                                            <TableCell style={{ width: '15%' }}>{`응답`}</TableCell>
                                            <TableCell
                                            // style={{ width: '20%' }}
                                            >{`메시지 전문`}</TableCell>
                                        </TableRow>
                                        {fetchData?.translist?.count ? (
                                            fetchData.translist.lists.map((item, idx) => (
                                                <TableRow key={idx}>
                                                    <TableCell>{item.system}</TableCell>
                                                    <TableCell>{item.posMethod}</TableCell>
                                                    <TableCell>{item.respCode}</TableCell>
                                                    <TableCell>{item.message}</TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell>{`No data Found`}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                    <Box sx={{ width: '50%', backgroundColor: 'lightgray' }}>지도영역</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailForm
