import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'

const HistoryTableMobile = ({ type, dummyData }) => {
    return (
        <>
            {dummyData?.length ? (
                // dummyData.map(() => {
                //
                // })
                <Stack direction={'column'} spacing={2}>
                    <Stack direction={'row'} spacing={1}>
                        <Box>
                            <Typography>{t('name', 'approval')}</Typography>
                        </Box>
                        <Box>
                            <Typography>value</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Box>
                            <Typography>{t('country', 'approval')}</Typography>
                        </Box>
                        <Box>
                            <Typography>value</Typography>
                        </Box>
                        {type !== 'requester' && (
                            <>
                                <Box>
                                    <Typography>{t('requester', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>value</Typography>
                                </Box>
                            </>
                        )}
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        {type !== 'reviewer' && (
                            <>
                                <Box>
                                    <Typography>{t('reviewer', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>value</Typography>
                                </Box>
                            </>
                        )}
                        {type !== 'approver' && (
                            <>
                                <Box>
                                    <Typography>{t('approver', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>value</Typography>
                                </Box>
                            </>
                        )}
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Box>
                            <Typography>{t('request_date', 'approval')}</Typography>
                        </Box>
                        <Box>
                            <Typography>value</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Box>
                            <Typography>{t('review_date', 'approval')}</Typography>
                        </Box>
                        <Box>
                            <Typography>value</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Box>
                            <Typography>{t('approval_date', 'approval')}</Typography>
                        </Box>
                        <Box>
                            <Typography>value</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Box>
                            <Typography>{t('state', 'approval')}</Typography>
                        </Box>
                        <Box>
                            <Typography>value</Typography>
                        </Box>
                    </Stack>
                </Stack>
            ) : (
                <Typography align={'center'}>NO DATA</Typography>
            )}
        </>
    )
}
export default HistoryTableMobile
