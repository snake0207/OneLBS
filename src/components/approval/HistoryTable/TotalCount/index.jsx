import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import t from '#/common/libs/trans.js'

const TotalCount = ({ type, counts }) => {
    const keys = Object.keys(counts)

    const renderCountText = () => {
        return keys.map((key, index) => {
            if (key === 'total') return

            switch (type) {
                case 'reviewer':
                    if (key === 'temporary') return
                    break
                case 'approver':
                    if (key === 'temporary' || key === 'request' || key === 'rejected_review')
                        return
                    break
            }

            return (
                <Typography key={index} variant={'body2'} component={'span'}>
                    {t(`status.${key}`, 'approval')} {counts[key]}
                    {t('case', 'approval')}
                    {index === keys.length - 1 ? '' : ', '}
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
