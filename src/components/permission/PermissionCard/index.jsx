import { Box, Button, Typography } from '@mui/material'

const PermissionCard = () => {
    return (
        <Box sx={{ display: 'inline-block', border: 1, borderRadius: 2, bgcolor: 'white', p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                <Typography>일반 사용자</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="contained">메뉴 변경</Button>
                    <Button variant="contained">권한 변경</Button>
                </Box>
            </Box>
            <Typography>guest</Typography>
            <Box sx={{ display: 'flex' }}>
                <Box>검색 관리</Box>
                <Box>POI 조회</Box>
                <Box>MCP POI 통계</Box>
            </Box>
            <Typography>총 50명</Typography>
        </Box>
    )
}

export default PermissionCard
