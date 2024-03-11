const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            width: '1092px',
            backgroundColor: 'dialog.main',
            borderRadius: '8px',
            backgroundImage: 'none',
            '@media (max-width:1280px)': {
                width: '100%',
                maxHeight: 'calc(100% - 20px)',
                m: '10px',
            },
        },
    },
    close: {
        color: 'background.close',
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
    subTitleBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '30px',
        fontSize: '14px',
        fontWeight: 500,
        mr: '10px',
        color: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.text[100] : theme.palette.text[700],

        borderRadius: 20,
        backgroundColor: 'background.darkgray',
    },
    subTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        fontWeight: 400,
        color: 'text.darkgray',
    },
    gusestBox: {
        fontSize: 11,
        color: 'text.gray',
        ml: '6px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.main',
            boxShadow: 'none',
        },
    },
}

export default style
