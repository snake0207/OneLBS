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
        mb: 1.3,
        height: 42,
        pl: 1,
        pr: 1,
        color: '#002C5F',
    },
    close: {
        color: 'background.close',
    },
}

export default style
