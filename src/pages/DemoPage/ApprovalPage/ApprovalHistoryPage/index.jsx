import { Box, Container } from '@mui/material'
import HistoryTable from '#/components/approval/HistoryTable/index.jsx'
import SearchFilter from '#/components/approval/SearchFilter/index.jsx'
import CommonPagination from '#/components/common/pagination/CommonPagination.jsx'
import dummyData from '../approvalData.json'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { useParams } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import HistoryTableMobile from '#/components/approval/HistoryTable/Mobile/index.jsx'
import { useRef } from 'react'
import TotalCount from '#/components/approval/HistoryTable/TotalCount/index.jsx'

const ApprovalHistoryPage = () => {
    const params = useParams()
    const userType = params.type
    const totalCounts = useRef({
        total: dummyData?.length,
        temporary: 1,
        request: 1,
        reviewed: 1,
        approved: 1,
        rejected: 7,
    })

    // 페이지네이션 컴포넌트에 넘겨 페이지 변경 시 실행될 함수
    const handlePageChange = (page) => {
        // TODO: API GET
        console.log(`ACTIVE PAGE IS >> ${page}`)
    }

    const handleSubmitFilter = (params) => {
        // TODO: API GET
        console.log('FILTER PARAM >> ', params)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TitleBar title={t(`list_${userType}`, 'approval')} />
            <Container>
                <SearchFilter type={userType} handleSubmitFilter={handleSubmitFilter} />
            </Container>
            <MobileView>
                <TotalCount type={userType} counts={totalCounts.current} />
                <HistoryTableMobile type={userType} dummyData={dummyData} />
            </MobileView>
            <BrowserView>
                <TotalCount type={userType} counts={totalCounts.current} />
                <HistoryTable type={userType} dummyData={dummyData} />
                <CommonPagination
                    dataLength={dummyData.length} // total element count
                    onChangePageFunction={handlePageChange} // 페이지 변경 시 실행 함수
                />
            </BrowserView>
        </Box>
    )
}

export default ApprovalHistoryPage
