import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import useLayoutStore from '#/store/useLayoutStore'

import t from '#/common/libs/trans'
import Dropdown from '#/components/common/button/Dropdown'
import { Typography } from '@mui/material'

const languages = [
    { key: 'kr', label: t('KOR'), value: 'kr' },
    { key: 'en', label: t('ENG'), value: 'en' },
]

function AuthHeader() {
    const { language, setLanguage } = useLayoutStore()

    const handleSelectLangMenu = (item) => {
        console.log(item)
        setLanguage(item.value)
    }

    const findLanguage = (lang) => {
        return languages.find((item) => item.value === lang)
    }

    return (
        <AppBar position="absolute">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <Typography>Logo</Typography>
                        <Dropdown
                            items={languages}
                            selectable={true}
                            onSelect={handleSelectLangMenu}
                        >
                            {findLanguage(language)?.label}
                        </Dropdown>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AuthHeader
