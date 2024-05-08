import { useEffect, useState } from 'react'
import { Box, Table, TableHead, TableRow, TableCell, Typography, TableBody } from '@mui/material'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'

import TitleBar from '#/components/common/menu/TitleBar'

import style from './style.module'
import SearchFilter from '../Filter'
import { useGetFacilityBtsSearch } from '#/hooks/queries/facility'
import { OllehMap } from '#/components/common/map/ollehMap'

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
    const [isQueryState, setIsQueryState] = useState(false)
    const [isSearchClick, setIsSearchClick] = useState(false)
    const [queryParams, setQueryParams] = useState({})
    const init_pos = {
        longitude: 127.1279874,
        latitude: 37.3998912,
        title: 'KT 분당',
    }
    const [locations, setLocations] = useState({ ...init_pos })
    const { data: apiResult } = useGetFacilityBtsSearch(queryParams, {
        enabled: isQueryState && isSearchClick,
    })

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setIsQueryState(true)
        setIsSearchClick(true)
        setQueryParams({ ...queryParams, ...values })
    }

    useEffect(() => {
        if (isQueryState && apiResult) {
            console.log('apiResult : ', apiResult)
            if (apiResult?.code === '0000') {
                setIsQueryState(false)
                setIsSearchClick(false)
                setLocations(apiResult?.data)
            }
        }
    }, [apiResult, queryParams])

    return (
        <Box>
            <TitleBar title={`기지국 시설정보`} />
            <SearchFilter onSearch={handleSearch} />
            <Box sx={style.contentBox}>
                <TitleArea title={`검색 결과`} />

                <Table sx={style.table_base}>
                    <TableBody>
                        {/* row - 1, #009ACC */}
                        <TableRow>
                            <TableCell style={style.cellTitle}>{`Cell-ID`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.data?.cellId}</TableCell>
                            <TableCell style={style.cellTitle}>{`MCC`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.data?.mcc}</TableCell>
                            <TableCell style={style.cellTitle}>{`MNC`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.data?.mnc}</TableCell>
                            <TableCell style={style.cellTitle}>{`PCI`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.data?.pci}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={style.cellTitle}>{`TAC`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.data?.tac}</TableCell>
                            <TableCell style={style.cellTitle}>{`RUID`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.data?.ruId}</TableCell>
                            <TableCell style={style.cellTitle}>{`동코드`}</TableCell>
                            <TableCell style={{ width: '20%' }}>
                                {apiResult?.data?.zipcode}
                            </TableCell>
                            <TableCell style={style.cellTitle}>{`주소`}</TableCell>
                            <TableCell style={{ width: '20%' }}>
                                {apiResult?.data?.address}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={style.cellTitle}>{`위도`}</TableCell>
                            <TableCell style={style.cellInput}>
                                {apiResult?.data?.latitude}
                            </TableCell>
                            <TableCell style={style.cellTitle}>{`경도`}</TableCell>
                            <TableCell style={style.cellInput}>
                                {apiResult?.data?.longitude}
                            </TableCell>
                            <TableCell style={style.cellTitle}>{`생성일시`}</TableCell>
                            <TableCell style={{ width: '20%' }}>
                                {apiResult?.data?.regDate}
                            </TableCell>
                            <TableCell style={style.cellTitle}>{`갱신일시`}</TableCell>
                            <TableCell style={{ width: '20%' }}>
                                {apiResult?.data?.updDate}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* 지도 영역 */}
                <Box sx={{ width: '100%', height: '400px' }}>
                    {!isQueryState && <OllehMap locations={[locations]} />}
                </Box>
            </Box>
        </Box>
    )
}

export default DetailForm
