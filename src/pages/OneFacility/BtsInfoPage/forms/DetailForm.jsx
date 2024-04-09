import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Box, Table, TableHead, TableRow, TableCell, Typography, TableBody } from '@mui/material'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'

import TitleBar from '#/components/common/menu/TitleBar'

import style from './style.module'
import SearchFilter from '../Filter'
import { useGetFacilityBtsSearch } from '#/hooks/queries/one-facility'
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
    const navigate = useNavigate()
    const [isSearchClick, setIsSearchClick] = useState(false)
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult } = useGetFacilityBtsSearch(
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
            <TitleBar title={`기지국 시설정보`} />
            <SearchFilter onSearch={handleSearch} />
            <Box sx={style.contentBox}>
                <TitleArea title={`검색 결과`} />

                <Table sx={style.table_base}>
                    <TableBody>
                        {/* row - 1, #009ACC */}
                        <TableRow>
                            <TableCell style={style.cellTitle}>{`Cell-ID`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.cellid}</TableCell>
                            <TableCell style={style.cellTitle}>{`MCC`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.mcc}</TableCell>
                            <TableCell style={style.cellTitle}>{`MNC`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.mnc}</TableCell>
                            <TableCell style={style.cellTitle}>{`PCI`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.pci}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={style.cellTitle}>{`TAC`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.tac}</TableCell>
                            <TableCell style={style.cellTitle}>{`RUID`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.ruid}</TableCell>
                            <TableCell style={style.cellTitle}>{`동코드`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.dongCode}</TableCell>
                            <TableCell style={style.cellTitle}>{`주소`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={style.cellTitle}>{`위도`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.latitude}</TableCell>
                            <TableCell style={style.cellTitle}>{`경도`}</TableCell>
                            <TableCell style={style.cellInput}>{apiResult?.longitude}</TableCell>
                            <TableCell style={style.cellTitle}>{`생성일시`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.create_date}</TableCell>
                            <TableCell style={style.cellTitle}>{`갱신일시`}</TableCell>
                            <TableCell style={{ width: '20%' }}>{apiResult?.update_date}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* 지도 영역 */}
                <Box sx={{ width: '100%', height: '400px', backgroundColor: 'lightgray' }}>
                    <OllehMap locations={[{ ...apiResult, title: apiResult?.cellid }]} />
                </Box>
            </Box>
        </Box>
    )
}

export default DetailForm
