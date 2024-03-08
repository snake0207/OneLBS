const style = {
    img: {
        width: '80px',
        height: '101px',
    },
    title: {
        color: 'text.darkgray',
        fontSize: '28px',
        '@media (max-width:1024px)': {
            fontSize: '25px',
        },
    },
    detailBox: {
        width: '430px',
        fontSize: '13px',
        textAlign: 'center',
        mt: 2,
        p: '10px 20px',
        color: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.color[1000] : theme.palette.color[700],
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'border.lightgray',
        '@media (max-width:1024px)': {
            width: 'calc(100% - 22px)',
        },
    },
    darkBlueButton: {
        width: '110px',
        height: '30px',
        mt: '30px',
        fontSize: '13px',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'button.light',
        backgroundColor: 'button.light',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.light',
            boxShadow: 'none',
        },
    },
}

export default style
