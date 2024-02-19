const style = {
    tableBox: {
        width: '100%',
        borderTop: '1px solid #d1d1d1',
        th: {
            p: '6px 0px',
            color: 'white',
            fontSize: 15,
            fontWeight: 500,
            textAlign: 'center',
            color: '#444',
            backgroundColor: '#e2e2e2',
            borderBottom: '1px solid #d1d1d1',
        },
        td: {
            color: '#05141F',
            p: '8px 10px',
            borderBottom: '1px solid #d1d1d1',
        },
    },
    tabMenu: {
        width: '25%',
        fontSize: 15,
        fontWeight: 600,
        color: '#A9A9A9',
        alignItems: 'flex-start',
        minHeight: '36px',
        padding: '0 16px',
        borderRadius: '8px 8px 0 0',
        border: '1px solid #EFEFEF',
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
            color: '#05141f',
            backgroundColor: '#fff',
            border: '1px solid #05141f',
            mb: '-1px',
            zIndex: 3,
        },
        '&:after': {
            content: 'attr(title)',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            borderBottom: '1px solid #05141f',
        },
    },
}

export default style
