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
            backgroundColor: '#009ACC',
            borderLeft: '1px solid',
            borderColor: 'table.borderTh',
            '&:first-of-type': { borderLeft: '0' },
        },
        td: {
            p: '6px 10px',
            border: '1px solid',
            borderColor: 'table.border',
            '&:first-of-type': { borderLeft: '0' },
            '&:last-of-type': { borderRight: '0' },
            select: {
                p: '6px 0px',
            },
        },
        input: {
            fontSize: 14,
            p: '6px 8px',
        },
        tr: {
            '&:hover': {
                backgroundColor: 'table.hover',
            },
        },
    },
}

export default style
