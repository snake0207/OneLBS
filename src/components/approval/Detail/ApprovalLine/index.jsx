import Typography from '@mui/material/Typography'
import { Box, Card, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'
import Grid from '@mui/material/Unstable_Grid2'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useMemo, useRef } from 'react'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import dummyData from '#/pages/DemoPage/ApprovalPage/detailData.json'

const ApprovalLineContent = ({ title, color, process, content }) => {
    return (
        <Box>
            <Typography align={'center'} variant="subtitle1">
                {title}
            </Typography>
            <Card
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5,
                    p: 0.5,
                }}
            >
                <Typography
                    variant="subtitle2"
                    sx={{
                        backgroundColor: color,
                        borderRadius: 1,
                    }}
                >
                    {process}
                </Typography>
                <Box p={1}>
                    <Typography variant="body2">{content.team}</Typography>
                    <Typography>{content.name}</Typography>
                    <Typography variant="caption">{content.date}</Typography>
                </Box>
            </Card>
        </Box>
    )
}

const ApprovalLine = ({ status, content }) => {
    const theme = useTheme()
    const colors = useRef({
        request: theme.palette.grey[200],
        review: theme.palette.grey[200],
        approval: theme.palette.grey[200],
    })
    const isReject = useRef({
        review: false,
        approval: false,
    })

    useMemo(() => {
        const active = theme.palette.primary.main
        const danger = theme.palette.error.main
        switch (status) {
            case 'request':
                colors.current.request = active
                break
            case 'reviewed':
                colors.current.request = active
                colors.current.review = active
                break
            case 'approved':
                colors.current.request = active
                colors.current.review = active
                colors.current.approval = active
                break
            // TODO: 검토자반려 / 승인자반려 구분필요
            case 'rejected':
                colors.current.request = active
                colors.current.review = danger
                isReject.current.review = true
                break
            // case 'rejected':
            //     colors.current.request = active
            //     colors.current.review = active
            //     colors.current.approval = danger
            //     isReject.current.approval = true
            //     break
        }
    }, [])

    return (
        <Box>
            <Headline title={t('line', 'approval')} />
            <Grid container flexWrap={'nowrap'} sx={{ justifyContent: 'center' }}>
                <Grid xs={4}>
                    <ApprovalLineContent
                        title={t('requester', 'approval')}
                        color={colors.current.request}
                        process={t('status.request', 'approval')}
                        content={content.requester}
                    />
                </Grid>
                {isReject.current.review ? (
                    <ArrowBackIosNew fontSize="large" sx={{ transform: 'translateY(4rem)' }} />
                ) : (
                    <ArrowForwardIos fontSize="large" sx={{ transform: 'translateY(4rem)' }} />
                )}
                <Grid xs={4}>
                    <ApprovalLineContent
                        title={t('reviewer', 'approval')}
                        color={colors.current.review}
                        process={
                            isReject.current.review ? '반려' : t('status.reviewed', 'approval')
                        }
                        content={content.reviewer}
                    />
                </Grid>
                {isReject.current.approval ? (
                    <ArrowBackIosNew fontSize="large" sx={{ transform: 'translateY(4rem)' }} />
                ) : (
                    <ArrowForwardIos fontSize="large" sx={{ transform: 'translateY(4rem)' }} />
                )}
                <Grid xs={4}>
                    <ApprovalLineContent
                        title={t('approver', 'approval')}
                        color={colors.current.approval}
                        process={
                            isReject.current.approval ? '반려' : t('status.approved', 'approval')
                        }
                        content={content.approver}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ApprovalLine
