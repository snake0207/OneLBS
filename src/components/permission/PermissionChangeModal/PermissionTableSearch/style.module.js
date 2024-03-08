const style = {
    searchBox: {
        width: '100%',
        borderRadius: '8px',
        mb: '10px',
        p: '16px 20px',
        backgroundColor: 'grey.search',
        boxShadow: 'none',
        input: {
            height: '40px',
            pt: 0,
            pb: 0,
            fontSize: 15,
            fontWeight: 500,
        },
        '& .MuiInputBase-root': {
            fontSize: 15,
        },
    },
    labelText: {
        width: '55px',
        fontSize: 14,
        fontWeight: 500,
        color: 'text.darkgray',
        wordBreak: 'break-word',
        fontFamily: 'Noto Sans KR,sans-serif',
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
        ml: '45px',
    },
}

export default style
