import { MicNoneOutlined } from '@mui/icons-material'

const style = {
    cardBox: {
        width: '100%',
        boxShadow: 'none',
        border: 0,
        backgroundColor: '#EFEFEF',
        borderRadius: '0 0 8px 8px',
    },
    cardTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: 600,
        color: '#fff',
        height: '30px',
        borderRadius: '8px 8px 0 0',
        backgroundColor: '#002C5F',
    },
    cardContBox: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        p: '8px 19px',
        backgroundColor: '#EFEFEF',
        boxShadow: 'none',
        borderRadius: '0 0 8px 8px',
    },
    cardText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#05141F',
        color: '#fff',
        fontSize: 14,
        fontWeight: 500,
        height: 28,
        borderRadius: '30px',
    },
    ResetButton: {
        width: '40px',
        height: '40px',
        minWidth: 'auto',
        backgroundColor: '#002C5F',
        padding: '6px',
    },
    ArrowIos: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        '&:img': {
            width: '30px',
            height: '30px',
        },
    },
}

export default style
