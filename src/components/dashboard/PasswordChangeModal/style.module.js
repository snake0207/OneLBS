const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            width: '70%',
            backgroundColor: 'dialog.main',
            borderRadius: '8px',
            backgroundImage: 'none',
            border: '1px solid',
            borderColor: 'color.alert',
            boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        },
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: 'dialog.title',
        borderRadius: 20,
        mt: 3.8,
        ml: 2.5,
        mr: 2.5,
        mb: 1.3,
        height: 42,
        pl: 1,
        pr: 1,
        color: '#002C5F',
    },
    close: {
        color: 'background.close',
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 400,
        mb: 2.5,
    },
    labelText: {
        fontSize: 14,
        fontWeight: 500,
        mt: 2.5,
        mb: '4px',
    },
    btnBox: {
        justifyContent: 'center',
        p: '10px 20px 30px 20px',
    },
    darkLarge: {
        width: '50%',
        height: 36,
        fontWeight: 400,
        color: 'white',
        backgroundColor: '#002C5F',
        '&:hover': {
            backgroundColor: '#002C5F',
        },
    },
    lightButton: {
        width: '50%',
        height: 36,
        color: '#002C5F',
        ml: '2px',
        backgroundColor: 'button.lightblue',
        border: '1px solid #5b8cc5',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.lightblue',
        },
    },
}

export default style
