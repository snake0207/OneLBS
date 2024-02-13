import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'

const HistoryTableMobile = ({ type, dummyData }) => {
    return (
        <>
            {dummyData?.length ? (
                dummyData.map((data, index) => {
                    return (
                        <Stack key={index} direction={'column'} spacing={2} mt={2}>
                            <Stack direction={'row'} spacing={1}>
                                <Box>
                                    <Typography>{t('name', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>{data.name}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box>
                                    <Typography>{t('country', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>{data.region}</Typography>
                                </Box>
                                {type !== 'requester' && (
                                    <>
                                        <Box>
                                            <Typography>{t('requester', 'approval')}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography>{data.requester}</Typography>
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
                                            <Typography>{data.reviewer}</Typography>
                                        </Box>
                                    </>
                                )}
                                {type !== 'approver' && (
                                    <>
                                        <Box>
                                            <Typography>{t('approver', 'approval')}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography>{data.approver}</Typography>
                                        </Box>
                                    </>
                                )}
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box>
                                    <Typography>{t('request_date', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>{data.request_date}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box>
                                    <Typography>{t('review_date', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>{data.review_date}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box>
                                    <Typography>{t('approval_date', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>{data.approval_date}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box>
                                    <Typography>{t('state', 'approval')}</Typography>
                                </Box>
                                <Box>
                                    <Typography>{data.status}</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    )
                })
            ) : (
                <Typography align={'center'}>NO DATA</Typography>
            )}
        </>
    )
}
export default HistoryTableMobile
