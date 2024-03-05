import Headline from '#/components/approval/Detail/Headline/index.jsx'
import t from '#/common/libs/trans.js'
import { Box, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'

const Comment = ({ comments, userType, isEditable, formik }) => {
    // TODO: 유저권한(타입), 수정가능여부에 따라 input or text 노출

    return (
        <Box sx={{ m: '24px 0' }}>
            <Headline title={t('comment', 'approval')} />
            <Box>
                <Typography
                    variant={'subtitle1'}
                    sx={{
                        fontSize: 18,
                        color: 'text.main',
                        '@media (max-width:1024px)': {
                            fontSize: 16,
                        },
                    }}
                >
                    {t('reviewer', 'approval')}
                </Typography>
                {userType === 'reviewer' && isEditable ? (
                    <TextField
                        id="outlined-multiline-static"
                        name="reviewer_comment"
                        fullWidth
                        hiddenLabel
                        multiline
                        rows={3}
                        value={formik.values['reviewer_comment'] || ''}
                        onChange={formik.handleChange}
                        sx={{ backgroundColor: 'form.main', borderRadius: '4px' }}
                    />
                ) : (
                    <Typography
                        sx={{
                            fontSize: 18,
                            color: 'text.main',
                            '@media (max-width:1024px)': {
                                fontSize: 16,
                            },
                        }}
                    >
                        {comments.reviewer || '-'}
                    </Typography>
                )}
            </Box>
            <Box>
                <Typography
                    variant={'subtitle1'}
                    sx={{
                        fontSize: 18,
                        color: 'text.main',
                        '@media (max-width:1024px)': {
                            fontSize: 16,
                        },
                    }}
                >
                    {t('approver', 'approval')}
                </Typography>
                {userType === 'approver' && isEditable ? (
                    <TextField
                        id="outlined-multiline-static"
                        name="approver_comment"
                        fullWidth
                        hiddenLabel
                        multiline
                        rows={3}
                        value={formik.values['approver_comment'] || ''}
                        onChange={formik.handleChange}
                        sx={{ backgroundColor: 'form.main', borderRadius: '4px' }}
                    />
                ) : (
                    <Typography>{comments.approver || '-'}</Typography>
                )}
            </Box>
        </Box>
    )
}

export default Comment
