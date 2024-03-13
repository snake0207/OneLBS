const style = {
    darkBlueButton: {
        width: '25%',
        ml: '4px',
        backgroundColor: 'button.light',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'button.light',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.light',
            boxShadow: 'none',
        },
        '&:first-of-type': { ml: '0px' },
    },
    lightButton: {
        color: '#00418D',
        ml: '4px',
        backgroundColor: 'button.lightblue',
        border: '1px solid',
        borderColor: 'button.lightblueBoder',
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
        ml: '4px',
        flex: 1,
        color: 'text.lineblue',
        border: '1px solid',
        borderColor: 'button.lineblue',
        backgroundColor: 'button.white',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.white',
        },
        '&:first-of-type': { ml: '0px' },
    },
    blueButton: {
        width: '',
        color: '#00418D',
        ml: '4px',
        backgroundColor: 'button.blue',
        border: '1px solid',
        borderColor: 'button.blueBoder',
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
