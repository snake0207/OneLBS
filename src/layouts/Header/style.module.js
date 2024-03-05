const style = {
    header: {
        backgroundColor: 'background.mobile',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'border.main',
        backgroundImage: 'none',
        '& .MuiContainer-root': {
            maxWidth: '100%',
            pl: '10px',
        },
        '& .MuiToolbar-root': {
            minHeight: '50px',
        },
        '@media (max-width:1024px)': {
            borderColor: 'border.header',
            '& .MuiToolbar-root': {
                minHeight: '60px',
            },
        },
    },
    dropdownText: {
        color: 'text.darkgray',
        backgroundColor: 'transparent',
        fontSize: 13,
        fontWeight: 400,
        p: '6px 24px 6px 16px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    languagText: {
        color: 'text.darkgray',
        backgroundColor: 'transparent',
        fontSize: 13,
        fontWeight: 400,
        p: '6px 24px 6px 6px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    dropdownMobText: {
        color: 'text.darkgray',
        backgroundColor: 'transparent',
        minWidth: 'auto',
        p: '6px 16px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '& .MuiButton-endIcon': {
            display: 'none',
        },
    },
    languagMobText: {
        color: 'text.darkgray',
        backgroundColor: 'transparent',
        minWidth: 'auto',
        p: '6px 12px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '& .MuiButton-endIcon': {
            display: 'none',
        },
    },
}

export default style
