import { useEffect, useState } from 'react'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import t from '#/common/libs/trans.js'
import CloseIcon from '@mui/icons-material/Close.js'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import ApprovalSelect from '#/components/poiDetail/ApprovalSelect/index.jsx'
import style from '#/components/common/map/MapPoiAdd/style.module.js'
import Select from '#/components/common/Select/index.jsx'

const brandSelect = [
    { key: 0, value: 'ALL', label: 'ALL' },
    { key: 1, value: 'H', label: 'H' },
    { key: 2, value: 'K', label: 'K' },
    { key: 3, value: 'Genesis', label: 'Genesis' },
]
const dealerSelect = [
    { key: 0, value: '7538', label: 'Auto Dealership' },
    { key: 1, value: '5511', label: 'Auto Service & Maintenance' },
]
const MapPoiAdd = ({ setIsOpen, selectedPoi }) => {
    const [poiData, setPoiData] = useState({
        dealerType: 'Auto Dealership',
        brand: 'ALL',
    })
    useEffect(() => {
        if (selectedPoi) setIsOpen(false)
    }, [selectedPoi])

    // 검토자 승인자
    const [selectedReviewer, setSelectedReviewer] = useState(null)
    const [selectedApprover, setSelectedApprover] = useState(null)

    const formik = useFormik({
        initialValues: {
            title: '',
            address: '',
            position: {
                center: {
                    lat: '',
                    lon: '',
                },
                guide: {
                    lat: '',
                    lon: '',
                },
            },
            dealerType: '7538',
            brand: 'ALL',
            reason: '',
            reviewer: '',
            approver: '',
            category: '',
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })

    useEffect(() => {
        setPoiData({
            ...poiData,
            dealerType:
                formik.values.dealerType === '7438'
                    ? 'Auto Dealership'
                    : 'Auto Service & Maintenance',
        })
    }, [formik.values.dealerType])
    useEffect(() => {
        setPoiData({ ...poiData, brand: formik.values.brand })
    }, [formik.values.brand])

    return (
        <Box sx={{ display: 'flex', margin: '10px' }}>
            <Box
                sx={{
                    width: '350px',
                    padding: '16px',
                    maxHeight: '800px',
                    overflow: 'auto',
                    background: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                }}
            >
                <Box>
                    <Typography variant={'h6'} sx={{ fontSize: '20px', fontWeight: 600 }}>
                        {t('title', 'approval')}
                    </Typography>
                    <Box sx={{ height: '40px' }}>
                        <TextInput
                            formik={formik}
                            name={'title'}
                            placeholder={t('title_input', 'gpss')}
                        />
                    </Box>
                </Box>
                <Box>
                    <Typography variant={'h6'} sx={{ fontSize: '20px', fontWeight: 600 }}>
                        {t('address', 'approval')}
                    </Typography>
                    <Box sx={{ height: '40px' }}>
                        <TextInput
                            formik={formik}
                            name={'address'}
                            placeholder={t('address_input', 'gpss')}
                        />
                    </Box>
                </Box>
                <Box>
                    <Typography variant={'h6'} sx={{ fontSize: '20px', fontWeight: 600 }}>
                        {t('center_coordinates', 'gpss')}
                    </Typography>
                    <Divider sx={{ marginY: '5px' }} />
                    <Box>
                        <Typography variant={'h6'} sx={{ fontSize: '16px', fontWeight: 600 }}>
                            {t('lat', 'approval')}
                        </Typography>
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'position.center.lat'}
                                placeholder={t('lat_input', 'gpss')}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant={'h6'} sx={{ fontSize: '16px', fontWeight: 600 }}>
                            {t('lon', 'approval')}
                        </Typography>
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'position.center.lon'}
                                placeholder={t('lon_input', 'gpss')}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography variant={'h6'} sx={{ fontSize: '20px', fontWeight: 600 }}>
                        {t('guide_coordinates', 'gpss')}
                    </Typography>
                    <Divider sx={{ marginY: '5px' }} />
                    <Box>
                        <Typography variant={'h6'} sx={{ fontSize: '16px', fontWeight: 600 }}>
                            {t('lat', 'approval')}
                        </Typography>
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'position.guide.lat'}
                                placeholder={t('lat_input', 'gpss')}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant={'h6'} sx={{ fontSize: '16px', fontWeight: 600 }}>
                            {t('lon', 'approval')}
                        </Typography>
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'position.guide.lon'}
                                placeholder={t('lon_input', 'gpss')}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: 20, fontWeight: 600, color: '#00418D' }}>
                        Dealer Poi
                    </Typography>
                    <Divider sx={{ marginY: '5px' }} />
                </Box>
                <Box>
                    <Typography>{poiData.dealerType}</Typography>
                    <Select formik={formik} name={'dealerType'} items={dealerSelect} />
                    <Typography>{poiData.brand}</Typography>
                    <Select formik={formik} name={'brand'} items={brandSelect} />
                </Box>
                <Box>
                    <Box>
                        <Typography>{t('reason_for_approval', 'gpss')}</Typography>
                    </Box>
                    <Divider
                        sx={{
                            borderBottom: '1px solid',
                            borderBottomColor: 'border.lightgray',
                        }}
                    />
                    <TextField
                        sx={{
                            marginBottom: '16px',
                            marginTop: '8px',
                            backgroundColor: 'form.main',
                            borderRadius: '4px',
                        }}
                        size={'small'}
                        multiline
                        fullWidth
                        placeholder={t('reason_for_approval_input', 'gpss')}
                        name={'reason'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[name]}
                    ></TextField>
                </Box>
                {/* 검토자 승인자 */}
                <ApprovalSelect
                    formik={formik}
                    reviewerName={'reviewer'}
                    approverName={'approver'}
                    selectedApprover={selectedApprover}
                    setSelectedApprover={setSelectedApprover}
                    selectedReviewer={selectedReviewer}
                    setSelectedReviewer={setSelectedReviewer}
                    isReviewerShow={true}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '2px',
                    }}
                >
                    <Button
                        variant={'contained'}
                        sx={style.blueButton}
                        onClick={formik.handleSubmit}
                    >
                        {t('create_request', 'gpss')}
                    </Button>
                </Box>
            </Box>
            <IconButton
                variant={'contained'}
                sx={{
                    minWidth: '22px',
                    minHeight: '22px',
                    width: '35px',
                    height: '35px',
                }}
                onClick={() => setIsOpen(false)}
            >
                <CloseIcon sx={{ color: 'background.close' }} />
            </IconButton>
        </Box>
    )
}

export default MapPoiAdd
