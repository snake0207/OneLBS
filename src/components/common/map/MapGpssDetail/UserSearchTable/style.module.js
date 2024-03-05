const style = {
    tableBox: {
        width: '100%',
        backgroundColor: 'table.td',
        th: {
            p: '6px 0px',
            color: 'white',
            fontSize: 15,
            fontWeight: 500,
            textAlign: 'center',
            color: 'text.main',
            backgroundColor: 'table.viewTh',
            borderLeft: '1px solid',
            borderColor: 'table.viewBorderTh',
            borderTop: '1px solid',
            borderTopColor: 'table.viewBorderTh',
            '&:first-of-type': { borderLeft: '0' },
        },
        td: {
            color: 'text.main',
            p: '8px 10px',
            border: '1px solid',
            borderColor: 'table.border',
            '&:first-of-type': { borderLeft: '0' },
            '&:last-of-type': { borderRight: '0' },
        },
        '& tr:last-child': {
            '& td': {
                borderBottom: '1px solid',
                borderBottomColor: 'table.viewBorderTh',
            },
        },
    },
}

export default style
