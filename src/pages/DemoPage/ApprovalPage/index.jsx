import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'

const ApprovalPage = () => {
    return (
        <List>
            <ListItemButton component="a" href="/components/approval/all">
                <ListItemText primary="전체이력페이지" />
            </ListItemButton>
            <ListItemButton component="a" href="/components/approval/requester">
                <ListItemText primary="요청자 이력페이지" />
            </ListItemButton>
            <ListItemButton component="a" href="/components/approval/reviewer">
                <ListItemText primary="검토자 이력페이지" />
            </ListItemButton>
            <ListItemButton component="a" href="/components/approval/approver">
                <ListItemText primary="승인자 이력페이지" />
            </ListItemButton>
        </List>
    )
}

export default ApprovalPage
