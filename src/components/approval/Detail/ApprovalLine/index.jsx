import Typography from '@mui/material/Typography'
import { Box, Card } from '@mui/material'
import { tokens } from '#/theme/index.js'

const ApprovalLine = ({ type, content }) => {
    return (
        <Box>
            <Typography align={'center'} variant="subtitle1">
                {type}
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
                        backgroundColor: tokens.primary[500],
                        borderRadius: 1,
                    }}
                >
                    {content.title}
                </Typography>
                <Box p={1}>
                    <Typography variant="body2" sx={{}}>
                        {content.team}
                    </Typography>
                    <Typography>{content.name}</Typography>
                    <Typography variant="caption">{content.date}</Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default ApprovalLine
