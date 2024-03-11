const style = {
    dashboardBox: {
        width: '534px',
        height: '138px',
        borderRadius: '8px',
        p: '12px',
        color: '#fff',
        backgroundColor: 'rgba(0, 73, 97, .7)',
        mt: '18px',
        position: 'absolute',
        right: '30px',
        '@media (max-width:1024px)': {
            width: '100%',
            position: 'relative',
            left: '0',
            mt: '0',
        },
    },
    Title: {
        display: 'flex',
        padding: '11px 16px',
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        p: '0 0 14px 0',
    },
    items: {
        padding: '4px 6px',
        mt: '0',
        bgcolor: 'color.germany',
        borderRadius: 2,
        height: '76px',
        minWidth: '94px',
        justifyContent: 'center',
        ml: '10px',
        '&:first-of-type': {
            ml: '0px',
        },
        '& .MuiTypography-root:nth-of-type(1)': {
            mt: '0',
            fontSize: '14px',
        },
        '& .MuiTypography-root:nth-of-type(2)': {
            fontSize: '20px',
            lineHeight: '20px',
        },
        '@media (max-width:1024px)': {
            minWidth: '103px',
        },
    },
    backArrow: {
        backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
        color: 'rgba(255, 255, 255, 0.7) !important',
        position: 'absolute',
        left: '-14px',
        top: '60%',
        width: '30px',
        height: '30px',
        transform: 'translateY(-50%)',
    },
    nextArrow: {
        backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
        color: 'rgba(255, 255, 255, 0.7) !important',
        position: 'absolute',
        right: '-14px',
        top: '60%',
        width: '30px',
        height: '30px',
        transform: 'translateY(-50%)',
    },
}

export default style
