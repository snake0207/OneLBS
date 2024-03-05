const style = {
    europeBox: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        padding: '10px 26px',
        '& .MuiButtonBase-root.Mui-disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.2) !important',
            color: 'rgba(255, 255, 255, 0.2) !important',
        },
        '& .MuiButtonBase-root-MuiIconButton-root:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04) !important',
            color: 'rgba(255, 255, 255, 0.2) !important',
        },
    },
    categoryBox: {
        display: 'flex',
        gap: '35px',
        justifyContent: 'center',
        '@media (max-width:767px)': {
            gap: '14px',
            justifyContent: 'flex-start',
        },
    },
    backArrow: {
        backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
        color: 'rgba(255, 255, 255, 0.7) !important',
        position: 'absolute',
        left: '0px',
        top: '45%',
        width: '30px',
        height: '30px',
        transform: 'translateY(-50%)',
    },
    nextArrow: {
        backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
        color: 'rgba(255, 255, 255, 0.7) !important',
        position: 'absolute',
        right: '0',
        top: '45%',
        width: '30px',
        height: '30px',
        transform: 'translateY(-50%)',
    },
}

export default style
