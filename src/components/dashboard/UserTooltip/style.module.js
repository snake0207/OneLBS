import { isMobile } from 'react-device-detect'

const style = {
    dashboardBox: {
        width: '100%',
        borderRadius: '0 0 8px 8px',
        backgroundColor: 'background.contents',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? 0 : 6,
        padding: '10px 26px',
        '& .MuiBox-root': {
            width: '33%',
        },
    },
    Title: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        color: '#fff',
        backgroundColor: '#00418D',
        borderRadius: '8px 8px 0 0',
    },
}

export default style
