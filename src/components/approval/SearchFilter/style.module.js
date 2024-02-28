const style = {
    searchBox: {
        width: '100%',
        p: '16px 20px 12px 20px',
        '& .MuiGrid2-root': {
            mb: '3px',
        },
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
    filter: {
        position: 'absolute',
        left: '0',
        width: '40px',
        height: '40px',
        minWidth: '40px',
        borderRadius: '8px',
        backgroundColor: '#0057BB',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    select: {
        width: '100%',
        height: 40,
        backgroundColor: 'form.main',
        borderRadius: '4px',
        '& .MuiSelect-nativeInput': {
            position: 'relative',
        },
    },
    mobLine: {
        '@media (max-width:1024px)': {
            display: 'block',
            borderTop: '1px solid',
            borderTopColor: 'border.light',
            mt: '5px',
            pt: '5px',
            borderRadius: '0px !important',
            '& .MuiGrid2-direction-xs-row': {
                width: '100%',
            },
        },
    },
}

export default style
