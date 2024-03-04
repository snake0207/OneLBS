import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import t from '#/common/libs/trans.js'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import PointBlueParkingIcon from '#/assets/pointBlueParkingIcon.svg'
import LanguageIcon from '#/assets/languagesIcon.svg'
import LanguageIconDark from '#/assets/languagesIconDark.svg'
import GpsIcon from '#/assets/gpsIcon.svg'
import GpsIconDark from '#/assets/gpsIconDark.svg'
import StstesIcon from '#/assets/ststesIcon.svg'
import StstesIconDark from '#/assets/ststesIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'
import style from './style.module'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'

const jsonSample = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    key6: 'value6',
}
const BasicInfo = ({ formik, poiData, tabSelected, isEditable }) => {
    const [isShowInputs, setIsShowInputs] = useState({
        address: false,
        lat: false,
        lon: false,
        guideLat: false,
        guideLon: false,
        title: false,
    })

    const [isDisabledInputs, setIsDisabledInputs] = useState({
        address: true,
        lat: true,
        lon: true,
        guideLat: true,
        guideLon: true,
        title: true,
    })
    const handleClickInputButton = (name) => {
        setIsShowInputs({ ...isShowInputs, [name]: true })
        setIsDisabledInputs({ ...isDisabledInputs, [name]: !isDisabledInputs[name] })
    }

    const { themeMode } = getLayoutState()

    return (
        <Box>
            {tabSelected === 'info' ? (
                <>
                    <Box>
                        <Box sx={{ display: 'flex', mt: '10px' }}>
                            <Box sx={{ paddingTop: '7px' }}>
                                <img
                                    src={PointBlueParkingIcon}
                                    style={{
                                        verticalAlign: 'middle',
                                        paddingRight: '4px',
                                        width: '18px',
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography variant={'h6'} sx={style.title}>
                                    {poiData.title}
                                </Typography>
                            </Box>
                            {isEditable && (
                                <IconButton
                                    sx={{
                                        ml: 'auto',
                                        minWidth: '15px',
                                        width: '30px',
                                        minHeight: '15px',
                                        height: '30px',
                                    }}
                                    onClick={() => handleClickInputButton('title')}
                                >
                                    {isDisabledInputs['title'] ? <EditIcon /> : <SaveIcon />}
                                </IconButton>
                            )}
                        </Box>
                        {isShowInputs['title'] && (
                            <Box sx={{ height: '40px' }}>
                                <TextInput
                                    formik={formik}
                                    name={'title'}
                                    IsDisabled={isDisabledInputs['title']}
                                    placeholder={t('title_input', 'gpss')}
                                />
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ marginTop: '8px', marginBottom: '16px' }}>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    marginBottom: '24px',
                                }}
                            >
                                <Box sx={{ paddingTop: '5px' }}>
                                    {themeMode === 'light' ? (
                                        <img src={StstesIcon} />
                                    ) : (
                                        <img src={StstesIconDark} />
                                    )}
                                </Box>
                                <Box>
                                    <Typography sx={{ color: 'text.main' }}>
                                        {poiData.address}
                                    </Typography>
                                </Box>
                                {isEditable && (
                                    <IconButton
                                        sx={{
                                            ml: 'auto',
                                            minWidth: '15px',
                                            width: '30px',
                                            minHeight: '15px',
                                            height: '30px',
                                        }}
                                        onClick={() => handleClickInputButton('address')}
                                    >
                                        {isDisabledInputs['address'] ? <EditIcon /> : <SaveIcon />}
                                    </IconButton>
                                )}
                            </Box>
                            {isShowInputs['address'] && (
                                <Box sx={{ height: '40px' }}>
                                    <TextInput
                                        formik={formik}
                                        name={'address'}
                                        IsDisabled={isDisabledInputs['address']}
                                        placeholder={t('address_input', 'gpss')}
                                    />
                                </Box>
                            )}
                        </Box>
                        <Box>
                            <Accordion
                                elevation={0}
                                sx={{ padding: 0, backgroundColor: 'dialog.main' }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        padding: '0px',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: 'text.darkgray',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img
                                            src={GpsIcon}
                                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                        />
                                    ) : (
                                        <img
                                            src={GpsIconDark}
                                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                        />
                                    )}
                                    {t('center_coordinates', 'gpss')}
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '6px',
                                            mb: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            <Box>
                                                <Typography sx={{ color: 'text.main' }}>
                                                    {poiData.position.center.lat}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{
                                                        ml: 'auto',
                                                        minWidth: '15px',
                                                        width: '30px',
                                                        minHeight: '15px',
                                                        height: '30px',
                                                    }}
                                                    onClick={() => handleClickInputButton('lat')}
                                                >
                                                    {isDisabledInputs['lat'] ? (
                                                        <EditIcon />
                                                    ) : (
                                                        <SaveIcon />
                                                    )}
                                                </IconButton>
                                            )}
                                        </Box>
                                        {isShowInputs['lat'] && (
                                            <Box sx={{ height: 'auto' }}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'position.center.lat'}
                                                    IsDisabled={isDisabledInputs['lat']}
                                                    placeholder={t('lat_input', 'gpss')}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '6px',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            <Box>
                                                <Typography sx={{ color: 'text.main' }}>
                                                    {poiData.position.center.lon}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{
                                                        ml: 'auto',
                                                        minWidth: '15px',
                                                        width: '30px',
                                                        minHeight: '15px',
                                                        height: '30px',
                                                    }}
                                                    onClick={() => handleClickInputButton('lon')}
                                                >
                                                    {isDisabledInputs['lon'] ? (
                                                        <EditIcon />
                                                    ) : (
                                                        <SaveIcon />
                                                    )}
                                                </IconButton>
                                            )}
                                        </Box>
                                        {isShowInputs['lon'] && (
                                            <Box sx={{ height: 'auto' }}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'position.center.lon'}
                                                    IsDisabled={isDisabledInputs['lon']}
                                                    placeholder={t('lon_input', 'gpss')}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Divider sx={style.hr} />
                        </Box>
                        <Box>
                            <Accordion
                                elevation={0}
                                sx={{ padding: 0, backgroundColor: 'dialog.main' }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        padding: '0px',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: 'text.darkgray',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img
                                            src={GpsIcon}
                                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                        />
                                    ) : (
                                        <img
                                            src={GpsIconDark}
                                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                        />
                                    )}
                                    {t('guide_coordinates', 'gpss')}
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '6px',
                                            mb: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            <Box>
                                                <Typography sx={{ color: 'text.main' }}>
                                                    {poiData.position.guide.lat}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{
                                                        ml: 'auto',
                                                        minWidth: '15px',
                                                        width: '30px',
                                                        minHeight: '15px',
                                                        height: '30px',
                                                    }}
                                                    onClick={() =>
                                                        handleClickInputButton('guideLat')
                                                    }
                                                >
                                                    {isDisabledInputs['guideLat'] ? (
                                                        <EditIcon />
                                                    ) : (
                                                        <SaveIcon />
                                                    )}
                                                </IconButton>
                                            )}
                                        </Box>
                                        {isShowInputs['guideLat'] && (
                                            <Box sx={{ height: 'auto' }}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'position.guide.lat'}
                                                    IsDisabled={isDisabledInputs['guideLat']}
                                                    placeholder={t('lat_input', 'gpss')}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '6px',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            <Box>
                                                <Typography sx={{ color: 'text.main' }}>
                                                    {poiData.position.guide.lon}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{
                                                        ml: 'auto',
                                                        minWidth: '15px',
                                                        width: '30px',
                                                        minHeight: '15px',
                                                        height: '30px',
                                                    }}
                                                    onClick={() =>
                                                        handleClickInputButton('guideLon')
                                                    }
                                                >
                                                    {isDisabledInputs['guideLon'] ? (
                                                        <EditIcon />
                                                    ) : (
                                                        <SaveIcon />
                                                    )}
                                                </IconButton>
                                            )}
                                        </Box>
                                        {isShowInputs['guideLon'] && (
                                            <Box sx={{ height: 'auto' }}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'position.guide.lon'}
                                                    IsDisabled={isDisabledInputs['guideLon']}
                                                    placeholder={t('lon_input', 'gpss')}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Divider sx={style.hr} />
                        </Box>
                    </Box>
                </>
            ) : (
                <Typography
                    variant={'body1'}
                    sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                >
                    {JSON.stringify(jsonSample, null, 4)}
                </Typography>
            )}
        </Box>
    )
}

export default BasicInfo
