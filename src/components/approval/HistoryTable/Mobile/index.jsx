import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'

import style from './style.module'

const HistoryTableMobile = ({ type, dataList, onClickRowFunction, isPending }) => {
    return (
        <>
            {dataList?.length ? (
                dataList.map((data, index) => {
                    return (
                        <Stack
                            key={index}
                            direction={'column'}
                            spacing={2}
                            onClick={() => onClickRowFunction(data.id)}
                            sx={style.mobContentBox}
                        >
                            <Stack direction={'row'} spacing={1}>
                                <Box sx={style.labelText}>
                                    <Typography>{t('name', 'approval')}</Typography>
                                </Box>
                                <Box sx={style.dataText}>
                                    <Typography>{data.name}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box sx={style.labelText}>
                                    <Typography>{t('country', 'approval')}</Typography>
                                </Box>
                                <Box sx={style.dataText}>
                                    <Typography>{data.region}</Typography>
                                </Box>
                            </Stack>
                            {type !== 'requester' && (
                                <Stack direction={'row'} spacing={1}>
                                    <Box sx={style.labelText}>
                                        <Typography>{t('requester', 'approval')}</Typography>
                                    </Box>
                                    <Box sx={style.dataText}>
                                        <Typography>{data.requester}</Typography>
                                    </Box>
                                </Stack>
                            )}
                            {type !== 'reviewer' && (
                                <Stack direction={'row'} spacing={1}>
                                    <Box sx={style.labelText}>
                                        <Typography>{t('reviewer', 'approval')}</Typography>
                                    </Box>
                                    <Box sx={style.dataText}>
                                        <Typography>{data.reviewer}</Typography>
                                    </Box>
                                </Stack>
                            )}
                            {type !== 'approver' && (
                                <Stack direction={'row'} spacing={1}>
                                    <>
                                        <Box sx={style.labelText}>
                                            <Typography>{t('approver', 'approval')}</Typography>
                                        </Box>
                                        <Box sx={style.dataText}>
                                            <Typography>{data.approver}</Typography>
                                        </Box>
                                    </>
                                </Stack>
                            )}

                            <Stack direction={'row'} spacing={1}>
                                <Box sx={style.labelText}>
                                    <Typography>{t('request_date', 'approval')}</Typography>
                                </Box>
                                <Box sx={style.dataText}>
                                    <Typography>{data.request_date}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box sx={style.labelText}>
                                    <Typography>{t('review_date', 'approval')}</Typography>
                                </Box>
                                <Box sx={style.dataText}>
                                    <Typography>{data.review_date}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box sx={style.labelText}>
                                    <Typography>{t('approval_date', 'approval')}</Typography>
                                </Box>
                                <Box sx={style.dataText}>
                                    <Typography>{data.approval_date}</Typography>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Box sx={style.labelText}>
                                    <Typography>{t('state', 'approval')}</Typography>
                                </Box>
                                <Box sx={style.dataText}>
                                    <Typography>{data.status}</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    )
                })
            ) : (
                <Typography align={'center'}>{isPending ? 'LOADING' : 'NO DATA'}</Typography>
            )}
        </>
    )
}
export default HistoryTableMobile
