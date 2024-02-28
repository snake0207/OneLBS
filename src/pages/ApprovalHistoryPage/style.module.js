const style = {
    contentBox: {
        width: '100%',
        borderRadius: '8px',
        p: '18px 20px',
        backgroundColor: 'background.contents',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        '@media (max-width:1024px)': {
            backgroundColor: 'background.main',
            border: '1px solid',
            borderColor: 'border.light',
        },
    },
    searchBox: {
        m: '0 0 16px 0',
        p: '0 !important',
        borderRadius: '8px',
        maxWidth: 'calc(100% - 0px) !important',
        backgroundColor: 'grey.search',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
        '@media (max-width:1024px)': {
            position: 'relative',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            '& .MuiStack-root': {
                '& .MuiGrid2-root': {
                    backgroundColor: 'grey.search',
                    boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                    borderRadius: '8px',
                    '& .MuiGrid2-root': {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
}

export default style
