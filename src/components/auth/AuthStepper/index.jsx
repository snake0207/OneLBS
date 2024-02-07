import { useAuthStepState } from '#/store/useAuthStepStore'
import { Stack, Box, Typography, Icon } from '@mui/material'
import infoIcon from '#/assets/stepcomponent1.svg'
import certIcon from '#/assets/stepcomponent2.svg'
import LoginIcon from '#/assets/stepcomponent3.svg'
import arrwoIcon from '#/assets/stepArrow.svg'

import style from './style.module'

const AuthStepper = () => {
    const authStep = useAuthStepState()
    return (
        <Stack sx={style.stepWrap}>
            <Box sx={style.stepItem}>
                <Icon sx={{ display: 'flex', width: 50, height: 50, alignItems: 'center' }}>
                    <img src={infoIcon} />
                </Icon>
                <Typography variant="h5" sx={style.stepTitle}>
                    1. 정보입력
                </Typography>
            </Box>
            <Box sx={style.stepArrwo}>
                <img src={arrwoIcon} />
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
                    <img src={certIcon} />
                </Icon>
                <Typography variant="h5" sx={style.stepTitle}>
                    2. 인증
                </Typography>
            </Box>
            <Box sx={style.stepArrwo}>
                <img src={arrwoIcon} />
            </Box>
            <Box sx={style.stepItem}>
                <Icon sx={{ display: 'flex', width: 50, height: 50, alignItems: 'center' }}>
                    <img src={LoginIcon} />
                </Icon>
                <Typography variant="h5" sx={style.stepTitle}>
                    3. 로그인
                </Typography>
            </Box>
        </Stack>
    )
}

export default AuthStepper
