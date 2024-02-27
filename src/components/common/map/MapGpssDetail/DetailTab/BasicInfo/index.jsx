import { Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save.js'
import t from '#/common/libs/trans.js'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import FormikInput from '#/components/common/input/FormikInput/index.jsx'
import PointBlueIcon from '#/assets/pointBlueIcon.svg'
import LanguageIcon from '#/assets/languagesIcon.svg'
import LanguageIconDark from '#/assets/languagesIconDark.svg'
import GpsIcon from '#/assets/gpsIcon.svg'
import GpsIconDark from '#/assets/gpsIconDark.svg'
import EditIcon from '@mui/icons-material/Edit'

import { getLayoutState } from '#/store/useLayoutStore'
import style from './style.module'

const BasicInfo = ({ formik, poiData }) => {
    console.log('POI DATA >> ', poiData)
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
    const { themeMode } = getLayoutState()
    return (
        <Box>
            <Box>
                <Typography variant={'h6'} sx={style.title}>
                    <img
                        src={PointBlueIcon}
                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                    />
                    {poiData.title}
                </Typography>
            </Box>
            <Box sx={{ marginTop: '8px', marginBottom: '16px' }}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            {themeMode === 'light' ? (
                                <img src={LanguageIcon} />
                            ) : (
                                <img src={LanguageIconDark} />
                            )}
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'text.main' }}>{poiData.address}</Typography>
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
                <Divider sx={style.hr} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            {themeMode === 'light' ? (
                                <img src={GpsIcon} />
                            ) : (
                                <img src={GpsIconDark} />
                            )}
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'text.main' }}>
                                {poiData.position.center.lat}
                            </Typography>
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
                <Divider sx={style.hr} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            {themeMode === 'light' ? (
                                <img src={GpsIcon} />
                            ) : (
                                <img src={GpsIconDark} />
                            )}
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'text.main' }}>
                                {poiData.position.center.lon}
                            </Typography>
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
                <Divider sx={style.hr} />
            </Box>
        </Box>
    )
}

export default BasicInfo
