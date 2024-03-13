const style = {
    searchBox: {
        width: '350px',
        maxHeight: '288px',
        overflow: 'auto',
        padding: '16px',
        margin: '10px 10px 6px 10px',
        borderRadius: '8px',
        backgroundColor: 'dialog.main',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        opacity: '95%',
        '@media (max-width:767px)': {
            margin: '10px 0px 6px 10px',
            width: 'calc(100% - 15px)',
        },
    },
    labelText: {
        fontSize: '15px',
        fontWeight: 500,
    },
    item: {
        '& .MuiGrid-root.MuiGrid-item': {
            paddingTop: '4px',
            '& .MuiTypography-root': {
                color: 'text.main',
            },
        },
    },
    select: {
        height: '40px',
    },
}

export default style
