import { Box, Container, Icon } from '@mui/material'
import HistoryTable from '#/components/approval/HistoryTable/index.jsx'
import SearchFilter from '#/components/approval/SearchFilter/index.jsx'
import CommonPagination from '#/components/common/pagination/CommonPagination.jsx'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { BrowserView, isMobile, MobileView } from 'react-device-detect'
import HistoryTableMobile from '#/components/approval/HistoryTable/Mobile/index.jsx'
import { useCallback, useEffect, useRef, useState } from 'react'
import TotalCount from '#/components/approval/HistoryTable/TotalCount/index.jsx'
import ViewMoreButton from '#/components/approval/HistoryTable/Mobile/ViewMoreButton/index.jsx'
import { getUserTypeFromPath } from '#/common/libs/approvalParser.js'

import PoiSearchIcon from '#/assets/poiSearchIcon.svg'
import PoiSearchIconDark from '#/assets/poiSearchIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'

import style from './style.module'
import { useGetHistoryList } from '#/hooks/queries/approval.js'
import { countByTypeMapper } from '#/pages/ApprovalHistoryPage/mapper.js'

const ApprovalHistoryPage = () => {
    // TODO: 임시상태값 - temporary, request, reviewed, approved, rejected_review, rejected_approval,
    const params = useParams()
    const userType = getUserTypeFromPath(params.type || '')
    const navigator = useNavigate()
    const url = window.location.pathname
    const listData = useGetHistoryList()
    const [listPerPage, setListPerPage] = useState([])
    const [totalCounts, setTotalCounts] = useState({})
    const [isLastView, setIsLastView] = useState(true)
    const currentPage = useRef(1)

    useEffect(() => {
        if (listData?.requestList) {
            setListPerPage(paginationData(listData.requestList, 1))
            setTotalCounts(countByTypeMapper(listData.totalCnt, listData.typeCnt))
            listData.requestList.length < 10 ? setIsLastView(true) : setIsLastView(false)
        }
    }, [listData])

    const paginationData = useCallback((total, curPage) => {
        const itemsPerPage = 10
        const startIndex = (curPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return total.slice(startIndex, endIndex)
    }, [])

    // 페이지네이션 컴포넌트에 넘겨 페이지 변경 시 실행될 함수
    const handlePageChange = (page) => {
        currentPage.current = page
        // TODO: API GET
        console.log(`ACTIVE PAGE IS >> ${page}`)
        setListPerPage(paginationData(listData.requestList, page))
    }

    const handleSubmitFilter = (params) => {
        // TODO: API GET
        console.log('FILTER PARAM >> ', params)
    }

    const handleViewChange = () => {
        console.log(`VIEW MORE`)
        const newData = paginationData(listData.requestList, currentPage.current + 1)
        if (newData.length > 0) setListPerPage([...listPerPage, ...newData])
        if (newData.length < 10) setIsLastView(true)
        currentPage.current++
    }

    const handleClickRow = (id) => {
        navigator(`${url}/detail/${id}`)
    }
    const { themeMode } = useLayoutStore()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <MobileView>
                <Icon
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: ' 75px',
                        zIndex: '4',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={PoiSearchIcon} style={{ display: 'flex', width: '24px' }} />
                    ) : (
                        <img src={PoiSearchIconDark} style={{ display: 'flex', width: '24px' }} />
                    )}
                </Icon>
            </MobileView>
            <TitleBar title={t(`list_${userType}`, 'approval')} />
            <Container sx={style.searchBox}>
                <SearchFilter
                    type={userType}
                    handleSubmitFilter={handleSubmitFilter}
                    isMobile={isMobile}
                />
            </Container>
            <Box sx={style.contentBox}>
                <MobileView>
                    <TotalCount type={userType} counts={totalCounts} />
                    <HistoryTableMobile
                        type={userType}
                        dummyData={listPerPage}
                        onClickRowFunction={handleClickRow}
                    />
                    {!isLastView && <ViewMoreButton onChangePageFunction={handleViewChange} />}
                </MobileView>
                <BrowserView>
                    <TotalCount type={userType} counts={totalCounts} />
                    <HistoryTable
                        type={userType}
                        dataList={listPerPage}
                        onClickRowFunction={handleClickRow}
                        currentPage={currentPage.current}
                    />
                    <CommonPagination
                        dataLength={listData?.totalCnt} // total element count
                        onChangePageFunction={handlePageChange} // 페이지 변경 시 실행 함수
                    />
                </BrowserView>
            </Box>
        </Box>
    )
}

export default ApprovalHistoryPage
