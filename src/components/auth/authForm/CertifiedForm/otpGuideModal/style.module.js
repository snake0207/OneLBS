const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            backgroundColor: 'dialog.main',
            width: '70%',
            borderRadius: '8px',
            backgroundImage: 'none',
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
        mb: 1,
        height: 42,
        pl: 2,
        pr: 1,
        fontWeight: 600,
        color: '#002C5F',
    },
    content: {
        pt: '20px !important',
        m: '0 24px 24px 24px',
        borderRadius: '8px',
        border: '1px solid #d7d7d7',
    },
    close: {
        color: 'background.close',
    },
}

export default style
