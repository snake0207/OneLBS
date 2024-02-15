const style = {
    contentBox: {
        width: '100%',
        borderRadius: '8px',
        p: '18px 20px',
        backgroundColor: 'white',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    tableBox: {
        width: '100%',
        th: {
            p: '6px 0px',
            color: 'white',
            fontSize: 15,
            fontWeight: 500,
            textAlign: 'center',
            backgroundColor: '#009ACC',
            borderLeft: '1px solid #33aed6',
            '&:first-of-type': { borderLeft: '0' },
        },
        td: {
            color: '#05141F',
            p: '6px 10px',
            border: '1px solid #d1d1d1',
            '&:first-of-type': { borderLeft: '0' },
            '&:last-of-child': { borderRight: '0' },
            '&:nth-of-type(11)': {},
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
                backgroundColor: '#e6e7e9',
            },
        },
    },
}

export default style
