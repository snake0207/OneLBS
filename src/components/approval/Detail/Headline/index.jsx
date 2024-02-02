import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

const Headline = ({ title }) => {
    return (
        <>
            <Typography variant={'h6'} fontWeight={'bold'}>
                {title}
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
        </>
    )
}

export default Headline
