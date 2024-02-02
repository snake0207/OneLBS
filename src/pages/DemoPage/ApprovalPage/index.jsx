import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'

const ApprovalPage = () => {
    return (
        <List>
            <ListItemButton component="a" href="/components/approval/all">
                <ListItemText primary="전체이력페이지" />
            </ListItemButton>
            <ListItemButton component="a" href="/components/approval/request">
                <ListItemText primary="요청자 이력페이지" />
            </ListItemButton>
        </List>
    )
}

export default ApprovalPage
