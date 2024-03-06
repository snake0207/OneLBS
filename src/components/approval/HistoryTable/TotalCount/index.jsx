import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import t from '#/common/libs/trans.js'

const TotalCount = ({ type, counts }) => {
    const texts = [
        'temporary',
        'request',
        'reviewed',
        'rejected_review',
        'approved',
        'rejected_approval',
    ]
    const renderCountText = () => {
        return texts.map((text, index) => {
            switch (type) {
                case 'reviewer':
                    if (text === 'temporary') return
                    break
                case 'approver':
                    if (text === 'temporary' || text === 'request' || text === 'rejected_review')
                        return
                    break
            }

            return (
                <Typography key={index} variant={'body2'} component={'span'}>
                    {t(`status.${text}`, 'approval')} {counts[text]}
                    {t('case', 'approval')}
                    {index === texts.length - 1 ? '' : ', '}
                </Typography>
            )
        })
    }

    return (
        <>
            <Box
                sx={{
                    '@media (max-width:1024px)': {
                        borderBottom: '1px solid',
                        borderBottomColor: 'border.light',
                        pb: '16px',
                    },
                }}
            >
                <Typography
                    variant={'body2'}
                    component={'span'}
                    sx={{
                        display: 'inline-flex',
                        fontSize: '13px',
                        color: 'text.main',
                        marginBottom: '6px',
                    }}
                >
                    {t('total', 'approval')} {counts.total || 0}
                    {t('case', 'approval')}
                </Typography>
                <Typography
                    variant={'body2'}
                    component={'span'}
                    sx={{ fontSize: '13px', color: 'text.main', marginBottom: '6px' }}
                >
                    ( {renderCountText()} )
                </Typography>
            </Box>
        </>
    )
}
export default TotalCount
