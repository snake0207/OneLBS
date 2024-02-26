const style = {
    stepWrap: {
        display: '-webkit-inline-box',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stepItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        m: '0 auto',
        color: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.color[5001] : theme.palette.grey[100],
    },
    stepTitle: {
        height: 36,
        fontSize: 14,
        fontWeight: 500,
        mt: '4px',
    },
    stepArrwo: {
        display: 'flex',
        mt: '-34px',
        ml: '5px',
        mr: '5px',
    },
}

export default style
