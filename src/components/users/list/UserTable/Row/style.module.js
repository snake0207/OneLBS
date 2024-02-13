const style = {
    resetButton: {
        height: '34px',
        fontWeight: 400,
        p: '0 8px',
        color: 'white',
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
        height: '34px',
        fontWeight: 500,
        p: 0,
        float: 'right',
        color: '#0A5CBA',
        border: '1px solid #0A5CBA',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    lightButton: {
        width: '45px',
        height: '34px',
        fontWeight: 400,
        p: '0 8px',
        ml: '4px',
        color: 'white',
        backgroundColor: 'button.light',
        '&:hover': {
            backgroundColor: 'button.light',
        },
    },
    select: {
        p: 0,
        fontSize: 14,
        height: '34px',
    },
}

export default style
