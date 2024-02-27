import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import t from '#/common/libs/trans.js'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import PointBlueIcon from '#/assets/pointBlueIcon.svg'
import LanguageIcon from '#/assets/languagesIcon.svg'
import LanguageIconDark from '#/assets/languagesIconDark.svg'
import GpsIcon from '#/assets/gpsIcon.svg'
import GpsIconDark from '#/assets/gpsIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'
import style from './style.module'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import Button from '@mui/material/Button'

const jsonSample = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    key6: 'value6',
}
const BasicInfo = ({ formik, poiData, tabSelected }) => {
    const [isShowInputs, setIsShowInputs] = useState({
        address: false,
        lat: false,
        lng: false,
    })

    const [isDisabledInputs, setIsDisabledInputs] = useState({
        address: true,
        lat: true,
        lng: true,
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
                                    <Typography sx={{ color: 'text.main' }}>
                                        {poiData.address}
                                    </Typography>
                                </Box>
                                <Button
                                    variant={'contained'}
                                    sx={{ ml: 'auto' }}
                                    onClick={() => handleClickInputButton('address')}
                                >
                                    {isDisabledInputs['address'] ? '수정' : '저장'}
                                </Button>
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
                        <Divider sx={style.hr} />
                        <Box sx={{ marginBottom: '16px' }}>
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
                                    메인 좌표
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    {/* 이용 시간 */}
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
                                            <Button
                                                sx={{ ml: 'auto' }}
                                                variant={'contained'}
                                                disabled={!!formik.errors.position?.center?.lat}
                                                onClick={() => handleClickInputButton('lat')}
                                            >
                                                {isDisabledInputs['lat'] ? '수정' : '저장'}
                                            </Button>
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
                                            <Button
                                                variant={'contained'}
                                                sx={{ ml: 'auto' }}
                                                disabled={!!formik.errors.position?.center?.lon}
                                                onClick={() => handleClickInputButton('lng')}
                                            >
                                                {isDisabledInputs['lng'] ? '수정' : '저장'}
                                            </Button>
                                        </Box>
                                        {isShowInputs['lng'] && (
                                            <Box sx={{ height: 'auto' }}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'position.center.lon'}
                                                    IsDisabled={isDisabledInputs['lng']}
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
