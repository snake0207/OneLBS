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
import EvStationIcon from '#/assets/evStationIcon.svg'
import PlaceIcon from '@mui/icons-material/Place'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EditIcon from '@mui/icons-material/Edit'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

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
        <Box sx={{ paddingTop: '20px' }}>
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
                    {(isAddressSave || (!isAddressSave && formik.values.address !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
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
                            onClick={handleClickSetLngSate}
                        >
                            {isLngSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isLngSave || (!isLngSave && formik.values.lon !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'lon'}
                                IsDisabled={!isLngSave}
                                placeholder={t('lon_input', 'gpss')}
                            />
                        </Box>
                    )}
                </Box>
                <Divider sx={{ marginY: '5px' }} />
            </Box>
            <Box>
                <Typography sx={{ fontSize: 20, fontWeight: 600, color: '#00418D' }}>
                    {t('category', 'common')}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginBottom: '16px' }}>
                <Accordion elevation={0} sx={{ padding: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ padding: '0px', fontSize: '18px', fontWeight: 500 }}
                    >
                        <img
                            src={EvStationIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                        EV Charging
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}

export default BasicInfo
