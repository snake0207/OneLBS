const style = {
    dialogBox: {
        '& .MuiPaper-elevation': {
            backgroundColor: 'dialog.main',
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'table.border',
            borderRadius: '8px',
            mt: '3px',
        },
    },
    allButton: {
        color: '#05141f',
        fontSize: 15,
        fontWeight: 600,
        p: '5px 24px',
        m: '12px 20px',
        borderRadius: '30px',
        backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.color[300] : theme.palette.color[100],
        '&:hover': {
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.color[300]
                    : theme.palette.color[100],
        },
    },
}

export default style
