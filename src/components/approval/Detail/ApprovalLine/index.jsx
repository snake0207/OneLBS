import Typography from '@mui/material/Typography'
import { Box, Card, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'

const ApprovalLine = ({ type, content }) => {
    const theme = useTheme()
    const [title, process] = (() => {
        switch (type) {
            case '요청':
                return [t('requester', 'approval'), t('status.request', 'approval')]
            case '검토':
                return [t('reviewer', 'approval'), t('status.reviewed', 'approval')]
            case '승인':
                return [t('approver', 'approval'), t('status.approved', 'approval')]
        }
    })()

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
                        backgroundColor: content.status
                            ? theme.palette.primary.main
                            : theme.palette.grey[300],
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

export default ApprovalLine
