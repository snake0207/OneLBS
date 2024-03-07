import { Box, Button, Typography } from '@mui/material'
import t from '#/common/libs/trans.js'
import Divider from '@mui/material/Divider'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import UserSearchTable from '#/components/common/map/MapGpssDetail/UserSearchTable/index.jsx'
import { GPSS_TABLE_TYPE } from '#/contents/constant.js'
import { useGetApprover, useGetReviewer } from '#/hooks/queries/gpss.js'
import { useState } from 'react'

const dummyData = [
    { id: 'qwer@acrofuture.com', name: '아*로1', company: '회사1', userSeq: 1 },
    { id: 'asdf@acrofuture.com', name: '아*로2', company: '회사2', userSeq: 2 },
    { id: 'zxcv@acrofuture.com', name: '아*로3', company: '회사3', userSeq: 3 },
]
const MapApprovalSelect = ({
    formik,
    reviewerName,
    approverName,
    selectedReviewer,
    setSelectedReviewer,
    selectedApprover,
    setSelectedApprover,
    isReviewerShow,
}) => {
    const { data: reviewerData, refetch: getReviewer } = useGetReviewer(formik.values[reviewerName])
    const { data: approverData, refetch: getApprover } = useGetApprover(formik.values[approverName])

    // 검토자 승인자 검색 클릭
    const [isSearchButtonClick, setIsSearchButtonClick] = useState({
        reviewer: false,
        approver: false,
    })

    const handleClickSearchButton = (name) => {
        setIsSearchButtonClick({ ...isSearchButtonClick, [name]: true })
    }

    // 검토자 검색
    const handleClickGetReviewer = () => {
        if (formik.values[reviewerName] === '') return
        handleClickSearchButton('reviewer')
        // getReviewer()
    }
    // 결제자 검색
    const handleClickGetApprover = () => {
        if (formik.values[approverName] === '') return
        handleClickSearchButton('approver')
        // getApprover()
    }
    return (
        <Box>
            {isReviewerShow && (
                <Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: 'text.darkgray',
                            }}
                        >
                            {t('reviewer', 'users')}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '6px',
                            mt: '8px',
                            height: '40px',
                        }}
                    >
                        <TextInput
                            formik={formik}
                            name={reviewerName}
                            placeholder={t('input_keyword', 'common')}
                        />
                        <Button
                            variant={'contained'}
                            onClick={handleClickGetReviewer}
                            sx={{ backgroundColor: 'button.gray' }}
                        >
                            {t('search', 'common')}
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            mt: '8px',
                        }}
                    >
                        {isSearchButtonClick['reviewer'] && (
                            <>
                                <Typography sx={{ marginY: '16px' }}>
                                    {t('search_no_result', 'common')}
                                </Typography>
                                <UserSearchTable
                                    data={dummyData}
                                    tableType={GPSS_TABLE_TYPE.reviewer}
                                    selectedReviewer={selectedReviewer}
                                    setSelectedReviewer={setSelectedReviewer}
                                />
                            </>
                        )}
                    </Box>
                </Box>
            )}
            <Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: 'text.darkgray',
                        }}
                    >
                        {t('approver', 'users')}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6px',
                        mt: '8px',
                        height: '40px',
                    }}
                >
                    <TextInput
                        formik={formik}
                        name={approverName}
                        placeholder={t('input_keyword', 'common')}
                    />
                    <Button
                        variant={'contained'}
                        onClick={handleClickGetApprover}
                        sx={{ backgroundColor: 'button.gray' }}
                    >
                        {t('search', 'common')}
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        mt: '8px',
                    }}
                >
                    {isSearchButtonClick['approver'] && (
                        <>
                            <Typography sx={{ marginY: '16px', color: 'text.darkgray' }}>
                                {t('search_no_result', 'common')}
                            </Typography>
                            <UserSearchTable
                                data={dummyData}
                                tableType={GPSS_TABLE_TYPE.approver}
                                selectedApprover={selectedApprover}
                                setSelectedApprover={setSelectedApprover}
                            />
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default MapApprovalSelect
