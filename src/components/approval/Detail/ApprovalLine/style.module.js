const style = {
    title: {
        fontSize: '20px',
        fontWeight: 600,
        color: 'text.darkgray',
        marginBottom: '4px',
        borderBottom: '1px solid',
        borderBottomColor: 'border.gray',
        '@media (max-width:1024px)': {
            mt: '20px',
        },
    },
    cardBox: {
        width: '100%',
        boxShadow: 'none',
        border: 0,
        backgroundColor: 'background.gray',
        borderRadius: '0 0 8px 8px',
        '@media (max-width:1024px)': {
            minHeight: '130px',
        },
    },
    cardTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        fontWeight: 600,
        color: '#fff',
        height: '30px',
        borderRadius: '8px 8px 0 0',
        backgroundColor: '#002C5F',
        '@media (max-width:1024px)': {
            fontSize: '15px',
        },
        '@media (max-width:767px)': {
            fontSize: '12px',
            height: '23px',
        },
    },
    cardContBox: {
        minHeight: '152px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        p: '8px 19px',
        backgroundColor: 'background.gray',
        boxShadow: 'none',
        borderRadius: '0 0 8px 8px',
        '@media (max-width:767px)': {
            p: '8px 3px',
        },
    },
    cardText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '',
        color: '#fff',
        fontSize: 14,
        fontWeight: 500,
        height: 28,
        borderRadius: '30px',
        '@media (max-width:767px)': {
            fontSize: '12px',
            height: 20,
        },
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
        '& .MuiIcon-root': {
            width: '30px',
            height: '30px',
        },
    },
}

export default style
