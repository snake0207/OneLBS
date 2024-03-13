const style = {
    tableBox: {
        width: '100%',
        backgroundColor: 'table.td',
        th: {
            p: '6px 0px',
            color: '#05141f',
            fontSize: 14,
            fontWeight: 500,
            textAlign: 'center',
            backgroundColor: 'table.menuTh',
            borderLeft: '1px solid',
            borderColor: 'color.closeBg',
            borderTop: '1px solid #05141f',
            borderBottom: '1px solid #05141f',
            '&:first-of-type': { borderLeft: '0' },
            '& .MuiTypography-root': {
                fontSize: 14,
                fontWeight: 500,
            },
        },
        td: {
            p: '6px 10px',
            color: 'text.darkgray',
            border: '1px solid',
            borderColor: 'table.border',
            '&:first-of-type': { borderLeft: '0' },
            '&:last-of-type': { borderRight: '0' },
            '& .MuiCheckbox-root': {
                p: '0px',
            },
        },
        '& .MuiInputBase-root': { fontSize: 14, height: '34px' },
        tr: {
            '&:hover': {
                backgroundColor: 'table.hover',
            },
        },
    },
}

export default style
