const style = {
    contentBox: {
        width: '100%',
        borderRadius: '8px',
        p: '18px 20px',
        backgroundColor: 'background.contents',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    tableBox: {
        width: '100%',
        mb: '10px',
        th: {
            width: '160px',
            color: '#05141F',
            fontWeight: 500,
            pt: '6px',
            pb: '6px',
            backgroundColor: '#efefef',
            textAlign: 'left',
        },
        td: {
            color: '#444444',
            fontWeight: 400,
            p: '6px 0px 6px 10px',
            textAlign: 'left',
        },
        '& tr:first-of-type': {
            '& th': {
                borderTop: '1px solid #444',
            },
            '& td': {
                borderTop: '1px solid #444',
            },
        },
        '& tr:last-child': {
            '& th': {
                borderBottom: '1px solid #444',
            },
            '& td': {
                borderBottom: '1px solid #444',
                borderTop: '1px solid #d1d1d1',
            },
        },
    },
    bluelineButton: {
        minWidth: '130px',
        height: 36,
        p: 0,
        color: '#0A5CBA',
        border: '1px solid #0A5CBA',
        backgroundColor: '#E3F0FF',
        '&:hover': {
            backgroundColor: '#E3F0FF',
        },
    },
    lineButton: {
        minWidth: '130px',
        height: 36,
        p: 0,
        ml: '4px !important',
        color: '#0A5CBA',
        border: '1px solid #0A5CBA',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
}

export default style
