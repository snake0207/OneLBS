const style = {
    contentBox: {
        width: '100%',
        borderRadius: '8px',
        p: '18px 20px',
        backgroundColor: 'background.contents',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    tableBox: {
        width: '100%',
        mb: '10px',
        backgroundColor: 'table.td',
        th: {
            width: '160px',
            color: 'text.darkgray',
            fontWeight: 500,
            pt: '6px',
            pb: '6px',
            textAlign: 'left',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'table.border',
            backgroundColor: 'table.viewDatileTh',
        },
        td: {
            color: 'text.darkgray',
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
                borderTop: 'none',
                borderColor: 'table.viewBorder',
            },
            '& td': {
                borderBottom: '1px solid',
                borderBottomColor: 'table.viewBorder',
                borderTop: '1px solid',
                borderTopColor: 'table.viewTopBorder',
            },
        },
    },
    bluelineButton: {
        minWidth: '130px',
        height: 36,
        p: 0,
        color: '#0A5CBA',
        border: '1px solid #0A5CBA',
        backgroundColor: '#E3F0FF',
        '&:hover': {
            backgroundColor: '#E3F0FF',
        },
    },
    lineButton: {
        minWidth: '130px',
        height: 36,
        p: 0,
        ml: '4px !important',
        color: 'text.lineblue',
        border: '1px solid',
        borderColor: 'button.lineblue',
        backgroundColor: 'button.white',
        '&:hover': {
            backgroundColor: 'button.white',
        },
    },
}

export default style
