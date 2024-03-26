const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            // width: '250px',
            backgroundColor: 'dialog.main',
            borderRadius: '8px',
            backgroundImage: 'none',
            border: '1px solid',
            borderColor: 'color.alert',
            boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
            '& .MuiDialogActions-root': {
                width: '100%',
            },
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
        width: '30%',
        height: 36,
        p: 0,
        color: 'white',
        backgroundColor: 'button.light',
        '&:hover': {
            backgroundColor: 'button.light',
            boxShadow: 'none',
        },
    },
    lightButton: {
        width: '30%',
        height: 36,
        fontWeight: 500,
        color: 'error.main',
        // color: '#002C5F',
        border: '1px solid',
        borderColor: 'error.main',
        // borderColor: 'color.alertBtn',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
            boxShadow: 'none',
        },
    },
}

export default style
