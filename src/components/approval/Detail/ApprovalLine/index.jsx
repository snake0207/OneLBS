import Typography from '@mui/material/Typography'
import { Box, Card, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'
import Grid from '@mui/material/Unstable_Grid2'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useMemo, useRef } from 'react'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import dummyData from '#/pages/DemoPage/ApprovalPage/detailData.json'
import ArrowBack from '#/assets/ArrowBackIos.svg'
import ArrowForward from '#/assets/ArrowForwardIos.svg'

import style from './style.module'

const ApprovalLineContent = ({ title, color, process, content }) => {
    return (
        <Box sx={style.cardBox}>
            <Typography variant="subtitle1" sx={style.cardTitle}>
                {title}
            </Typography>
            <Card sx={style.cardContBox}>
                <Typography variant="subtitle2" sx={style.cardText}>
                    {process}
                </Typography>
                <Box p={1} sx={{ pb: 0 }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500 }} variant="body2">
                        {content.team}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: '#05141F' }}>
                        {content.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} variant="caption">
                        {content.date}
                    </Typography>
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
                    <Box sx={style.ArrowIos}>
                        <img src={ArrowForward} width={30} height={30} />
                    </Box>
                ) : (
                    <Box sx={style.ArrowIos}>
                        <img src={ArrowForward} width={30} height={30} />
                    </Box>
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
                    <Box sx={style.ArrowIos}>
                        <img src={ArrowBack} width={30} height={30} />
                    </Box>
                ) : (
                    <Box sx={style.ArrowIos}>
                        <img src={ArrowForward} width={30} height={30} />
                    </Box>
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
