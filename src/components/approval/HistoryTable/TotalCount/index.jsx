import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'

const TotalCount = ({ type, counts }) => {
    const texts = ['temporary', 'request', 'reviewed', 'approved', 'rejected']
    const renderCountText = () => {
        return texts.map((text, index) => {
            if (text === 'temporary' && (type === 'reviewer' || type === 'approver')) return
            if (text === 'request' && type === 'approver') return

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
            <Typography
                variant={'body2'}
                component={'span'}
                sx={{
                    display: 'inline-flex',
                    fontSize: '13px',
                    color: '#444',
                    marginBottom: '6px',
                }}
            >
                {t('total', 'approval')} {counts.total || 0}
                {t('case', 'approval')}
            </Typography>
            <Typography
                variant={'body2'}
                component={'span'}
                sx={{ fontSize: '13px', color: '#444', marginBottom: '6px' }}
            >
                ( {renderCountText()} )
            </Typography>
        </>
    )
}
export default TotalCount
