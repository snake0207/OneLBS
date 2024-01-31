import { Box, Container } from '@mui/material'
import { useState } from 'react'
import HistoryTable from '#/components/approval/HistoryTable/index.jsx'
import Typography from '@mui/material/Typography'
import SearchFilter from '#/components/approval/SearchFilter/index.jsx'
import CommonPagination from '#/components/common/pagination/CommonPagination.jsx'
import { useNavigate } from 'react-router-dom'

const ApprovalHistoryPage = () => {
    const [dummyData, setDummyData] = useState([
        {
            id: 1,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '승인요청',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 2,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '승인완료',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 3,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '임시저장',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 4,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 5,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 6,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 7,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 8,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 9,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 10,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
        {
            id: 11,
            name: "Maggie's Cafe",
            region: 'EU',
            requester: '원숭이',
            reviewer: '엉덩이',
            approver: '바나나',
            request_date: '2023-11-11 00:11:22',
            review_date: '2023-11-11 00:11:22',
            reject_date: '2023-11-11 00:11:22',
            approval_date: '2023-11-11 00:11:22',
            status: '반려',
            request_reason: '뭔가 잘못되었음',
            reject_reason: '뭔지 자세히 얘기할 것',
            history: '위, 경도 수정',
        },
    ])

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
            <Box>
                <Typography variant={'h5'} fontWeight={'bold'}>
                    검색 필터
                </Typography>
                <Container maxWidth={'800px'}>
                    <SearchFilter handleSubmitFilter={handleSubmitFilter} />
                </Container>
            </Box>

            <Box>
                <Typography variant={'h5'} fontWeight={'bold'}>
                    전체이력조회 테이블
                </Typography>
                <Container>
                    <HistoryTable
                        dummyData={dummyData}
                        headers={[
                            'No.',
                            '명칭',
                            '국가',
                            '신청자',
                            '검토자',
                            '승인자',
                            '요청일',
                            '검토일',
                            '반려일',
                            '승인일',
                            '상태',
                            '승인요청 이유',
                            '반려 이유',
                            '승인이력',
                        ]}
                    />
                    <CommonPagination
                        dataLength={dummyData.length} // total element count
                        onChangePageFunction={handlePageChange} // 페이지 변경 시 실행 함수
                    />
                </Container>
            </Box>
        </Box>
    )
}

export default ApprovalHistoryPage
