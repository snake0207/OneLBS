const style = {
    tableBox: {
        width: '100%',
        th: {
            p: '6px 0px',
            color: 'white',
            fontSize: 15,
            fontWeight: 500,
            textAlign: 'center',
            color: '#444',
            backgroundColor: '#e2e2e2',
            borderLeft: '1px solid #d1d1d1',
            '&:first-of-type': { borderLeft: '0' },
        },
        td: {
            color: '#05141F',
            p: '8px 10px',
            border: '1px solid #d1d1d1',
            '&:first-of-type': { borderLeft: '0' },
            '&:last-of-type': { borderRight: '0' },
            select: {
                p: '6px 0px',
            },
        },
    },
}

export default style
