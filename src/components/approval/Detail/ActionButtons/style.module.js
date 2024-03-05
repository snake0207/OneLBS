const style = {
    darkBlueButton: {
        width: '25%',
        height: '30px',
        ml: '4px',
        backgroundColor: 'button.light',
        borderRadius: '4px',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.light',
            boxShadow: 'none',
        },
        '&:first-of-type': { ml: '0px' },
    },
    lightButton: {
        width: '',
        color: '#002C5F',
        ml: '4px',
        backgroundColor: 'button.lightblue',
        border: '1px solid #5b8cc5',
        borderRadius: '4px',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.lightblue',
        },
        '&:first-of-type': { ml: '0px' },
    },
    lineButton: {
        borderRadius: '4px',
        color: '#002C5F',
        ml: '4px',
        flex: 1,
        border: '1px solid #5b8cc5',
        backgroundColor: 'button.white',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.white',
        },
        '&:first-of-type': { ml: '0px' },
    },
    blueButton: {
        width: '',
        color: '#002C5F',
        ml: '4px',
        backgroundColor: 'button.blue',
        border: '1px solid #5b8cc5',
        borderRadius: '4px',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.lightblue',
        },
        '&:first-of-type': { ml: '0px' },
    },
}

export default style
