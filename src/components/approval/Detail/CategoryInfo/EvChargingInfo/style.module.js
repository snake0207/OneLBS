const style = {
    accordionBox: {
        backgroundColor: 'background.main',
        backgroundImage: 'none',
        boxShadow: 'none',
        borderTop: 'none',
        borderRadius: '0 !important',
        '& .MuiAccordionSummary-root': {
            p: '0',
        },
        '& .MuiAccordionDetails-root': {
            p: '10px 0',
            '& .MuiAccordionSummary-root': {
                border: 'none',
                minHeight: '38px',
                mb: '0',
                '& .MuiAccordionSummary-content': {
                    m: '0 !important',
                },
            },
        },
        '& .MuiTypography-root': {
            color: 'text.darkgray',
        },
        '&:before': {
            content: 'attr(title)',
            opacity: '0',
        },
    },
    accordionDepsBox: {
        backgroundColor: 'background.main',
        backgroundImage: 'none',
        boxShadow: 'none',
        borderTop: 'none',
        borderRadius: '0 !important',
        '&:before': {
            content: 'attr(title)',
            opacity: '0',
        },
    },
    evContentBox: {
        p: '12px !important',
        borderRadius: '4px',
        backgroundColor: 'background.accordion',
        border: '1px solid',
        borderColor: 'border.light',
        color: 'text.darkgray',
    },
    evChargingBox: {
        minHeight: '48px !important',
        backgroundColor: 'background.main',
        borderBottom: '1px solid',
        borderBottomColor: 'border.lightgray',
        '& .MuiAccordionSummary-content': {
            m: '0',
        },
    },
}

export default style
