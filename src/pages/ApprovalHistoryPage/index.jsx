import { Box, Container, Icon } from '@mui/material'
import HistoryTable from '#/components/approval/HistoryTable/index.jsx'
import SearchFilter from '#/components/approval/SearchFilter/index.jsx'
import CommonPagination from '#/components/common/pagination/CommonPagination.jsx'
import dummyData from '#/mock/data/approvalData.json'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import HistoryTableMobile from '#/components/approval/HistoryTable/Mobile/index.jsx'
import { useRef, useState } from 'react'
import TotalCount from '#/components/approval/HistoryTable/TotalCount/index.jsx'
import ViewMoreButton from '#/components/approval/HistoryTable/Mobile/ViewMoreButton/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'
import { getUserTypeFromPath } from '#/common/libs/approvalParser.js'

import PoiSearchIcon from '#/assets/poiSearchIcon.svg'
import PoiSearchIconDark from '#/assets/poiSearchIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'

import style from './style.module'

const ApprovalHistoryPage = () => {
    // TODO: 임시상태값 - temporary, request, reviewed, approved, rejected_review, rejected_approval,
    const params = useParams()
    const popupActions = usePopupActions()
    const navigator = useNavigate()
    const userType = getUserTypeFromPath(params.type)
    const url = window.location.pathname
    const totalCounts = useRef({
        total: dummyData?.length,
        temporary: 1,
        request: 1,
        reviewed: 1,
        approved: 1,
        rejected: 7,
    })
    const [dummyList, setDummyList] = useState(dummyData)
    const [isLastView, setIsLastView] = useState(false)

    // 페이지네이션 컴포넌트에 넘겨 페이지 변경 시 실행될 함수
    const handlePageChange = (page) => {
        // TODO: API GET
        console.log(`ACTIVE PAGE IS >> ${page}`)
    }

    const handleSubmitFilter = (params) => {
        // TODO: API GET
        console.log('FILTER PARAM >> ', params)
    }

    const handleViewChange = () => {
        console.log(`VIEW MORE`)
        const moreData = [
            {
                id: 12,
                name: "1 Maggie's Cafe",
                region: 'EU',
                requester: '김모모',
                reviewer: '박모모',
                approver: '최모모',
                request_date: '2023-11-11 00:11:22',
                review_date: '2023-11-11 00:11:22',
                reject_date: '2023-11-11 00:11:22',
                approval_date: '2023-11-11 00:11:22',
                status: 'request',
                request_reason: '뭔가 잘못되었음',
                reject_reason: '뭔지 자세히 얘기할 것',
                history: '위, 경도 수정',
            },
            {
                id: 13,
                name: "2 Maggie's Cafe",
                region: 'EU',
                requester: '김모모',
                reviewer: '박모모',
                approver: '최모모',
                request_date: '2023-11-11 00:11:22',
                review_date: '2023-11-11 00:11:22',
                reject_date: '2023-11-11 00:11:22',
                approval_date: '2023-11-11 00:11:22',
                status: 'request',
                request_reason: '뭔가 잘못되었음',
                reject_reason: '뭔지 자세히 얘기할 것',
                history: '위, 경도 수정',
            },
        ]
        moreData.length ? setDummyList([...dummyList, ...moreData]) : setIsLastView(true)
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
                    <TotalCount type={userType} counts={totalCounts.current} />
                    <HistoryTableMobile
                        type={userType}
                        dummyData={dummyList}
                        onClickRowFunction={handleClickRow}
                    />
                    {!isLastView && <ViewMoreButton onChangePageFunction={handleViewChange} />}
                </MobileView>
                <BrowserView>
                    <TotalCount type={userType} counts={totalCounts.current} />
                    <HistoryTable
                        type={userType}
                        dummyData={dummyData}
                        onClickRowFunction={handleClickRow}
                    />
                    <CommonPagination
                        dataLength={dummyData.length} // total element count
                        onChangePageFunction={handlePageChange} // 페이지 변경 시 실행 함수
                    />
                </BrowserView>
            </Box>
        </Box>
    )
}

export default ApprovalHistoryPage
