const style = {
    descriptionBox: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        p: '16px 14px',
        mt: '10px',
        border: 0,
        backgroundColor: 'background.grayCard',
        borderRadius: '8px',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    Title: {
        position: 'relative',
        width: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: '10px',
        fontWeight: 600,
        color: 'text.darkgray',
        mr: '20px',
        '&:after': {
            content: 'attr(title)',
            position: 'absolute',
            bottom: '0',
            right: '0px',
            width: '1px',
            height: '20px',
            borderRight: '1px solid',
            borderColor: 'border.lightgray',
        },
    },
    label: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px 4px',
        mr: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiTypography-root': {
            fontSize: '10px',
            color: 'text.main',
        },
    },
}

export default style
