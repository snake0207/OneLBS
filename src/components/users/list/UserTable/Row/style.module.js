const style = {
    resetButton: {
        minWidth: '40px',
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
        color: '#00418D',
        border: '1px solid',
        borderColor: 'button.whiteBoder',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    lightButton: {
        width: '40px',
        height: '34px',
        minWidth: '40px',
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
        backgroundColor: 'form.main',
        borderRadius: '4px',
    },
}

export default style
