import Box from '@mui/material/Box'
import { Autocomplete, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useFormik } from 'formik'
import { mapSearchSchema } from '#/contents/validationSchema.js'
import t from '#/common/libs/trans.js'
import { usePopupActions } from '#/store/usePopupStore.js'

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

const MapSearch = () => {
    const popupAction = usePopupActions()
    const formik = useFormik({
        initialValues: {
            country: '',
            lat: '',
            lng: '',
            category: [],
            searchValue: '',
            language: 'ENG',
        },
        validationSchema: mapSearchSchema,
        onSubmit: (form) => {
            console.log(form)
            if (form.searchValue === '') {
                popupAction.showPopup('alert', t('input_keyword', 'common'))
                return
            }
        },
    })
    return (
        <Box
            sx={{
                width: '350px',
                padding: '16px',
                margin: '10px',
                borderRadius: '8px',
                border: '1px solid #D1D1D1',
                background: '#ffffff',
            }}
        >
            <Box>
                <Grid container spacing={1}>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>{t('country', 'common')}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            disablePortal
                            options={countryCodeArr}
                            size="small"
                            name={'country'}
                            onChange={(event, value) => {
                                formik.setFieldValue(
                                    'country',
                                    value !== null ? value : formik.initialValues.country,
                                )
                                console.log(formik)
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={t('select', 'common')}
                                    name={'country'}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.country && !!formik.errors.country}
                                    helperText={
                                        formik.touched.country && !!formik.errors.country
                                            ? formik.errors.country
                                            : ''
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>{t('lat', 'common')}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            sx={{ width: '100%' }}
                            size="small"
                            placeholder={t('lat_input', 'gpss')}
                            name={'lat'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lat}
                            error={formik.touched.lat && !!formik.errors.lat}
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
                        <Typography>{t('lng', 'common')}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            sx={{ width: '100%' }}
                            size="small"
                            placeholder={t('lng_input', 'gpss')}
                            name={'lng'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lng}
                            error={formik.touched.lng && !!formik.errors.lng}
                            helperText={
                                formik.touched.lng && !!formik.errors.lng ? formik.errors.lng : ''
                            }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>{t('language', 'common')}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            disablePortal
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
                                />
                            )}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>{t('category', 'common')}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            multiple
                            disablePortal
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
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder={t('input_keyword', 'common')}
                            size="small"
                            sx={{ width: '100%' }}
                            name={'searchValue'}
                            onChange={formik.handleChange}
                            value={formik.values.searchValue}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon
                                            onClick={formik.handleSubmit}
                                            sx={{ cursor: 'pointer' }}
                                        />
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
