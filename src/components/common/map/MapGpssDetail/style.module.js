const style = {
    mapDetailBox: {
        display: 'flex',
        margin: '10px',
        '@media (max-width:1024px)': {
            margin: '0',
            pt: '15px',
        },
    },
    mapDetail: {
        width: '350px',
        ml: 0.5,
        opacity: '95%',
        borderRadius: '8px',
        '@media (max-width:1024px)': {
            width: '100%',
            ml: 0,
            opacity: '1',
        },
    },
    mapDetailContent: {
        maxHeight: '760px',
        overflow: 'auto',
        paddingTop: '16px',
        padding: '20px 16px 16px 16px',
        borderRadius: '0 0 8px 8px',
        backgroundColor: 'dialog.main',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        '@media (max-width:1024px)': {
            boxShadow: 'none',
            padding: '20px 0 16px 0',
            overflow: 'inherit',
        },
    },
    tabMenu: {
        width: '49.4%',
        fontSize: 15,
        fontWeight: 600,
        color: 'text.mapTaps',
        alignItems: 'flex-start',
        minHeight: '36px',
        padding: '0 16px',
        borderRadius: '8px 8px 0 0',
        backgroundColor: 'background.mapTaps',
        '&:first-of-type': { marginRight: '4px' },
    },
    tabs: {
        minHeight: '36px',
        marginRight: '0px',
        '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
        },
        '& .MuiTab-root.Mui-selected': {
            color: '#ffffff',
            backgroundColor: '#0A5CBA',
        },
    },
    darkBlueButton: {
        whiteSpace: 'nowrap',
        backgroundColor: 'button.light',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'button.light',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.light',
            boxShadow: 'none',
        },
    },
    lightButton: {
        width: '',
        color: '#00418D',
        ml: '2px',
        backgroundColor: 'button.lightblue',
        border: '1px solid',
        borderColor: 'button.lightblueBoder',
        borderRadius: '4px',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.lightblue',
            boxShadow: 'none',
        },
    },
    lineButton: {
        borderRadius: '4px',
        color: '#00418D',
        ml: '2px',
        flex: 1,
        border: '1px solid',
        borderColor: 'button.lineblueBoder',
        backgroundColor: 'button.white',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.white',
            boxShadow: 'none',
        },
    },
}

export default style
