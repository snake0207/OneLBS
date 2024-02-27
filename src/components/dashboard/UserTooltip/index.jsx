import { Box, Stack, Typography } from '@mui/material'
import CategoryCount from '#/components/dashboard/CategoryCount'

import UserIconDark from '#/assets/userIconDark.svg'
import ApprovalIcon from '#/assets/m_approvalIcon.svg'
import ApprovalIconDark from '#/assets/m_approvalIconDark.svg'
import CompanionIcon from '#/assets/m_companionIcon.svg'
import CompanionIconDark from '#/assets/m_companionIconDark.svg'
import CompleteIcon from '#/assets/m_completeIcon.svg'
import CompleteIconDark from '#/assets/m_completeIconDark.svg'
import ArrowIcon from '#/assets/m_arrowIcon.svg'

import t from '#/common/libs/trans'
import useLayoutStore from '#/store/useLayoutStore'

import style from './style.module'

const userMockData = [
    {
        categoryName: t('request_approval', 'dashboard'),
        lightIcon: <img src={ApprovalIcon} />,
        darkIcon: <img src={ApprovalIconDark} />,
    },
    {
        categoryName: t('turn_back', 'dashboard'),
        lightIcon: <img src={CompanionIcon} />,
        darkIcon: <img src={CompanionIconDark} />,
    },
    {
        categoryName: t('approval_completed', 'dashboard'),
        lightIcon: <img src={CompleteIcon} />,
        darkIcon: <img src={CompleteIconDark} />,
    },
]

const data = [{ count: 123 }, { count: 321 }, { count: 555 }]

const UserTooltip = () => {
    const { themeMode } = useLayoutStore()
    return (
        <Box sx={{ display: 'inline-block', borderRadius: '8px', width: '35%' }}>
            <Box sx={style.Title}>
                <img src={UserIconDark} />
                <Typography sx={{ fontSize: '20px', fontWeight: 500, ml: '6px' }}>
                    관리자
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, ml: '6px' }}>
                    일반 사용자
                </Typography>
            </Box>
            <Stack sx={style.dashboardBox} divider={<img src={ArrowIcon} />}>
                {data.map((item, idx) => (
                    <CategoryCount
                        key={idx}
                        icon={
                            themeMode === 'light'
                                ? userMockData[idx].lightIcon
                                : userMockData[idx].darkIcon
                        }
                        categoryName={userMockData[idx].categoryName}
                        count={item.count}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default UserTooltip
