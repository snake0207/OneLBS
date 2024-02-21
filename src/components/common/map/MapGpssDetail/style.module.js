const style = {
    mapDetail: {
        width: '410px',
        ml: 0.5,
        borderRadius: '8px',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        '& .css-1ilmods': {
            background: '#ffffff',
            padding: '20px 16px 16px 16px',
            borderRadius: '0 0 8px 8px',
        },
        '& .css-1fbfkr9': {
            background: '#ffffff',
            padding: '20px 16px 16px 16px',
            borderRadius: '0 0 8px 8px',
        },
    },
    tabMenu: {
        width: '49.4%',
        fontSize: 15,
        fontWeight: 600,
        color: '#A9A9A9',
        alignItems: 'flex-start',
        minHeight: '36px',
        padding: '0 16px',
        borderRadius: '8px 8px 0 0',
        backgroundColor: '#EFEFEF',
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
}

export default style
