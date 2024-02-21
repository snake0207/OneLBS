const style = {
    tableBox: {
        width: '100%',
        th: {
            width: '130px',
            color: '#444444',
            fontWeight: 500,
            pt: '6px',
            pb: '6px',
            backgroundColor: '#e2e2e2',
            borderTop: '1px solid #d1d1d1',
            borderBottom: '1px solid #d1d1d1',
            textAlign: 'center',
        },
        td: {
            color: '#444444',
            fontWeight: 400,
            p: '6px 0px 6px 10px',
            textAlign: 'left',
            borderTop: '1px solid #d1d1d1',
        },
    },
    btnBox: {
        mb: 2,
        mr: 2,
        ml: 2,
    },
    darkLarge: {
        width: '24%',
        height: 36,
        fontWeight: 400,
        backgroundColor: 'primary.dark',
        '&:hover': {
            backgroundColor: 'primary.dark',
        },
    },
    bluelineButton: {
        width: '24%',
        height: 36,
        p: 0,
        color: '#0A5CBA',
        border: '1px solid #0A5CBA',
        backgroundColor: '#E3F0FF',
        '&:hover': {
            backgroundColor: '#E3F0FF',
        },
    },
    resetButton: {
        width: '28%',
        height: 36,
        p: '0 6px',
        color: 'white',
        fontWeight: 400,
        backgroundColor: 'button.light',
        '&:hover': {
            backgroundColor: 'button.light',
        },
        '&:span': {
            '&:image': {
                height: '16px',
                width: '16px',
            },
        },
    },
    lineButton: {
        width: '27%',
        height: 36,
        p: 0,
        color: '#0A5CBA',
        border: '1px solid #0A5CBA',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
}

export default style
