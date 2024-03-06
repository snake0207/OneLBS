const style = {
    tableBox: {
        width: '100%',
        backgroundColor: 'table.td',
        borderColor: 'table.viewBorder',
        borderTop: '1px solid',
        th: {
            p: '6px 0px',
            fontSize: 15,
            fontWeight: 500,
            textAlign: 'center',
            color: 'text.main',
            backgroundColor: 'table.viewTh',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'table.viewBorderTh',
        },
        td: {
            color: 'text.main',
            p: '8px 10px',
            borderTop: '1px solid',
            borderTopColor: 'table.border',
        },
        '& tr:last-child': {
            '& th': {
                borderBottom: '1px solid',
                borderBottomColor: 'table.borderlight',
            },
            '& td': {
                borderBottom: '1px solid',
                borderBottomColor: 'table.borderlight',
            },
        },
    },
    tabMenu: {
        width: '140px',
        fontSize: 15,
        fontWeight: 600,
        color: 'text.taps',
        alignItems: 'flex-start',
        minHeight: '36px',
        padding: '0 16px',
        borderRadius: '8px 8px 0 0',
        border: '1px solid',
        borderColor: 'border.tabs',
        backgroundColor: 'background.taps',
        '&:first-of-type': { marginRight: '4px' },
    },
    tabs: {
        position: 'relative',
        minHeight: '36px',
        marginRight: '0px',
        mb: '20px',
        mt: '24px',
        '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
        },
        '& .MuiTab-root.Mui-selected': {
            color: 'text.tapSelected',
            backgroundColor: 'background.tapSelected',
            border: '1px solid',
            borderColor: 'border.tabSelected',
            mb: '-1px',
            zIndex: 3,
        },
        '&:after': {
            content: 'attr(title)',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            borderBottom: '1px solid',
            borderColor: 'border.tabSelected',
        },
    },
}

export default style
