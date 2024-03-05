import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

const Headline = ({ title }) => {
    return (
        <>
            <Typography
                variant={'h6'}
                sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'text.darkgray',
                }}
            >
                {title}
            </Typography>
            <Divider
                sx={{
                    marginBottom: '4px',
                    borderBottom: '1px solid',
                    borderBottomColor: 'border.gray',
                }}
            />
        </>
    )
}

export default Headline
