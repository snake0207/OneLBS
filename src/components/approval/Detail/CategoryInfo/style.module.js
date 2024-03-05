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
    evCharging: {
        backgroundColor: 'background.main',
        backgroundImage: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderBottomColor: 'border.gray',
        borderRadius: '0 !important',
        '& .MuiAccordionSummary-root': {
            p: '0',
        },
    },
}

export default style
