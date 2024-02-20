import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />
}

export default LinkRouter
