import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Icon } from '@mui/material'
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
import useLayoutStore from '#/store/useLayoutStore.js'
import style from './style.module.js'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import IconButton from '@mui/material/IconButton'

import EditIcon from '#/assets/editIcon.svg'
import EditIconDark from '#/assets/editIconDark.svg'
import SaveIcon from '#/assets/saveIcon.svg'
import SaveIconDark from '#/assets/saveIconDark.svg'

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

    const { themeMode } = useLayoutStore()

    return (
        <Box>
            {tabSelected === 'info' ? (
                <>
                    <Box>
                        <Box sx={{ display: 'flex' }}>
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
                                    sx={{ ml: 'auto', p: '0' }}
                                    onClick={() => handleClickInputButton('title')}
                                >
                                    {isDisabledInputs['title'] ? (
                                        <Icon sx={style.edit}>
                                            {themeMode === 'light' ? (
                                                <img src={EditIcon} width={14} height={14} />
                                            ) : (
                                                <img src={EditIconDark} width={14} height={14} />
                                            )}
                                        </Icon>
                                    ) : (
                                        <Icon sx={style.save}>
                                            {themeMode === 'light' ? (
                                                <img src={SaveIcon} width={14} height={14} />
                                            ) : (
                                                <img src={SaveIconDark} width={14} height={14} />
                                            )}
                                        </Icon>
                                    )}
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
                    <Box sx={{ marginTop: '8px', marginBottom: '0px' }}>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    marginBottom: '4px',
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
                                        sx={{ ml: 'auto', p: '0' }}
                                        onClick={() => handleClickInputButton('address')}
                                    >
                                        {isDisabledInputs['address'] ? (
                                            <Icon sx={style.edit}>
                                                {themeMode === 'light' ? (
                                                    <img src={EditIcon} width={14} height={14} />
                                                ) : (
                                                    <img
                                                        src={EditIconDark}
                                                        width={14}
                                                        height={14}
                                                    />
                                                )}
                                            </Icon>
                                        ) : (
                                            <Icon sx={style.save}>
                                                {themeMode === 'light' ? (
                                                    <img src={SaveIcon} width={14} height={14} />
                                                ) : (
                                                    <img
                                                        src={SaveIconDark}
                                                        width={14}
                                                        height={14}
                                                    />
                                                )}
                                            </Icon>
                                        )}
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
                                sx={{
                                    padding: 0,
                                    backgroundColor: 'dialog.main',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        padding: '0px',
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: 'text.darkgray',
                                        '& .MuiAccordionSummary-content': {
                                            margin: '0',
                                        },
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
                                            mb: '8px',
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
                                                <Typography sx={{ color: 'text.main', ml: '24px' }}>
                                                    {poiData.position.center.lat}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{ ml: 'auto', p: '0' }}
                                                    onClick={() => handleClickInputButton('lat')}
                                                >
                                                    {isDisabledInputs['lat'] ? (
                                                        <Icon sx={style.edit}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={EditIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={EditIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
                                                    ) : (
                                                        <Icon sx={style.save}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={SaveIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={SaveIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
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
                                            mb: '12px',
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
                                                <Typography
                                                    sx={{
                                                        color: 'text.main',
                                                        ml: '24px',
                                                    }}
                                                >
                                                    {poiData.position.center.lon}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{ ml: 'auto', p: '0' }}
                                                    onClick={() => handleClickInputButton('lon')}
                                                >
                                                    {isDisabledInputs['lon'] ? (
                                                        <Icon sx={style.edit}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={EditIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={EditIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
                                                    ) : (
                                                        <Icon sx={style.save}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={SaveIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={SaveIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
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
                                sx={{
                                    padding: 0,
                                    backgroundColor: 'dialog.main',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        padding: '0px',
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: 'text.darkgray',
                                        '& .MuiAccordionSummary-content': {
                                            margin: '0',
                                        },
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
                                            mb: '8px',
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
                                                <Typography sx={{ color: 'text.main', ml: '24px' }}>
                                                    {poiData.position.guide.lat}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{ ml: 'auto', p: '0' }}
                                                    onClick={() =>
                                                        handleClickInputButton('guideLat')
                                                    }
                                                >
                                                    {isDisabledInputs['guideLat'] ? (
                                                        <Icon sx={style.edit}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={EditIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={EditIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
                                                    ) : (
                                                        <Icon sx={style.save}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={SaveIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={SaveIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
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
                                            mb: '12px',
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
                                                <Typography sx={{ color: 'text.main', ml: '24px' }}>
                                                    {poiData.position.guide.lon}
                                                </Typography>
                                            </Box>
                                            {isEditable && (
                                                <IconButton
                                                    sx={{ ml: 'auto', p: '0' }}
                                                    onClick={() =>
                                                        handleClickInputButton('guideLon')
                                                    }
                                                >
                                                    {isDisabledInputs['guideLon'] ? (
                                                        <Icon sx={style.edit}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={EditIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={EditIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
                                                    ) : (
                                                        <Icon sx={style.save}>
                                                            {themeMode === 'light' ? (
                                                                <img
                                                                    src={SaveIcon}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={SaveIconDark}
                                                                    width={14}
                                                                    height={14}
                                                                />
                                                            )}
                                                        </Icon>
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
