const style = {
    tooltipBox: {
        display: 'flex',
        mt: '-45px',
        width: '100%',
    },
    mapBox: {
        display: 'flex',
        bgcolor: 'color.dashboardCnt',
        borderRadius: 2,
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        height: 'calc(100vh - 367px)',
        justifyContent: 'center',
        '@media (max-width:1024px)': {
            boxShadow: 'none',
            bgcolor: 'transparent',
            borderTop: 'none',
            height: '100%',
            borderRadius: '0px !important',
            flexDirection: 'column-reverse',
        },
    },
    bannerBox: {
        display: 'flex',
        '@media (max-width:1024px)': {
            borderTop: '1px solid',
            borderTopColor: 'border.light',
            pb: '20px',
            borderRadius: '0px !important',
            '& .MuiGrid2-direction-xs-row': {
                width: '100%',
            },
        },
    },
}

export default style
