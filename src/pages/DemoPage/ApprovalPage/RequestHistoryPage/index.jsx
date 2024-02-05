import { Box, Container } from '@mui/material'
import HistoryTable from '#/components/approval/HistoryTable/index.jsx'
import Typography from '@mui/material/Typography'
import SearchFilter from '#/components/approval/SearchFilter/index.jsx'
import CommonPagination from '#/components/common/pagination/CommonPagination.jsx'
import dummyData from '../approvalData.json'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'

const RequestHistoryPage = () => {
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
            <TitleBar title={t('list_requester', 'approval')} />
            <Container>
                <SearchFilter handleSubmitFilter={handleSubmitFilter} />
            </Container>
            <Container>
                <HistoryTable
                    dummyData={dummyData}
                    headers={[
                        'No.',
                        t('name', 'approval'),
                        t('country', 'approval'),
                        t('requester', 'approval'),
                        t('reviewer', 'approval'),
                        t('approver', 'approval'),
                        t('request_date', 'approval'),
                        t('review_date', 'approval'),
                        t('approval_date', 'approval'),
                        t('state', 'approval'),
                    ]}
                />
                <CommonPagination
                    dataLength={dummyData.length} // total element count
                    onChangePageFunction={handlePageChange} // 페이지 변경 시 실행 함수
                />
            </Container>
        </Box>
    )
}

export default RequestHistoryPage
