const style = {
    titleBox: {
        backgroundColor: '#f5f5f5',
        mb: '20px',
        ml: '-19px',
        height: '45px',
        alignItems: 'center',
        p: '0 16px',
        position: 'fixed',
        top: '64px',
        width: 'calc(100% - 59px)',
        zIndex: 3,
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
            backgroundColor: '#FFF',
            '&:hover': {
                backgroundColor: '#e6e7e9',
            },
        },
    },
}

export default style
