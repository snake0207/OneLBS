const style = {
    cardBox: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: 'calc(33.33% - 7px)',
        minHeight: '202px',
        p: '16px 14px',
        border: 0,
        backgroundColor: 'background.contents',
        borderRadius: '8px',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    Title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 700,
        color: 'text.darkgray',
    },
    darkBlueButton: {
        height: '30px',
        fontSize: 13,
        backgroundColor: 'button.main',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'button.main',
        flex: 1,
        ml: '4px',
        p: '10px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.main',
            boxShadow: 'none',
        },
    },
    blueButton: {
        height: '30px',
        fontSize: 13,
        backgroundColor: 'button.light',
        border: '1px solid',
        borderColor: 'button.light',
        borderRadius: '4px',
        flex: 1,
        p: '10px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.light',
            boxShadow: 'none',
        },
    },
    gusestBox: {
        height: '21px',
        fontSize: 12,
        color: 'text.blue',
        backgroundColor: 'color.gusest',
        borderRadius: '2px',
        ml: '6px',
        p: '0 10px',
        boxShadow: 'none',
    },

    cardContBox: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px 4px',
    },
}

export default style
