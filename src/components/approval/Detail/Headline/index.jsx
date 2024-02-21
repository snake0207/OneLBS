import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

const Headline = ({ title }) => {
    return (
        <>
            <Typography
                variant={'h6'}
                sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#05141F',
                }}
            >
                {title}
            </Typography>
            <Divider sx={{ marginBottom: '4px' }} />
        </>
    )
}

export default Headline
