const style = {
    loginTitle: {
        color: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.color[5001] : theme.palette.color[100],
        backgroundSize: 20,
        fontSize: 16,
        fontWeight: 500,
        ml: 0.4,
        mb: 2,
    },
    subText: {
        fontSize: 12,
        fontWeight: 400,
        mb: 1,
        color: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.color[1000] : theme.palette.color[100],
    },
    labelText: {
        fontSize: 13,
        fontWeight: 500,
        mt: 2,
        color: (theme) =>
        theme.palette.mode === 'light' ? theme.palette.color[1001] : theme.palette.color[100],
    },
    loadingButton: {
        mb: 1,
        fontSize: 13,
        bgcolor: 'grey.darkgray',
        // fontWeight: 500,
        '&:hover': {
            backgroundColor: 'primary.dark',
        },
    },
    button: {
        color: 'primary.light',
        fontWeight: 400,
        '&:hover': {
            boxShadow: 'none',
        },
    },
}

export default style
