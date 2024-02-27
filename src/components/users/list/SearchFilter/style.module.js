const style = {
    searchBox: {
        width: '100%',
        borderRadius: '8px',
        mb: '10px',
        p: '16px 20px',
        backgroundColor: 'grey.search',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    tableBox: {
        width: '100%',
        th: {
            border: 0,
            color: 'text.darkgray',
            p: '3px 10px 3px 0',
            '&:nth-of-type(even)': {
                pr: '20px',
            },
        },
        input: {
            height: '40px',
            pt: 0,
            pb: 0,
        },
    },
    searchButton: {
        fontSize: 15,
        fontWeight: 400,
        width: '69px',
        height: '40px',
        minWidth: 'auto',
        backgroundColor: 'button.main',
        padding: '6px',
    },
    inputDash: {
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
    },
}

export default style
