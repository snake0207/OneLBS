import { useAuthStepState } from '#/store/useAuthStepStore'
import { Stack, Box, Typography, Icon } from '@mui/material'
import InfoIcon from '#/assets/stepcomponent1.svg'
import InfoIconDark from '#/assets/stepcomponent1Dark.svg'
import CertIcon from '#/assets/stepcomponent2.svg'
import CertIconDark from '#/assets/stepcomponent2Dark.svg'
import LoginIcon from '#/assets/stepcomponent3.svg'
import LoginIconDark from '#/assets/stepcomponent3Dark.svg'
import ArrwoIcon from '#/assets/stepArrow.svg'
import ArrwoIconDark from '#/assets/stepArrowDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'

import style from './style.module'

const AuthStepper = () => {
    const authStep = useAuthStepState()
    const { themeMode } = getLayoutState()
    return (
        <Stack sx={style.stepWrap}>
            <Box sx={style.stepItem}>
                <Icon sx={{ display: 'flex', width: 50, height: 50, alignItems: 'center' }}>
                    {themeMode === 'light' ? <img src={InfoIcon} /> : <img src={InfoIconDark} />}
                </Icon>
                <Typography variant="h5" sx={style.stepTitle}>
                    1. 정보입력
                </Typography>
            </Box>
            <Box sx={style.stepArrwo}>
                {themeMode === 'light' ? <img src={ArrwoIcon} /> : <img src={ArrwoIconDark} />}
            </Box>
            <Box sx={style.stepItem}>
                <Icon
                    sx={{
                        display: 'flex',
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    {themeMode === 'light' ? <img src={CertIcon} /> : <img src={CertIconDark} />}
                </Icon>
                <Typography variant="h5" sx={style.stepTitle}>
                    2. 인증
                </Typography>
            </Box>
            <Box sx={style.stepArrwo}>
                {themeMode === 'light' ? <img src={ArrwoIcon} /> : <img src={ArrwoIconDark} />}
            </Box>
            <Box sx={style.stepItem}>
                <Icon sx={{ display: 'flex', width: 50, height: 50, alignItems: 'center' }}>
                    {themeMode === 'light' ? <img src={LoginIcon} /> : <img src={LoginIconDark} />}
                </Icon>
                <Typography variant="h5" sx={style.stepTitle}>
                    3. 로그인
                </Typography>
            </Box>
        </Stack>
    )
}

export default AuthStepper
