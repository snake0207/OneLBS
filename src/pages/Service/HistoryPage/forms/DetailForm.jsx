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
} from '@mui/material'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'

import TitleBar from '#/components/common/menu/TitleBar'

import style from './style.module'
import { useGetServiceHistoryDetail } from '#/hooks/queries/service'
import { OllehMap } from '#/components/common/map/ollehMap'
import { getBtsTypeListLabel, getCenterLabel } from '#/common/libs/service'

import CellIcon from '#/components/common/map/ollehMap/img/cell.png'
import WiFiIcon from '#/components/common/map/ollehMap/img/wifi.png'
import GnssIcon from '#/components/common/map/ollehMap/img/gnss.png'

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
    const [bounceRow, setBounceRow] = useState({})
    const init_pos = {
        longitude: 127.1279874,
        latitude: 37.3998912,
        title: 'KT 분당',
    }
    const [locations, setLocations] = useState([init_pos])
    const [isQueryState, setIsQueryState] = useState(true)
    const { data: apiResult } = useGetServiceHistoryDetail(
        { trId: row?.trId },
        {
            enabled: isQueryState,
        },
    )
    const filterArray = (sign = null, array) => {
        // 'P':측위목록, 'B':기지국목록, 'W':wifi목록
        return array
            .filter((row) => row.latitude && row.longitude)
            .map((item) => ({
                ...item,
                id: `${sign}_${item.id}`,
                title: sign === 'P' ? item.algo : sign === 'B' ? item.cellid : item.mac,
            }))
    }

    useEffect(() => {
        if (isQueryState && apiResult) {
            console.log('Detail apiResult : ', apiResult)
            if (apiResult?.code === '0000') {
                const setLists = [
                    ...filterArray('P', apiResult?.data?.posList.lists),
                    ...filterArray('B', apiResult?.data?.btsList.lists),
                    ...filterArray('W', apiResult?.data?.wifiList.lists),
                ]
                setLocations(setLists)
                setIsQueryState(false)
            }
        }
    }, [apiResult])

    locations.length > 0 && console.log('Detail locations : ', locations)

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
                            <TableCell sx={{ width: '8%' }}>{`응답(초)`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{getCenterLabel[row?.center].label}</TableCell>
                            <TableCell>{row?.reqDate}</TableCell>
                            <TableCell>{row?.resDate}</TableCell>
                            <TableCell>{row?.serviceName}</TableCell>
                            <TableCell>{row?.opType}</TableCell>
                            <TableCell>{row?.reqMdn}</TableCell>
                            <TableCell>{row?.targetMdn}</TableCell>
                            <TableCell>{row?.posMethod}</TableCell>
                            <TableCell>{row?.model}</TableCell>
                            <TableCell>{row?.result}</TableCell>
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
                            width: '55%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 4,
                        }}
                    >
                        <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                            <Box sx={{ width: '50%' }}>
                                <TitleArea title={`측위 목록`} />
                                <TableContainer component={Box} style={{ height: 200 }}>
                                    <Table sx={style.table_base}>
                                        <TableHead>
                                            {/* row - 1 */}
                                            <TableRow style={{ backgroundColor: '#009ACC' }}>
                                                <TableCell style={{ width: '20%' }}>{``}</TableCell>
                                                <TableCell
                                                    style={{ width: '40%' }}
                                                >{`측위방식`}</TableCell>
                                                <TableCell
                                                    style={{ width: '40%' }}
                                                >{`알고리즘`}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {apiResult?.data?.posList?.totalCount ? (
                                                apiResult?.data?.posList?.lists.map((item, idx) => (
                                                    <TableRow
                                                        key={idx}
                                                        onClick={() => {
                                                            item.longitude > 0
                                                                ? setBounceRow({
                                                                      id: `P_${item.id}`,
                                                                  })
                                                                : null
                                                        }}
                                                    >
                                                        <TableCell>
                                                            {item.posMethod === 'CELL' && (
                                                                <img
                                                                    src={CellIcon}
                                                                    width="20px"
                                                                    height="30px"
                                                                />
                                                            )}
                                                            {item.posMethod === 'WIFI' && (
                                                                <img
                                                                    src={WiFiIcon}
                                                                    width="20px"
                                                                    height="30px"
                                                                />
                                                            )}
                                                            {item.posMethod === 'GNSS' && (
                                                                <img
                                                                    src={GnssIcon}
                                                                    width="20px"
                                                                    height="30px"
                                                                />
                                                            )}
                                                        </TableCell>
                                                        <TableCell>{item.posMethod}</TableCell>
                                                        <TableCell>{item.algo}</TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={3}
                                                        align={`center`}
                                                    >{`No data Found`}</TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box sx={{ width: '50%' }}>
                                <TitleArea title={`기지국 목록`} />
                                <TableContainer component={Box} style={{ height: 200 }}>
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
                                        </TableHead>
                                        <TableBody>
                                            {apiResult?.data?.btsList?.totalCount ? (
                                                apiResult?.data?.btsList.lists.map((item, idx) => (
                                                    <TableRow
                                                        key={idx}
                                                        onClick={() => {
                                                            item.longitude > 0
                                                                ? setBounceRow({
                                                                      id: `B_${item.id}`,
                                                                  })
                                                                : null
                                                        }}
                                                    >
                                                        <TableCell>
                                                            {getBtsTypeListLabel[item.network] !==
                                                            undefined
                                                                ? getBtsTypeListLabel[item.network]
                                                                      .label
                                                                : `${item.network} Unknown`}
                                                        </TableCell>
                                                        <TableCell>{item.cellid}</TableCell>
                                                        <TableCell>
                                                            {item.serving ? `serving` : `neighbor`}
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={3}
                                                        align={`center`}
                                                    >{`No data Found`}</TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
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
                                            <TableCell style={{ width: '20%' }}>{`SSID`}</TableCell>
                                            <TableCell
                                                style={{ width: '10%' }}
                                            >{`Grade`}</TableCell>
                                            <TableCell style={{ width: '10%' }}>{`Band`}</TableCell>
                                            <TableCell style={{ width: '10%' }}>{`RSSI`}</TableCell>
                                            <TableCell
                                                style={{ width: '20%' }}
                                            >{`Status`}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {apiResult?.data?.wifiList?.totalCount ? (
                                            apiResult?.data?.wifiList?.lists.map((item, idx) => (
                                                <TableRow
                                                    key={idx}
                                                    onClick={() => {
                                                        item.longitude > 0
                                                            ? setBounceRow({
                                                                  id: `W_${item.id}`,
                                                              })
                                                            : null
                                                    }}
                                                >
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
                                                <TableCell
                                                    colSpan={6}
                                                    align={`center`}
                                                >{`No data Found`}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <TitleArea title={`하위 트랜잭션 목록`} />
                            <TableContainer style={{ maxHeight: 300 }}>
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
                                                style={{ width: '45%' }}
                                            >{`메시지 전문`}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {apiResult?.data?.transList?.totalCount ? (
                                            apiResult?.data?.transList?.lists.map((item, idx) => (
                                                <TableRow key={idx} style={{ width: '100%' }}>
                                                    <TableCell>{item.targetSystem}</TableCell>
                                                    <TableCell>{item.posMethod}</TableCell>
                                                    <TableCell>{item.result}</TableCell>
                                                    <TableCell>{item.messages}</TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={4}
                                                    align={`center`}
                                                >{`No data Found`}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                    <Box sx={{ width: '48%' }}>
                        {!isQueryState && (
                            <OllehMap locations={[...locations]} bounceMarker={bounceRow} />
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailForm
