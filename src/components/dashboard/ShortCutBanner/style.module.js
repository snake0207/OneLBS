const style = {
    dashboardBox: {
        position: 'relative',
        width: '25%',
        borderRadius: '8px',
        backgroundColor: 'background.contents',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '15px 18px',
        mt: '10px',
        ml: '10px',
        '&:first-of-type': { ml: '0px' },
    },
    Title: {
        display: 'flex',
        alignItems: 'center',
        color: 'color.banner',
        fontSize: 18,
        fontWeight: 600,
    },
    subTitle: {
        display: 'flex',
        alignItems: 'center',
        color: 'text.main',
        fontSize: 14,
        fontWeight: 400,
        mt: '4px',
    },
    more: {
        mt: 2,
        flexGrow: 0,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        fontSize: 14,
        color: 'text.gray',
    },
}

export default style
