const style = {
    dashboardBox: {
        display: 'flex',
        width: '242px',
        height: '340px',
        flexWrap: 'wrap',
        borderRadius: '8px',
        p: '10px',
        color: '#fff',
        backgroundColor: 'color.germanyBox',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: '18px',
        position: 'absolute',
        right: '30px',
        border: '1px solid',
        borderColor: 'border.map',
        '@media (max-width:1024px)': {
            width: '100%',
            height: '230px',
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
        p: '0 0 0 10px',
        width: 'calc(50% - 5px)',
        height: 100,
        flexDirection: 'column',
        '@media (max-width:1024px)': {
            width: 'calc(33.33% - 5px)',
        },
    },
    items: {
        padding: 1,
        bgcolor: 'color.germany',
        borderRadius: 2,
        width: 'calc(50% - 5px)',
        height: 100,
        justifyContent: 'center',
        m: '0 0 10px 0',
        '&:nth-of-type(even)': {
            ml: '10px',
        },
        '@media (max-width:1024px)': {
            width: 'calc(33.33% - 5px)',
            height: 100,
            '&:nth-of-type(even)': {
                ml: '0px',
            },
        },
    },
}

export default style
