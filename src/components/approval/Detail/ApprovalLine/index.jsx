import Typography from '@mui/material/Typography'
import { Box, Card, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'
import Grid from '@mui/material/Unstable_Grid2'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useMemo, useRef } from 'react'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import ArrowBack from '#/assets/arrowBackIos.svg'
import ArrowBackDark from '#/assets/arrowBackIosDark.svg'
import ArrowForward from '#/assets/arrowForwardIos.svg'
import ArrowForwardDark from '#/assets/arrowForwardDark.svg'
import ArrowRedBack from '#/assets/arrowRedBack.svg'
import ArrowRedForward from '#/assets/arrowRedForward.svg'
import ArrowGrayBack from '#/assets/arrowGrayBack.svg'
import ArrowGrayForward from '#/assets/arrowGrayForward.svg'
import { getLayoutState } from '#/store/useLayoutStore'

import style from './style.module'

const ApprovalLineContent = ({ title, color, process, content }) => {
    return (
        <Box sx={style.cardBox}>
            <Typography variant="subtitle1" sx={style.cardTitle}>
                {title}
            </Typography>
            <Card sx={style.cardContBox}>
                <Typography variant="subtitle2" sx={[style.cardText, { backgroundColor: color }]}>
                    {process}
                </Typography>
                <Box p={1} sx={{ pb: 0 }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500 }} variant="body2">
                        {content.team}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: 'tdxt.darkgray' }}>
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
    // TODO: 상태별 화살표 색상 및 방향 처리 필요
    const theme = useTheme()
    const colors = useRef({
        request: '#e2e2e2',
        review: '#e2e2e2',
        approval: '#e2e2e2',
    })
    const isReject = useRef({
        review: false,
        approval: false,
    })
    const { themeMode } = getLayoutState()

    useMemo(() => {
        const active = '#05141f'
        const danger = '#db0024'
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
                        {themeMode === 'light' ? (
                            <img src={ArrowForwardDark} width={30} height={30} />
                        ) : (
                            <img src={ArrowForwardDark} width={30} height={30} />
                        )}
                    </Box>
                ) : (
                    <Box sx={style.ArrowIos}>
                        {themeMode === 'light' ? (
                            <img src={ArrowForward} width={30} height={30} />
                        ) : (
                            <img src={ArrowForwardDark} width={30} height={30} />
                        )}
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
                        <img src={ArrowRedBack} width={30} height={30} />
                    </Box>
                ) : (
                    <Box sx={style.ArrowIos}>
                        {themeMode === 'light' ? (
                            <img src={ArrowBack} width={30} height={30} />
                        ) : (
                            <img src={ArrowBackDark} width={30} height={30} />
                        )}
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
