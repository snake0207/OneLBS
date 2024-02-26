const style = {
    dropdownBox: {
        '& .MuiPaper-root': {
            top: '50px !important',
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'table.border',
            borderRadius: '8px',
            backgroundColor: 'dialog.main',
            '& .MuiFormLabel-root': {
                color: 'text.main',
                fontWeight: 500,
            },
        },
        '@media (max-width:1024px)': {
            mt: '20px',
            '& .MuiPaper-root': {
                top: '40px !important',
            },
        },
    },
}

export default style
