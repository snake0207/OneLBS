import Headline from '#/components/approval/Detail/Headline/index.jsx'
import t from '#/common/libs/trans.js'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

const Comment = ({ comments, userType, isEditable }) => {
    // TODO: 유저권한(타입), 수정가능여부에 따라 input or text 노출
    return (
        <Box>
            <Headline title={t('comment', 'approval')} />
            <Box>
                <Typography variant={'subtitle1'} fontWeight={'bold'}>
                    {t('reviewer', 'approval')}
                </Typography>
                <Typography>{comments.reviewer || '-'}</Typography>
            </Box>
            <Box>
                <Typography variant={'subtitle1'} fontWeight={'bold'}>
                    {t('approver', 'approval')}
                </Typography>
                <Typography>{comments.approver || '-'}</Typography>
            </Box>
        </Box>
    )
}

export default Comment
