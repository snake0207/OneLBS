import { Box, Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place.js'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import t from '#/common/libs/trans.js'
import Divider from '@mui/material/Divider'
import LanguageIcon from '@mui/icons-material/Language.js'
import { useState } from 'react'
import FormikInput from '#/components/common/input/FormikInput/index.jsx'

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
                <Typography variant={'h6'}>{poiData.title}</Typography>
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
                            <Typography>{poiData.address}</Typography>
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
                    {isAddressSave && (
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
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <LanguageIcon />
                        </Box>
                        <Box>
                            <Typography>{poiData.position.center.lat}</Typography>
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
                    {isLatSave && (
                        <Box sx={{ height: '40px' }}>
                            <FormikInput
                                formik={formik}
                                name={'position.center.lat'}
                                IsDisabled={!isLatSave}
                                placeholder={t('lat_input', 'gpss')}
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
                            <Typography>{poiData.position.center.lon}</Typography>
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
                    {isLngSave && (
                        <Box sx={{ height: '40px' }}>
                            <FormikInput
                                name={'position.center.lon'}
                                IsDisabled={!isLngSave}
                                placeholder={t('lon_input', 'gpss')}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default BasicInfo
