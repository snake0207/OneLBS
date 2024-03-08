import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import useLayoutStore from '#/store/useLayoutStore'

import t from '#/common/libs/trans'
import Dropdown from '#/components/common/button/Dropdown'
import { Typography, Icon } from '@mui/material'

import { BrowserView, MobileView } from 'react-device-detect'
import LogoIcon from '#/assets/loginLogoIcon.svg'
import LogoIconDark from '#/assets/loginLogoIconDark.svg'
import LanguagesIcon from '#/assets/languagesIcon.svg'
import LanguagesIconDark from '#/assets/languagesIconDark.svg'

const languages = [
    { key: 'kr', label: t('KOR'), value: 'kr' },
    { key: 'en', label: t('ENG'), value: 'en' },
]

function AuthHeader() {
    const { language, setLanguage, themeMode } = useLayoutStore()

    const handleSelectLangMenu = (item) => {
        console.log(item)
        setLanguage(item.value)
    }

    const findLanguage = (lang) => {
        return languages.find((item) => item.value === lang)
    }

    return (
        <AppBar position="absolute" sx={{ color: 'transparent' }}>
            <Container
                maxWidth="xl"
                sx={{
                    minHeight: '60px',
                    height: '60px',
                    borderBottom: '1px solid',
                    borderColor: 'border.main',
                    backgroundColor: 'background.mobile',
                    '@media (max-width:1024px)': {
                        borderColor: 'border.header',
                    },
                }}
            >
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <Typography sx={{ pt: '5px' }}>
                            {themeMode === 'light' ? (
                                <img src={LogoIcon} />
                            ) : (
                                <img src={LogoIconDark} />
                            )}
                        </Typography>
                        <BrowserView>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Icon
                                    sx={{
                                        display: 'flex',
                                        width: '21px',
                                        height: '20px',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img src={LanguagesIcon} />
                                    ) : (
                                        <img src={LanguagesIconDark} />
                                    )}
                                </Icon>
                                <Dropdown
                                    items={languages}
                                    selectable={true}
                                    onSelect={handleSelectLangMenu}
                                    sx={{
                                        color: 'text.darkgray',
                                        backgroundColor: 'transparent',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        p: '6px 24px 6px 12px',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    {findLanguage(language)?.label}
                                </Dropdown>
                            </Box>
                        </BrowserView>
                        <MobileView>
                            <Dropdown
                                items={languages}
                                onSelect={handleSelectLangMenu}
                                sx={{
                                    color: 'text.darkgray',
                                    backgroundColor: 'transparent',
                                    minWidth: 'auto',
                                    p: '6px 12px',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                    '& .MuiButton-endIcon': {
                                        display: 'none',
                                    },
                                }}
                            >
                                <Icon
                                    sx={{
                                        display: 'flex',
                                        width: '21px',
                                        height: '20px',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img src={LanguagesIcon} />
                                    ) : (
                                        <img src={LanguagesIconDark} />
                                    )}
                                </Icon>
                            </Dropdown>
                        </MobileView>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AuthHeader
