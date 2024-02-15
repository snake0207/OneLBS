import { Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save.js'
import t from '#/common/libs/trans.js'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import FormikInput from '#/components/common/input/FormikInput/index.jsx'
import PointBlueIcon from '#/assets/pointBlueIcon.svg'
import LanguageIcon from '#/assets/languageIcon.svg'
import GpsIcon from '#/assets/gpsIcon.svg'
import EditIcon from '@mui/icons-material/Edit'

const BasicInfo = ({ formik, poiData }) => {
    // 데이터 수정
    const [isAddressSave, setIsAddressSave] = useState(false)
    const [isLatSave, setIsLatSave] = useState(false)
    const [isLngSave, setIsLngSave] = useState(false)

    const handleClickSetAddressState = () => {
        setIsAddressSave(!isAddressSave)
    }
    const handleClickSetLatState = () => {
        setIsLatSave(!isLatSave)
    }
    const handleClickSetLngSate = () => {
        setIsLngSave(!isLngSave)
    }
    return (
        <Box>
            <Box>
                <Typography variant={'h6'} sx={{ fontSize: '20px', fontWeight: 600 }}>
                    <img
                        src={PointBlueIcon}
                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                    />
                    Times Square
                </Typography>
            </Box>
            <Box sx={{ marginTop: '8px', marginBottom: '16px' }}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <img src={LanguageIcon} />
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
                    {(isAddressSave ||
                        (!isAddressSave &&
                            formik.values.address !== formik.initialValues.address)) && (
                        <Box sx={{ height: '40px' }}>
                            <FormikInput
                                name={'address'}
                                IsDisabled={!isAddressSave}
                                placeholder={t('address_input', 'gpss')}
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <img src={GpsIcon} />
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
                            disabled={!!formik.errors.position?.center?.lat}
                            onClick={handleClickSetLatState}
                        >
                            {isLatSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isLatSave ||
                        (!isLatSave &&
                            parseFloat(formik.values.position.center.lat) !==
                                formik.initialValues.position.center.lat)) && (
                        <Box sx={{ height: 'auto' }}>
                            <FormikInput
                                name={'position.center.lat'}
                                IsDisabled={!isLatSave}
                                placeholder={t('lat_input', 'gpss')}
                            />
                        </Box>
                    )}
                </Box>
                <Divider sx={{ marginY: '5px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <img src={GpsIcon} />
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
                            disabled={!!formik.errors.position?.center?.lon}
                            onClick={handleClickSetLngSate}
                        >
                            {isLngSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isLngSave ||
                        (!isLngSave &&
                            parseFloat(formik.values.position.center.lon) !==
                                formik.initialValues.position.center.lon)) && (
                        <Box sx={{ height: 'auto' }}>
                            <FormikInput
                                name={'position.center.lon'}
                                IsDisabled={!isLngSave}
                                placeholder={t('lon_input', 'gpss')}
                            />
                        </Box>
                    )}
                </Box>
                <Divider sx={{ marginY: '5px' }} />
            </Box>
        </Box>
    )
}

export default BasicInfo
