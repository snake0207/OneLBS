import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EvStationIcon from '@mui/icons-material/EvStation'
import EditIcon from '@mui/icons-material/Edit'
import { useFormik } from 'formik'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import UserSearchTable from '#/components/common/map/MapGpssDetail/UserSearchTable/index.jsx'
import { GPSS_TABLE_TYPE } from '#/contents/constant.js'
import { useGetManager, useGetReviewer } from '#/hooks/queries/gpss.js'
import { usePopupActions } from '#/store/usePopupStore.js'

const dummyData = [
    { id: 'qwer@acrofuture.com', name: '아*로1', company: '회사1', userSeq: 1 },
    { id: 'asdf@acrofuture.com', name: '아*로2', company: '회사2', userSeq: 2 },
    { id: 'zxcv@acrofuture.com', name: '아*로3', company: '회사3', userSeq: 3 },
]

const tableHeader = ['아이디', '이름', '회사']

const MapGpssDetailTab = () => {
    const formik = useFormik({
        initialValues: {
            address: '',
            lat: '',
            lng: '',
            reason: '',
            reviewer: '',
            manager: '',
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })

    const [isAddressSave, setIsAddressSave] = useState(false)
    const [isLatSave, setIsLatSave] = useState(false)
    const [isLngSave, setIsLngSave] = useState(false)
    // 검토자 승인자 검색
    const [isReviewerSearchClick, setIsReviewerSearchClick] = useState(false)
    const [isManagerSearchClick, setIsManagerSearchClick] = useState(false)
    // 검토자 승인자 선택
    const [selectedReviewer, setSelectedReviewer] = useState(null)
    const [selectedManager, setSelectedManager] = useState(null)

    const { data: reviewerData, refetch: getReviewer } = useGetReviewer(formik.values.reviewer)
    const { data: managerData, refetch: getManager } = useGetManager(formik.values.manager)

    const handleClickSetAddressState = () => {
        setIsAddressSave(!isAddressSave)
    }
    const handleClickSetLatState = () => {
        setIsLatSave(!isLatSave)
    }
    const handleClickSetLngSate = () => {
        setIsLngSave(!isLngSave)
    }

    // 검토자 검색
    const handleClickGetReviewer = () => {
        if (formik.values.reviewer === '') return
        setIsReviewerSearchClick(true)
        // getReviewer()
    }
    // 결제자 검색
    const handleClickGetManager = () => {
        if (formik.values.manager === '') return
        setIsManagerSearchClick(true)
        // getManager()
    }
    return (
        <Box sx={{ paddingTop: '16px' }}>
            <Box>
                <Typography variant={'h6'}>Times Square</Typography>
            </Box>
            <Divider />
            <Box sx={{ marginTop: '8px', marginBottom: '16px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <PlaceIcon />
                        </Box>
                        <Box>
                            <Typography>10036 New York, Manhattan, United States</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                ml: 'auto',
                                minWidth: '15px',
                                width: '30px',
                                minHeight: '15px',
                                height: '30px',
                            }}
                            onClick={handleClickSetAddressState}
                        >
                            {isAddressSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isAddressSave || (!isAddressSave && formik.values.address !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'address'}
                                IsDisabled={!isAddressSave}
                                placeholder={'주소를 입력하세요'}
                            />
                        </Box>
                    )}
                </Box>
                <Divider sx={{ marginY: '5px' }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <LanguageIcon />
                        </Box>
                        <Box>
                            <Typography>40.758077</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                ml: 'auto',
                                minWidth: '15px',
                                width: '30px',
                                minHeight: '15px',
                                height: '30px',
                            }}
                            onClick={handleClickSetLatState}
                        >
                            {isLatSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isLatSave || (!isLatSave && formik.values.lat !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'lat'}
                                IsDisabled={!isLatSave}
                                placeholder={'위도를 입력하세요'}
                            />
                        </Box>
                    )}
                </Box>
                <Divider sx={{ marginY: '5px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <LanguageIcon />
                        </Box>
                        <Box>
                            <Typography>-73.985480</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                ml: 'auto',
                                minWidth: '15px',
                                width: '30px',
                                minHeight: '15px',
                                height: '30px',
                            }}
                            onClick={handleClickSetLngSate}
                        >
                            {isLngSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isLngSave || (!isLngSave && formik.values.lng !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'lng'}
                                IsDisabled={!isLngSave}
                                placeholder={'경도를 입력하세요'}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
            <Box>
                <Typography>카테고리</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', marginBottom: '16px' }}>
                <Accordion elevation={0} sx={{ padding: 0 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0px' }}>
                        <EvStationIcon /> EV Charging
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box>
                <Box>
                    <Typography>승인 요청 이유</Typography>
                </Box>
                <Divider />
                <TextField
                    sx={{ marginBottom: '16px', marginTop: '8px' }}
                    size={'small'}
                    multiline
                    fullWidth
                    placeholder="승인 요청 이유를 입력하세요"
                    name={'reason'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[name]}
                ></TextField>
            </Box>
            <Box>
                <Box>
                    <Typography>검토자</Typography>
                </Box>
                <Divider />
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
                        name={'reviewer'}
                        placeholder={'검토자를 입력해주세요'}
                    />
                    <Button variant={'contained'} onClick={handleClickGetReviewer}>
                        검색
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
                    {isReviewerSearchClick && (
                        <>
                            <Typography sx={{ marginY: '16px' }}>검색결과가 없습니다</Typography>
                            <UserSearchTable
                                data={dummyData}
                                headers={tableHeader}
                                tableType={GPSS_TABLE_TYPE.reviewer}
                                selectedReviewer={selectedReviewer}
                                setSelectedReviewer={setSelectedReviewer}
                            />
                        </>
                    )}
                </Box>
            </Box>
            <Box>
                <Box>
                    <Typography>승인자</Typography>
                </Box>
                <Divider />
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
                        name={'manager'}
                        placeholder={'결제자를 입력해주세요'}
                    />
                    <Button variant={'contained'} onClick={handleClickGetManager}>
                        검색
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
                    {isManagerSearchClick && (
                        <>
                            <Typography sx={{ marginY: '16px' }}>검색결과가 없습니다</Typography>
                            <UserSearchTable
                                data={dummyData}
                                headers={tableHeader}
                                tableType={GPSS_TABLE_TYPE.manager}
                                selectedManager={selectedManager}
                                setSelectedManager={setSelectedManager}
                            />
                        </>
                    )}
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'end', gap: '6px' }}>
                <Button variant={'contained'}>임시저장</Button>
                <Button variant={'contained'}>수정요청</Button>
                <Button variant={'contained'}>삭제요청</Button>
            </Box>
        </Box>
    )
}

export default MapGpssDetailTab
