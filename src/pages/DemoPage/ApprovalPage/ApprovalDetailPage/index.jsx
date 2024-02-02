import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { Box, Card, Divider, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ArrowForwardIos } from '@mui/icons-material'
import ApprovalLine from '#/components/approval/Detail/ApprovalLine/index.jsx'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import HistoryTable from '#/components/approval/Detail/HistoryTable/index.jsx'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import CategoryTable from '#/components/approval/Detail/CategoryTable/index.jsx'

const ApprovalDetailPage = () => {
    const params = useParams()
    const theme = useTheme()
    const dummyData = {
        approvalLineContents: {
            requester: {
                team: '콘텐츠플랫폼개발팀',
                name: '박다정 책임',
                date: '2024-01-19 12:10:02',
                status: 1, // temp
            },
            reviewer: {
                team: '콘텐츠플랫폼개발팀',
                name: '박다정 책임',
                date: '2024-01-19 12:10:02',
                status: 1,
            },
            approver: {
                title: '승인 완료',
                team: '콘텐츠플랫폼개발팀',
                name: '박다정 책임',
                date: '2024-01-19 12:10:02',
                status: 0,
            },
        },
        historyList: [
            {
                date: '2024-01-19 12:10:02',
                status: t('status.request', 'approval'),
                history: '위.경도 수정 요청',
            },
            {
                date: '2024-01-19 12:10:02',
                status: t('status.rejected', 'approval'),
                history: '위.경도 수정 요청 반려',
            },
            {
                date: '2024-01-19 12:10:02',
                status: t('status.temporary', 'approval'),
                history: '위.경도 수정 재 승인 요청',
            },
            {
                date: '2024-01-19 12:10:02',
                status: t('status.approved', 'approval'),
                history: '승인 완료',
            },
        ],
        info: {
            name: 'Phillips 66',
            address: 'Phillips 66Phillips 66',
            lat: '45.123123',
            lon: '-103.34234',
        },
        category: {
            brand: null,
            name: 'evCharging',
        },
    }
    const [isShowInputs, setIsShowInputs] = useState({
        name: false,
        address: false,
        lat: false,
        lon: false,
        brand: false,
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            lat: '',
            lon: '',
            brand: '',
        },
    })

    useEffect(() => {
        console.log(params)
    }, [params])

    const RenderEditIcons = (type) => {
        return isShowInputs[type] ? (
            <SaveIcon fontSize={'small'} onClick={() => handleShowEditInputs(type)} />
        ) : (
            <EditIcon fontSize={'small'} onClick={() => handleShowEditInputs(type)} />
        )
    }

    const RenderTitle = ({ title }) => {
        return (
            <>
                <Typography variant={'h6'} fontWeight={'bold'}>
                    {title}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
            </>
        )
    }

    const handleShowEditInputs = (type) => {
        setIsShowInputs({ ...isShowInputs, [type]: !isShowInputs[type] })
        console.log(formik.values)
    }

    return (
        <>
            <TitleBar title={t('history_detail', 'approval')} />
            <Card variant="outlined" sx={{ mt: 4, display: 'flex' }}>
                <Grid container xs={6} sx={{ p: 2, flexDirection: 'column', gap: 4 }}>
                    {/* 결제라인 */}
                    <Box>
                        <RenderTitle title={t('line', 'approval')} />
                        <Grid container flexWrap={'nowrap'} sx={{ justifyContent: 'center' }}>
                            <Grid xs={4}>
                                <ApprovalLine
                                    type={'요청'}
                                    content={dummyData.approvalLineContents.requester}
                                />
                            </Grid>
                            <ArrowForwardIos
                                fontSize="large"
                                sx={{ transform: 'translateY(4rem)' }}
                            />
                            <Grid xs={4}>
                                <ApprovalLine
                                    type={'검토'}
                                    content={dummyData.approvalLineContents.reviewer}
                                />
                            </Grid>
                            <ArrowForwardIos
                                fontSize="large"
                                sx={{ transform: 'translateY(4rem)' }}
                            />
                            <Grid xs={4}>
                                <ApprovalLine
                                    type={'승인'}
                                    content={dummyData.approvalLineContents.approver}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 정보 탭 */}
                    <Box>
                        <InfoTab
                            data={dummyData.info}
                            isShowInputs={isShowInputs}
                            RenderEditIcons={RenderEditIcons}
                            formik={formik}
                        />
                    </Box>
                    {/* 카테고리 */}
                    <Box>
                        <RenderTitle title={t('category', 'approval')} />
                        <CategoryTable
                            data={dummyData.category}
                            isShowInputs={isShowInputs}
                            RenderEditIcons={RenderEditIcons}
                            formik={formik}
                        />
                    </Box>
                    {/* 승인 요청 이유*/}
                    <Box>
                        <RenderTitle title={t('request_reason', 'approval')} />
                        <Box>
                            <Typography>위.경도 수정</Typography>
                        </Box>
                    </Box>
                    {/* Comment */}
                    <Box>
                        <RenderTitle title={t('comment', 'approval')} />
                        <Box>
                            <Typography variant={'subtitle1'} fontWeight={'bold'}>
                                {t('reviewer', 'approval')}
                            </Typography>
                            <Typography>위.경도 재확인 후 요청</Typography>
                        </Box>
                        <Box>
                            <Typography variant={'subtitle1'} fontWeight={'bold'}>
                                {t('approver', 'approval')}
                            </Typography>
                            <Typography>-</Typography>
                        </Box>
                    </Box>
                    {/* 이력 */}
                    <Box>
                        <RenderTitle title={t('history', 'approval')} />
                        <Box>
                            <HistoryTable historyList={dummyData.historyList} />
                        </Box>
                    </Box>
                </Grid>

                {/* 지도 영역 */}
                <Grid
                    xs={6}
                    sx={{
                        minHeight: 700,
                        flex: 1,
                        backgroundColor: theme.palette.grey[200],
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
