const style = {
    dialogBox: {
        '& .MuiDialog-paper': {
            backgroundColor: 'dialog.main',
            width: '550px',
            borderRadius: '8px',
            maxWidth: 'auto',
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
        borderColor: 'table.viewBorder',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        th: {
            width: '130px',
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
    darkLarge: {
        width: '30%',
        height: 36,
        fontWeight: 400,
        backgroundColor: 'button.main',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.main',
        },
    },
    bluelineButton: {
        width: '30%',
        height: 36,
        p: 0,
        color: '#0A5CBA',
        border: '1px solid #0A5CBA',
        backgroundColor: '#E3F0FF',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#E3F0FF',
        },
    },
    resetButton: {
        width: '40px',
        minWidth: '40px',
        height: 36,
        p: '0 6px',
        color: 'white',
        fontWeight: 400,
        backgroundColor: 'button.light',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.light',
        },
        '&:span': {
            '&:image': {
                height: '16px',
                width: '16px',
            },
        },
    },
    lineButton: {
        width: '30%',
        height: 36,
        p: 0,
        color: 'text.lineblue',
        border: '1px solid',
        borderColor: 'button.lineblue',
        backgroundColor: 'button.white',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'button.white',
        },
    },
}

export default style
