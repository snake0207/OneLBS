const style = {
    loginTitle: {
        color: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.color[5001] : theme.palette.color[100],
        backgroundSize: 20,
        fontSize: 16,
        fontWeight: 500,
        ml: 0.4,
    },
    passwordTitle: {
        color: 'text.main',
        backgroundSize: 20,
        fontSize: 16,
        fontWeight: 500,
        ml: 0.4,
    },
    labelText: {
        fontSize: 13,
        fontWeight: 500,
        mt: 2,
        color: 'text.main',
    },
}

export default style
