import { useEffect, useState } from 'react'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import t from '#/common/libs/trans.js'
import CloseIcon from '@mui/icons-material/Close.js'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import RadioInput from '#/components/common/Radio/index.jsx'
import MapApprovalSelect from '#/components/common/map/MapApprovalSelect/index.jsx'
import style from '#/components/common/map/MapPoiAdd/style.module.js'

const MapPoiAdd = ({ setIsOpen, selectedPoi }) => {
    useEffect(() => {
        if (selectedPoi) setIsOpen(false)
    }, [selectedPoi])

    const categoryList = [
        { label: 'evCharging', value: 'evCharging' },
        { label: 'fuel', value: 'fuel' },
        { label: 'parking', value: 'parking' },
        { label: 'h2Charging', value: 'h2Charging' },
        { label: 'dealerPoi', value: 'dealerPoi' },
    ]

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
            reason: '',
            reviewer: '',
            approver: '',
            category: '',
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })
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
                        명칭
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
                        주소
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
                        메인 좌표
                    </Typography>
                    <Divider sx={{ marginY: '5px' }} />
                    <Box>
                        <Typography variant={'h6'} sx={{ fontSize: '16px', fontWeight: 600 }}>
                            위도
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
                            경도
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
                        가이드 좌표
                    </Typography>
                    <Divider sx={{ marginY: '5px' }} />
                    <Box>
                        <Typography variant={'h6'} sx={{ fontSize: '16px', fontWeight: 600 }}>
                            위도
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
                            경도
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
                        {t('category', 'common')}
                    </Typography>
                    <Divider sx={{ marginY: '5px' }} />
                </Box>
                <Box>
                    <RadioInput radioList={categoryList} name={'category'} formik={formik} />
                </Box>
                <Box>
                    <Box>
                        <Typography>{t('reason_for_approval', 'gpss')}</Typography>
                    </Box>
                    <Divider />
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
                <MapApprovalSelect
                    formik={formik}
                    selectedApprover={selectedApprover}
                    setSelectedApprover={setSelectedApprover}
                    selectedReviewer={selectedReviewer}
                    setSelectedReviewer={setSelectedReviewer}
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
                        Poi 생성 요청
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
