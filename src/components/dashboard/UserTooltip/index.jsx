import { Box, Divider, Stack, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CategoryCount from '#/components/dashboard/CategoryCount'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import t from '#/common/libs/trans'

const staticTooltipList = [
    { categoryName: t('request_approval', 'dashboard'), icon: <InsertDriveFileIcon /> },
    { categoryName: t('turn_back', 'dashboard'), icon: <InsertDriveFileIcon /> },
    { categoryName: t('approval_completed', 'dashboard'), icon: <InsertDriveFileIcon /> },
]

const data = [{ count: 123 }, { count: 321 }, { count: 555 }]

const UserTooltip = () => {
    return (
        <Box sx={{ display: 'inline-block', border: 1, bgcolor: 'white', borderRadius: 1 }}>
            <Box sx={{ display: 'flex', padding: 1 }}>
                <AccountCircleIcon />
                <Typography variant="h5">관리자</Typography>
                <Typography>일반 사용자</Typography>
            </Box>
            <Divider sx={{ borderColor: 'black' }} />
            <Stack
                sx={{ flexDirection: 'row', alignItems: 'center', gap: 3, padding: 2 }}
                divider={<ArrowForwardIosIcon />}
            >
                {data.map((item, idx) => (
                    <CategoryCount
                        key={idx}
                        icon={staticTooltipList[idx].icon}
                        categoryName={staticTooltipList[idx].categoryName}
                        count={item.count}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default UserTooltip
