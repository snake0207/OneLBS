import Logo from '#/components/common/Logo/Logo'
import useLayoutStore from '#/store/useLayoutStore'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Suspense, lazy } from 'react'

const LazyTypography = lazy(() => import('@mui/material/Typography'))

const footer = {
    menu: [
        {
            name: '회사소개',
            link: 'https://corp.kt.com',
        },
        {
            name: '서비스이용약관',
            link: 'https://corp.kt.com/html/etc/agreement_01.html',
        },
        {
            name: '개인정보처리방침',
            link: 'https://inside.kt.com/html/privacy/privacy12.html',
        },
        {
            name: '법적고지',
            link: 'https://corp.kt.com/html/etc/legal.html',
        },
    ],
    address: {
        corp: '(주)케이티 대표이사 김영섭 경기도 성남시 분당구 불정로 90 (정자동) 사업자등록번호 : 102-81-42945 통신판매업신고 : 2002-경기성남-0048 사업자정보확인',
        center: '고객센터 : [모바일] 휴대폰+114(무료), 1588-0010(유료) [인터넷/TV/전화] 유선전화(국번없이) 100, 휴대폰(지역번호)+100, 1514(발신전용), 1524(발신전용)',
    },
    copyright: 'Copyright© KT Corp. All rights reserved.',
}

const textProps = {
    color: 'text.secondary',
    fontSize: '12px',
}

const Footer = (props) => {
    const { themeMode } = useLayoutStore()

    return (
        <Stack spacing={2} sx={{ width: '100%', mb: 6 }}>
            <Box>
                <Stack direction="row" alignItems="center" spacing={0.3}>
                    {footer?.menu?.map((item, i) => (
                        <Button
                            key={item.name}
                            onClick={() => window.open(item.link)}
                            sx={{
                                fontSize: '13px',
                                color: 'text.primary',
                                paddingTop: 0,
                                paddingBottom: 0,
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Stack>
            </Box>
            <Box display="flex">
                <Box flex={10}>
                    {footer?.address?.corp && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyTypography sx={{ ...textProps }}>
                                {footer.address.corp}
                            </LazyTypography>
                        </Suspense>
                    )}
                    {footer?.address?.center && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyTypography sx={{ ...textProps }}>
                                {footer.address.center}
                            </LazyTypography>
                        </Suspense>
                    )}
                </Box>
                <Box flex={2} display="flex" justifyContent="flex-end" alignItems="center">
                    <Logo imgKt mode={themeMode} />
                </Box>
            </Box>
            <Box>
                {footer?.copyright && (
                    <Typography color={'text.primary'} sx={{ fontSize: '12px' }}>
                        {footer.copyright}
                    </Typography>
                )}
            </Box>
        </Stack>
    )
}

export default Footer
