import TitleBar from '#/components/common/menu/TitleBar'
import { Box } from '@mui/material'

import t from '#/common/libs/trans'

function LoginHistoryPage() {
    return (
        <Box>
            <TitleBar title={t('top_menu.user_login_history')} />
        </Box>
    )
}

export default LoginHistoryPage
