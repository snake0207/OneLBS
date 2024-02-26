const style = {
    tableBox: {
        width: '100%',
        backgroundColor: 'table.td',
        borderColor: 'table.viewBorder',
        borderTop: '1px solid',
        th: {
            width: '120px',
            p: '6px 0px',
            color: 'white',
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
            borderColor: 'table.border',
        },
        '& tr:first-child': {
            '& th': {
                borderTop: '1px solid',
                borderTopColor: 'table.borderlight',
            },
            '& td': {
                borderTop: '1px solid',
                borderTopColor: 'table.borderlight',
            },
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
    title: {
        fontSize: '15px',
        fontWeight: 500,
        color: 'text.main',
        m: '0 0 4px 0',
    },
}

export default style
