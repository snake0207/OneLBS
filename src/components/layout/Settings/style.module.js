const style = {
    settingBox: {
        mt: '26px',
        '& .MuiPaper-root': {
            boxShadow: 'none',
            border: '1px solid #888',
            borderRadius: '8px',
            '& .MuiFormLabel-root': {
                color: 'text.gray',
                fontWeight: 500,
            },
        },
        '@media (max-width:1024px)': {
            mt: '20px',
        },
    },
    darkButton: {
        minWidth: '44px',
        height: 35,
        fontWeight: 400,
        color: '#fff',
        mt: '10px',
        backgroundColor: 'button.light',
        '&:hover': {
            backgroundColor: 'button.light',
        },
    },
}

export default style
