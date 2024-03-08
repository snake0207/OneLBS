const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            width: '550px',
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
    subTitle: {
        fontSize: 12,
        fontWeight: 400,
        mb: 2.5,
    },
    labelText: {
        fontSize: 14,
        fontWeight: 500,
        mt: 2.5,
    },
    infoText: {
        fontSize: 13,
        fontWeight: 400,
        mb: -1,
    },
    btnLarge: {
        width: 130,
        height: 36,
        fontSize: 14,
        fontWeight: 400,
        mb: 2,
        mr: 2,
        backgroundColor: 'button.main',
        '&:hover': {
            backgroundColor: 'button.main',
        },
    },
    btnDetaile: {
        height: 28,
        fontSize: 14,
        fontWeight: 400,
        color: 'grey.darkgray',
        backgroundColor: 'button.lightgray',
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'button.moreBtn',
        '&:hover': {
            backgroundColor: 'button.lightgray',
            boxShadow: 'none',
        },
    },
}

export default style
