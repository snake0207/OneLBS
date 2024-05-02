import { fontSize } from '@mui/system'

const style = {
    contentBox: {
        width: '100%',
        borderRadius: '8px',
        p: '18px 20px',
        backgroundColor: 'background.contents',
        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
    },
    table_base: {
        mb: 3,
        th: {
            pt: 1,
            pb: 1,
            textAlign: 'center',
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        td: {
            pt: 0.5,
            pb: 0.5,
            border: `1px solid`,
            borderColor: 'table.viewTopBorder',
        },
        // table의 타이틀 영역 처리
        '& tr:first-of-type': {
            '& th': {
                fontSize: '15px',
                color: 'white',
                textAlign: 'center',
            },
        },
    },
    cellTitle: {
        width: '8%',
        color: 'white',
        backgroundColor: '#009ACC',
    },
    cellInput: {
        width: '14%',
    },
    cellInputWide: {
        width: '18%',
    },
}

export default style
