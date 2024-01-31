import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { Box, Card, Divider, Table, TableBody, TableCell, TableRow } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ArrowForwardIos } from '@mui/icons-material'
import { tokens } from '#/theme/index.js'
import ApprovalLine from '#/components/approval/Detail/ApprovalLine/index.jsx'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import HistoryTable from '#/components/approval/Detail/HistoryTable/index.jsx'
import { useEffect } from 'react'
import { useModalActions } from '#/store/useModalStore.js'

const ApprovalDetailPage = () => {
    const params = useParams()
    const useModal = useModalActions()
    const approvalLineContents = {
        requester: {
            title: '검토 요청',
            team: '콘텐츠플랫폼개발팀',
            name: '박다정 책임',
            date: '2024-01-19 12:10:02',
        },
        reviewer: {
            title: '검토 완료',
            team: '콘텐츠플랫폼개발팀',
            name: '박다정 책임',
            date: '2024-01-19 12:10:02',
        },
        approver: {
            title: '승인 완료',
            team: '콘텐츠플랫폼개발팀',
            name: '박다정 책임',
            date: '2024-01-19 12:10:02',
        },
    }
    const historyList = [
        { date: '2024-01-19 12:10:02', status: '승인요청', history: '위.경도 수정 요청' },
        { date: '2024-01-19 12:10:02', status: '반려', history: '위.경도 수정 요청 반려' },
        { date: '2024-01-19 12:10:02', status: '임시저장', history: '위.경도 수정 재 승인 요청' },
        { date: '2024-01-19 12:10:02', status: '승인완료', history: '승인 완료' },
    ]

    useEffect(() => {
        console.log(params)
    }, [params])

    return (
        <>
            <TitleBar title={t('Approval Detail')} />
            <Card variant="outlined" sx={{ mt: 4, display: 'flex' }}>
                <Grid container xs={6} sx={{ p: 2, flexDirection: 'column', gap: 4 }}>
                    {/* 결제라인 */}
                    <Box>
                        <Typography variant={'h6'} fontWeight={'bold'}>
                            결재라인
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Grid container flexWrap={'nowrap'} sx={{ justifyContent: 'center' }}>
                            <Grid xs={4}>
                                <ApprovalLine
                                    type={'요청자'}
                                    content={approvalLineContents.requester}
                                />
                            </Grid>
                            <ArrowForwardIos
                                fontSize="large"
                                sx={{ transform: 'translateY(4rem)' }}
                            />
                            <Grid xs={4}>
                                <ApprovalLine
                                    type={'검토자'}
                                    content={approvalLineContents.reviewer}
                                />
                            </Grid>
                            <ArrowForwardIos
                                fontSize="large"
                                sx={{ transform: 'translateY(4rem)' }}
                            />
                            <Grid xs={4}>
                                <ApprovalLine
                                    type={'승인자'}
                                    content={approvalLineContents.approver}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 정보 탭 */}
                    <Box>
                        <InfoTab />
                    </Box>
                    {/* 카테고리 */}
                    <Box>
                        <Typography variant={'h6'} fontWeight={'bold'}>
                            카테고리
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Box>
                            <Typography>evCharging</Typography>
                            <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ backgroundColor: tokens.grey[100] }}
                                        >
                                            brand
                                        </TableCell>
                                        <TableCell>-</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                    {/* 승인 요청 이유*/}
                    <Box>
                        <Typography variant={'h6'} fontWeight={'bold'}>
                            승인 요청 이유
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Box>
                            <Typography>위.경도 수정</Typography>
                        </Box>
                    </Box>
                    {/* Comment */}
                    <Box>
                        <Typography variant={'h6'} fontWeight={'bold'}>
                            Comment
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Box>
                            <Typography>위.경도 재확인 후 요청</Typography>
                        </Box>
                    </Box>
                    {/* 이력 */}
                    <Box>
                        <Typography variant={'h6'} fontWeight={'bold'}>
                            이력
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Box>
                            <HistoryTable historyList={historyList} />
                        </Box>
                    </Box>
                </Grid>

                {/* 지도 영역 */}
                <Grid
                    xs={6}
                    sx={{
                        minHeight: 700,
                        flex: 1,
                        backgroundColor: tokens.grey[200],
                        textAlign: 'center',
                    }}
                >
                    지도 영역
                </Grid>
            </Card>
        </>
    )
}

export default ApprovalDetailPage
