const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            backgroundColor: 'dialog.main',
            borderRadius: '8px',
            backgroundImage: 'none',
            border: '1px solid',
            borderColor: 'color.alert',
            boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        },
    },
    text: {
        color: 'text.main',
        textAlign: 'center',
    },
    btnBox: {
        justifyContent: 'center',
        p: '0 20px 20px 20px',
    },
    blueButton: {
        width: '24%',
        height: 36,
        p: 0,
        color: 'white',
        backgroundColor: '#002C5F',
        '&:hover': {
            backgroundColor: '#002C5F',
        },
    },
    lightButton: {
        width: '24%',
        height: 36,
        fontWeight: 500,
        color: '#002C5F',
        border: '1px solid',
        borderColor: 'color.alertBtn',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
}

export default style
