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
        backgroundColor: 'color.grayBox',
        borderRadius: '4px',
        '@media (max-width:1024px)': {
            width: 'calc(100% - 22px)',
        },
    },
    button: {
        width: '100px',
        height: '30px',
        mt: '30px',
        fontSize: '13px',
        color: 'text.main',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'color.grayBorder',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
}

export default style
