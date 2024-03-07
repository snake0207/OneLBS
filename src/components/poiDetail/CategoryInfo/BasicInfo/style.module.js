const style = {
    historyTabBox: {
        paddingTop: '20px',
        paddingRight: '16px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 600,
        color: 'text.darkgray',
    },
    hr: {
        marginY: '0px',
        mb: '0px',
        borderBottom: '1px solid',
        borderBottomColor: 'border.lightgray',
    },
    lightButton: {
        width: '100%',
        height: '30px',
        color: '#002C5F',
        ml: '2px',
        backgroundColor: 'button.lightblue',
        border: '1px solid',
        borderColor: 'button.lightblueBoder',
        borderRadius: '4px',
        flex: 1,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.lightblue',
            boxShadow: 'none',
        },
    },
    edit: {
        display: 'flex',
        width: '30px',
        height: '30px',
        backgroundColor: 'color.edit',
        borderRadius: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: 'button.lightblue',
            boxShadow: 'none',
        },
    },
    save: {
        display: 'flex',
        width: '30px',
        height: '30px',
        backgroundColor: 'button.main',
        borderRadius: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: 'button.main',
            boxShadow: 'none',
        },
    },
}

export default style
