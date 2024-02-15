import { Box, Container } from '@mui/material'
import HistoryTable from '#/components/approval/HistoryTable/index.jsx'
import SearchFilter from '#/components/approval/SearchFilter/index.jsx'
import CommonPagination from '#/components/common/pagination/CommonPagination.jsx'
import dummyData from '../approvalData.json'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import HistoryTableMobile from '#/components/approval/HistoryTable/Mobile/index.jsx'
import { useRef, useState } from 'react'
import TotalCount from '#/components/approval/HistoryTable/TotalCount/index.jsx'
import ViewMoreButton from '#/components/approval/HistoryTable/Mobile/ViewMoreButton/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'

const ApprovalHistoryPage = () => {
    // TODO: 임시상태값 - temporary, request, reviewed, approved, rejected(승인자/검토자 구분필요),
    const params = useParams()
    const popupActions = usePopupActions()
    const navigator = useNavigate()
    const userType = params.type
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

    const handleClickRow = (target, id) => {
        console.log(target, id)
        if (target.tagName === 'BUTTON') return
        navigator(`${url}/detail/${id}`)
    }

    const handleClickButton = (action, id) => {
        console.log('ACTION >> ', action, id)
        if (action === 'retrieve')
            popupActions.showPopup('confirm', t(`modal.${action.toLowerCase()}`, 'approval'), () =>
                openAlertPopup(action),
            )
        else navigator(`${url}/detail/${id}`)
    }

    const openAlertPopup = (action) => {
        // TODO: API
        console.log('API')
        popupActions.showPopup('alert', t(`confirmed.${action.toLowerCase()}`, 'approval'))
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TitleBar title={t(`list_${userType}`, 'approval')} />
            <Container>
                <SearchFilter
                    type={userType}
                    handleSubmitFilter={handleSubmitFilter}
                    isMobile={isMobile}
                />
            </Container>
            <MobileView>
                <TotalCount type={userType} counts={totalCounts.current} />
                <HistoryTableMobile
                    type={userType}
                    dummyData={dummyList}
                    onClickButtonFunction={handleClickButton}
                    onClickRowFunction={handleClickRow}
                />
                {!isLastView && <ViewMoreButton onChangePageFunction={handleViewChange} />}
            </MobileView>
            <BrowserView>
                <TotalCount type={userType} counts={totalCounts.current} />
                <HistoryTable
                    type={userType}
                    dummyData={dummyData}
                    onClickButtonFunction={handleClickButton}
                    onClickRowFunction={handleClickRow}
                />
                <CommonPagination
                    dataLength={dummyData.length} // total element count
                    onChangePageFunction={handlePageChange} // 페이지 변경 시 실행 함수
                />
            </BrowserView>
        </Box>
    )
}

export default ApprovalHistoryPage
