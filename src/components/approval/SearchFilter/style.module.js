const style = {
    searchBox: {
        width: '100%',
        ml: '0 !important',
        p: '16px 20px',
    },
    labelText: {
        fontSize: 14,
        fontWeight: 500,
        color: 'text.darkgray',
        wordBreak: 'break-word',
        fontFamily: 'Noto Sans KR,sans-serif',
    },
    tableBox: {
        width: '100%',
        th: {
            border: 0,
            p: '3px 10px 3px 0',
            '&:nth-of-type(even)': {
                pr: '20px',
            },
        },
    },
    searchButton: {
        fontSize: 15,
        fontWeight: 400,
        width: '69px',
        height: '40px',
        minWidth: 'auto',
        ml: '4px',
        backgroundColor: 'button.main',
        padding: '6px',
    },
    ResetButton: {
        width: '40px',
        height: '40px',
        minWidth: 'auto',
        backgroundColor: 'button.main',
        padding: '6px',
    },
}

export default style
