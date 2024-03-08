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
}

export default style
