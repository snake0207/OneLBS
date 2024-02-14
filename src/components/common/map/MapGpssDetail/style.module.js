const style = {
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
        marginLeft: '-16px',
        marginRight: '-16px',
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
