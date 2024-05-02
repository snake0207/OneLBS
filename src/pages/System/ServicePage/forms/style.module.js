import { fontSize } from '@mui/system'

const style = {
    contentBox: {
        width: '100%',
        borderRadius: '8px',
        p: '18px 20px',
        backgroundColor: 'background.contents',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    table_info: {
        mb: 3,
        th: {
            width: '20%',
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        td: {
            pt: 1,
            pb: 1,
            width: '30%',
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        tr: {
            '& th:first-of-type': {
                borderLeft: 'none',
            },
            '& th:last-child': {
                borderRight: 'none',
            },
            '& td:last-child': {
                borderRight: 'none',
            },
        },
    },
    table_set_base: {
        mb: 1,
        th: {
            width: '20%',
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        td: {
            pt: 1,
            pb: 1,
            width: '30%',
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        tr: {
            '& th:first-of-type': {
                borderLeft: 'none',
            },
            '& th:last-child': {
                borderRight: 'none',
            },
            '& td:last-child': {
                borderRight: 'none',
            },
        },
    },
    table_set_option: {
        mb: 3,
        th: {
            pt: 1,
            pb: 1,
            width: '20%',
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        td: {
            pt: 1,
            pb: 1,
            width: '20%',
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        tr: {
            '& th:first-of-type': {
                borderLeft: 'none',
            },
            '& th:last-child': {
                borderRight: 'none',
            },
            '& td:last-child': {
                borderRight: 'none',
            },
        },
    },
    cellTitle: {
        // color: 'white',
        // backgroundColor: '#009ACC',
        // color: 'rgb(139, 161, 183)',
        // backgroundColor: 'rgb(11, 41, 72)',
    },
}

export default style
