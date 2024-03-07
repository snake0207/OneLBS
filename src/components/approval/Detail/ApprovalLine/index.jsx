import Typography from '@mui/material/Typography'
import { Box, Card } from '@mui/material'
import t from '#/common/libs/trans.js'
import Grid from '@mui/material/Unstable_Grid2'
import { useMemo, useRef } from 'react'
import ArrowForward from '#/assets/arrowForwardIos.svg'
import ArrowForwardDark from '#/assets/arrowForwardDark.svg'
import ArrowRedBack from '#/assets/arrowRedBack.svg'
import ArrowGrayForward from '#/assets/arrowGrayForward.svg'
import { getIsLightTheme } from '#/store/useLayoutStore'

import style from './style.module'

const ApprovalLineContent = ({ title, color, process, content }) => {
    return (
        <Box sx={style.cardBox}>
            <Typography variant="subtitle1" sx={style.cardTitle}>
                {title}
            </Typography>
            <Card sx={style.cardContBox}>
                <Typography
                    variant="subtitle2"
                    sx={[
                        style.cardText,
                        {
                            backgroundColor: color,
                            color:
                                color === '#e2e2e2'
                                    ? '#a9a9a9'
                                    : color === '#071c2c'
                                      ? '#536877'
                                      : '#ffffff',
                        },
                    ]}
                >
                    {process}
                </Typography>
                <Box p={1} sx={{ pb: 0 }}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            '@media (max-width:767px)': {
                                fontSize: 9,
                            },
                        }}
                        variant="body2"
                    >
                        {content.team}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: 'tdxt.darkgray',
                            '@media (max-width:767px)': {
                                fontSize: 12,
                            },
                        }}
                    >
                        {content.name}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
                            display: 'flex',
                            '@media (max-width:767px)': {
                                fontSize: 10,
                                lineHeight: '12px',
                            },
                        }}
                        variant="caption"
                    >
                        {content.date}
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
}

const ApprovalLine = ({ status, content }) => {
    const isLight = getIsLightTheme()
    const colors = useRef({
        request: isLight ? '#e2e2e2' : '#071c2c',
        review: isLight ? '#e2e2e2' : '#071c2c',
        approval: isLight ? '#e2e2e2' : '#071c2c',
    })
    const isArrowActive = useRef([true, false])
    const arrowIcons = useRef({
        active: isLight ? ArrowForward : ArrowForwardDark,
        inactive: ArrowGrayForward,
        // TODO: 빨간색 화살표 다크버전
        danger: isLight ? ArrowRedBack : ArrowRedBack,
    })
    const isReject = useRef({
        review: false,
        approval: false,
    })

    useMemo(() => {
        const active = '#05141f'
        const danger = '#8B0F2A'
        switch (status) {
            case 'temporary':
                isArrowActive.current[0] = false
                break
            case 'request':
                colors.current.request = active
                break
            case 'reviewed':
                colors.current.request = active
                colors.current.review = active
                isArrowActive.current[1] = true
                break
            case 'approved':
                colors.current.request = active
                colors.current.review = active
                colors.current.approval = active
                isArrowActive.current[1] = true
                break
            case 'rejected_review':
                colors.current.request = active
                colors.current.review = danger
                isReject.current.review = true
                break
            case 'rejected_approval':
                colors.current.request = active
                colors.current.review = active
                colors.current.approval = danger
                isReject.current.approval = true
                break
        }
    }, [status])

    return (
        <Box>
            <Typography>{t('line', 'approval')}</Typography>
            <Grid container flexWrap={'nowrap'} sx={{ justifyContent: 'center' }}>
                <Grid xs={4}>
                    <ApprovalLineContent
                        title={t('requester', 'approval')}
                        color={colors.current.request}
                        process={t('status.request', 'approval')}
                        content={content.requester}
                    />
                </Grid>
                <Box sx={style.ArrowIos}>
                    <img
                        src={
                            isReject.current.review
                                ? arrowIcons.current.danger
                                : isArrowActive.current[0]
                                  ? arrowIcons.current.active
                                  : arrowIcons.current.inactive
                        }
                        width={30}
                        height={30}
                    />
                </Box>
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
                <Box sx={style.ArrowIos}>
                    <img
                        src={
                            isReject.current.approval
                                ? arrowIcons.current.danger
                                : isArrowActive.current[1]
                                  ? arrowIcons.current.active
                                  : arrowIcons.current.inactive
                        }
                        width={30}
                        height={30}
                    />
                </Box>
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
