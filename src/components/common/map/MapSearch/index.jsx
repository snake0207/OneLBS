import Box from '@mui/material/Box'
import { Autocomplete, Grid, InputAdornment, TextField, Typography } from '@mui/material'
//import SearchIcon from '@mui/icons-material/Search'
import t from '#/common/libs/trans.js'
import SearchIcon from '#/assets/searchIcon.svg'
import SearchIconDark from '#/assets/searchIconLightDark.svg'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

import { getLayoutState } from '#/store/useLayoutStore'
import style from './style.module'
import { useEffect, useState } from 'react'

const countryCodeArr = [
    'ABW',
    'AFG',
    'AGO',
    'AIA',
    'ALA',
    'ALB',
    'AND',
    'ARE',
    'ARG',
    'ARM',
    'ASM',
    'ATA',
    'ATF',
    'ATG',
    'AUS',
    'AUT',
    'AZE',
    'BDI',
    'BEL',
    'BEN',
    'BES',
    'BFA',
    'BGD',
    'BGR',
    'BHR',
    'BHS',
    'BIH',
    'BLM',
    'BLR',
    'BLZ',
    'BMU',
    'BOL',
    'BRA',
    'BRB',
    'BRN',
    'BTN',
    'BVT',
    'BWA',
    'CAF',
    'CAN',
    'CCK',
    'CHE',
    'CHL',
    'CHN',
    'CIV',
    'CMR',
    'COD',
    'COG',
    'COK',
    'COL',
    'COM',
    'CPV',
    'CRI',
    'CUB',
    'CUW',
    'CXR',
    'CYM',
    'CYP',
    'CZE',
    'DEU',
    'DJI',
    'DMA',
    'DNK',
    'DOM',
    'DZA',
    'ECU',
    'EGY',
    'ERI',
    'ESH',
    'ESP',
    'EST',
    'ETH',
    'FIN',
    'FJI',
    'FLK',
    'FRA',
    'FRO',
    'FSM',
    'GAB',
    'GBR',
    'GEO',
    'GGY',
    'GHA',
    'GIB',
    'GIN',
    'GLP',
    'GMB',
    'GNB',
    'GNQ',
    'GRC',
    'GRD',
    'GRL',
    'GTM',
    'GUF',
    'GUM',
    'GUY',
    'HKG',
    'HMD',
    'HND',
    'HRV',
    'HTI',
    'HUN',
    'IDN',
    'IMN',
    'IND',
    'IOT',
    'IRL',
    'IRN',
    'IRQ',
    'ISL',
    'ISR',
    'ITA',
    'JAM',
    'JEY',
    'JOR',
    'JPN',
    'KAZ',
    'KEN',
    'KGZ',
    'KHM',
    'KIR',
    'KNA',
    'KOR',
    'KWT',
    'LAO',
    'LBN',
    'LBR',
    'LBY',
    'LCA',
    'LIE',
    'LKA',
    'LSO',
    'LTU',
    'LUX',
    'LVA',
    'MAC',
    'MAF',
    'MAR',
    'MCO',
    'MDA',
    'MDG',
    'MDV',
    'MEX',
    'MHL',
    'MKD',
    'MLI',
    'MLT',
    'MMR',
    'MNE',
    'MNG',
    'MNP',
    'MOZ',
    'MRT',
    'MSR',
    'MTQ',
    'MUS',
    'MWI',
    'MYS',
    'MYT',
    'NAM',
    'NCL',
    'NER',
    'NFK',
    'NGA',
    'NIC',
    'NIU',
    'NLD',
    'NOR',
    'NPL',
    'NRU',
    'NZL',
    'OMN',
    'PAK',
    'PAN',
    'PCN',
    'PER',
    'PHL',
    'PLW',
    'PNG',
    'POL',
    'PRI',
    'PRK',
    'PRT',
    'PRY',
    'PSE',
    'PYF',
    'QAT',
    'REU',
    'ROU',
    'RUS',
    'RWA',
    'SAU',
    'SDN',
    'SEN',
    'SGP',
    'SGS',
    'SHN',
    'SJM',
    'SLB',
    'SLE',
    'SLV',
    'SMR',
    'SOM',
    'SPM',
    'SRB',
    'SSD',
    'STP',
    'SUR',
    'SVK',
    'SVN',
    'SWE',
    'SWZ',
    'SXM',
    'SYC',
    'SYR',
    'TCA',
    'TCD',
    'TGO',
    'THA',
    'TJK',
    'TKL',
    'TKM',
    'TLS',
    'TON',
    'TTO',
    'TUN',
    'TUR',
    'TUV',
    'TWN',
    'TZA',
    'UGA',
    'UKR',
    'UMI',
    'URY',
    'USA',
    'UZB',
    'VAT',
    'VCT',
    'VEN',
    'VGB',
    'VIR',
    'VNM',
    'VUT',
    'WLF',
    'WSM',
    'YEM',
    'ZAF',
    'ZMB',
    'ZWE',
]
const languageCodeArr = ['ENG', 'KOR']
const categoryCodeArr = ['ev Charging', 'fuel', 'parking', 'h2 Charging', 'dealerPoi']

const MapSearch = ({ formik, suggestionData }) => {
    const { themeMode } = getLayoutState()
    const [isKeywordDisabled, setIsKeywordDisabled] = useState(true)
    useEffect(() => {
        // 국가 위/경도가 모두 입력되면 키워드 입력 가능
        if (
            formik.values.lat.length === 0 ||
            formik.values.lon.length === 0 ||
            formik.values.country.length === 0
        ) {
            setIsKeywordDisabled(true)
            return
        }
        setIsKeywordDisabled(false)
    }, [formik.values])

    useEffect(() => {
        if (formik.values.category.length !== 0) formik.setFieldValue('keyword', '')
    }, [formik.values.category])
    useEffect(() => {
        if (formik.values.keyword.length !== 0) formik.setFieldValue('category', [])
    }, [formik.values.keyword])

    return (
        <Box
            sx={{
                width: '350px',
                maxHeight: '300px',
                overflow: 'auto',
                padding: '16px',
                margin: '10px 10px 6px 10px',
                borderRadius: '8px',
                backgroundColor: 'dialog.main',
                boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                opacity: '95%',
                '@media (max-width:767px)': {
                    margin: '10px 0px 6px 10px',
                    width: 'calc(100% - 15px)',
                },
            }}
        >
            <Box>
                <Grid container spacing={1} sx={style.item}>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography sx={{ fontSize: 15, fontWeight: 500, mt: 1 }}>
                            {t('country', 'common')}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            multiple
                            //disablePortal
                            options={countryCodeArr}
                            size="small"
                            name={'country'}
                            sx={{
                                backgroundColor: 'form.main',
                                borderRadius: '4px',
                                '& .MuiFormControl-root': {
                                    '& .MuiFormHelperText-root': {
                                        backgroundColor: 'dialog.main',
                                    },
                                },
                            }}
                            onChange={(event, value) => {
                                formik.setFieldValue(
                                    'country',
                                    value !== null ? value : formik.initialValues.country,
                                )
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={t('select', 'common')}
                                    name={'country'}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.country && !!formik.errors.country}
                                    sx={{ m: 0 }}
                                    FormHelperTextProps={{
                                        style: {
                                            margin: '0',
                                            paddingLeft: '14px',
                                            paddingTop: '4px',
                                        },
                                    }}
                                    helperText={
                                        formik.touched.country && !!formik.errors.country
                                            ? formik.errors.country
                                            : ''
                                    }
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <KeyboardArrowDownRoundedIcon
                                                    sx={{
                                                        position: 'absolute',
                                                        right: '8px',
                                                        color: 'text.lightblue',
                                                    }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                            {t('lat', 'common')}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            style={{ width: '100%' }}
                            size="small"
                            placeholder={t('lat_input', 'gpss')}
                            name={'lat'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lat}
                            error={formik.touched.lat && !!formik.errors.lat}
                            sx={{
                                input: {
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                },
                            }}
                            helperText={
                                formik.touched.lat && !!formik.errors.lat ? formik.errors.lat : ''
                            }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                            {t('lon', 'common')}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            style={{ width: '100%' }}
                            size="small"
                            placeholder={t('lon_input', 'gpss')}
                            name={'lon'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lon}
                            error={formik.touched.lon && !!formik.errors.lon}
                            sx={{
                                input: {
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                },
                            }}
                            helperText={
                                formik.touched.lon && !!formik.errors.lon ? formik.errors.lon : ''
                            }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                            {t('language', 'common')}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            //disablePortal
                            options={languageCodeArr}
                            size="small"
                            name={'language'}
                            defaultValue={[languageCodeArr[0]]}
                            onChange={(event, value) => {
                                formik.setFieldValue(
                                    'language',
                                    value !== null ? value : formik.initialValues.language,
                                )
                            }}
                            value={formik.values.language}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={t('select', 'common')}
                                    name={'language'}
                                    sx={{
                                        backgroundColor: 'form.main',
                                        borderRadius: '4px',
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <KeyboardArrowDownRoundedIcon
                                                    sx={{
                                                        position: 'absolute',
                                                        right: '8px',
                                                        color: 'text.lightblue',
                                                    }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                            {t('category', 'common')}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            multiple
                            //disablePortal
                            options={categoryCodeArr}
                            size="small"
                            name={'category'}
                            onChange={(event, value) => {
                                formik.setFieldValue(
                                    'category',
                                    value !== null ? value : formik.initialValues.category,
                                )
                            }}
                            value={formik.values.category}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={t('select', 'common')}
                                    name={'category'}
                                    sx={{
                                        backgroundColor: 'form.main',
                                        borderRadius: '4px',
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <KeyboardArrowDownRoundedIcon
                                                    sx={{
                                                        position: 'absolute',
                                                        right: '8px',
                                                        color: 'text.lightblue',
                                                    }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder={t('input_keyword', 'common')}
                            size="small"
                            sx={{
                                width: '100%',
                                backgroundColor: 'form.main',
                                borderRadius: '4px',
                            }}
                            name={'keyword'}
                            onChange={formik.handleChange}
                            value={formik.values.keyword}
                            disabled={isKeywordDisabled}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {themeMode === 'light' ? (
                                            <img
                                                src={SearchIcon}
                                                onClick={formik.handleSubmit}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        ) : (
                                            <img
                                                src={SearchIconDark}
                                                onClick={formik.handleSubmit}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MapSearch
