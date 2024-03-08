const style = {
    mapDetailBox: {
        display: 'flex',
        margin: '10px',
        '@media (max-width:1024px)': {
            margin: '0',
        },
    },
    mapDetail: {
        width: '350px',
        maxHeight: '797px',
        overflow: 'auto',
        paddingTop: '16px',
        padding: '20px 16px 16px 16px',
        borderRadius: '8px',
        backgroundColor: 'dialog.main',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        opacity: '95%',
        '@media (max-width:1024px)': {
            width: '100%',
            ml: 0,
            opacity: '1',
            boxShadow: 'none',
            padding: '20px 0 16px 0',
            overflow: 'inherit',
        },
    },
}

export default style
