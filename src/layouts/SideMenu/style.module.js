const style = {
    webnavBox: {
        '& .MuiPaper-root': {
            backgroundColor: 'background.default',
        },
        '& .MuiList-root': {
            pt: '0',
            m: '0 4px 2px 4px',
            '& .MuiButtonBase-root': {
                m: '3px 0',
                '& .MuiListItemIcon-root': {
                    minWidth: '30px',
                    mr: '8px',
                },
            },
        },
        '& .MuiListItemText-root': {
            '& .MuiTypography-root': {
                fontSize: 15,
                color: 'text.darkgray',
                fontWeight: 500,
            },
        },
        '& .MuiCollapse-root': {
            '& .MuiList-root': {
                '& .MuiButtonBase-root': {
                    p: '6px 24px 6px 52px',
                    borderBottom: 'none',
                    '& .MuiTypography-root ': {
                        fontSize: 15,
                    },
                    '&:hover': { borderRadius: '350px' },
                },
            },
        },
    },
    navBox: {
        '& .MuiPaper-root': {
            width: '80%',
            backgroundColor: 'lnb.mobilelnb',
            backgroundImage: 'none',
            '& .MuiListItemIcon-root': {
                minWidth: 'auto',
                mr: '8px',
            },
        },
        '& .MuiListItemText-root': {
            '& .MuiTypography-root': {
                fontSize: 18,
                color: 'text.darkgray',
                fontWeight: 400,
            },
        },
        '& .MuiButtonBase-root': {
            borderBottom: '1px solid',
            borderColor: 'border.lnb',
        },
        '& .MuiList-root': {
            pt: '0',
            '& .MuiButtonBase-root': {
                p: '15px 24px',
            },
        },
        '& .MuiCollapse-root': {
            '& .MuiList-root': {
                pb: '6px',
                borderBottom: '1px solid',
                borderColor: 'border.lnb',
                backgroundColor: 'lnb.mobilelnbdeps',
                '& .MuiButtonBase-root': {
                    p: '6px 24px 6px 52px',
                    borderBottom: 'none',
                    '& .MuiTypography-root ': {
                        color: '#fff',
                        fontSize: 16,
                    },
                },
            },
        },
    },
}

export default style
