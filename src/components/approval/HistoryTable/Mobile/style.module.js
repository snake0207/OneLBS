const style = {
    mobContentBox: {
        borderBottom: '1px solid',
        borderBottomColor: 'border.darkgray',
        p: '16px 0',
        '& .MuiStack-root': {
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
        },
        '&:hover': {
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.color[20001]
                    : theme.palette.color[5001],
            m: '0 -20px',
            p: '16px 20px',
        },
    },
    labelText: {
        display: 'flex',
        width: '30%',
        fontSize: 16,
        color: 'text.darkgray',
        wordBreak: 'break-word',
    },
    dataText: {
        position: 'relative',
        display: 'flex',
        width: '70%',
        fontSize: 16,
        color: 'text.darkgray',
        wordBreak: 'break-word',
        '&:before': {
            content: 'attr(title)',
            position: 'absolute',
            top: '5px',
            width: '1px',
            height: '16px',
            ml: '-8px',
            borderLeft: '1px solid',
            borderLeftColor: 'border.light',
        },
    },
}

export default style
