const style = {
    paging: {
        '& .MuiButtonBase-root.MuiPaginationItem-previousNext': {
            border: 'none',
            '&:hover': {
                backgroundColor: 'transparent',
                border: 'none',
                color: '#A9A9A9',
            },
        },
        '& .MuiButtonBase-root.MuiPaginationItem-firstLast': {
            border: 'none',
            '&:hover': {
                backgroundColor: 'transparent',
                border: 'none',
                color: '#A9A9A9',
            },
        },
        '& .MuiPaginationItem-root': {
            borderRadius: '30px',
            backgroundColor: 'white',
            border: '1px solid',
            borderColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.color[5001]
                    : theme.palette.color[401],
            color: '#A9A9A9',
            '&:hover': {
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.color[900]
                        : theme.palette.color[700],
                color: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.color[100]
                        : theme.palette.color[5001],
            },
        },
        '& .Mui-selected': {
            borderRadius: '30px',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.color[900]
                    : theme.palette.color[700],
            border: '1px solid',
            borderColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.color[900]
                    : theme.palette.color[700],
            color: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.color[100]
                    : theme.palette.color[5001],
            '&:hover': {
                borderRadius: '30px',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.color[900]
                        : theme.palette.color[700],
            },
        },
        '$ .Mui-disabled': {
            minWidth: '20px',
            border: '1px solid #ffffff',
        },
    },
}

export default style
