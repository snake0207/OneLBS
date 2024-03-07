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
            p: '10px 0 0 0',

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
        '&:last-of-type': {
            border: 'none',
        },
    },
    accordionDepsBox: {
        backgroundColor: 'background.main',
        backgroundImage: 'none',
        boxShadow: 'none',
        borderTop: 'none',
        borderRadius: '0 !important',
        mt: '8px',
        '&:before': {
            content: 'attr(title)',
            opacity: '0',
        },
    },
    detailsBox: {
        '& .MuiGrid-container': {
            p: '12px',
            mb: '10px',
            borderRadius: '4px',
            backgroundColor: 'background.accordion',
            border: '1px solid',
            borderColor: 'border.light',
            gap: 'inherit',
            '& .MuiBox-root': {
                p: '0',
                mb: '8px',
                mt: '0',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                border: 'none',
                gap: 'inherit',
            },
        },
        '& .MuiBox-root': {
            p: '12px',
            mb: '10px',
            borderRadius: '4px',
            backgroundColor: 'background.accordion',
            border: '1px solid',
            borderColor: 'border.light',
            gap: 'inherit',
        },

        color: 'text.darkgray',
    },
    summaryBox: {
        minHeight: '48px !important',
        backgroundColor: 'background.main',

        '& .MuiAccordionSummary-content': {
            m: '0',
        },
    },
}

export default style
