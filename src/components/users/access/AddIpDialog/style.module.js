const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            backgroundColor: 'dialog.main',
            width: '550px',
            borderRadius: '8px',
            backgroundImage: 'none',
        },
    },
    close: {
        color: 'background.close',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: 'dialog.title',
        borderRadius: 20,
        mt: 3.8,
        ml: 2.5,
        mr: 2.5,
        mb: 1.3,
        height: 42,
        pl: 1,
        pr: 1,
        color: '#002C5F',
    },
    tableBox: {
        width: '100%',
        backgroundColor: 'table.td',
        th: {
            width: '90px',
            fontWeight: 500,
            pt: '6px',
            pb: '6px',
            backgroundColor: 'table.viewTh',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'table.viewBorderTh',
            textAlign: 'center',
        },
        td: {
            fontWeight: 400,
            p: '6px 0px 6px 10px',
            textAlign: 'left',
            borderTop: '1px solid',
            borderColor: 'table.border',
        },
        '& tr:first-of-type': {
            '& th': {
                borderTop: '1px solid',
                borderBottom: 'none',
                borderColor: 'table.viewBorder',
            },
            '& td': {
                borderTop: '1px solid',
                borderBottom: 'none',
                borderColor: 'table.viewBorder',
            },
        },
        '& tr:last-child': {
            '& th': {
                borderBottom: '1px solid',
                borderColor: 'table.viewBorder',
            },
            '& td': {
                borderBottom: '1px solid',
                borderColor: 'table.viewBorder',
            },
        },
    },
    btnBox: {
        mb: 2,
        mr: 2,
        ml: 2,
    },
    btnLarge: {
        width: 130,
        height: 36,
        fontSize: 14,
        fontWeight: 400,
        backgroundColor: 'button.main',
        '&:hover': {
            bbackgroundColor: 'button.main',
        },
    },
}

export default style
