import Box from '@mui/material/Box'
import { Autocomplete, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useFormik } from 'formik'

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

const categoryCodeArr = ['ev Charging', 'fuel', 'parking', 'h2 Charging', 'dealerPoi']

const MapSearch = () => {
    const formik = useFormik({
        initialValues: {
            country: null,
            lat: '',
            lng: '',
            category: null,
            searchValue: '',
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })
    return (
        <Box
            sx={{
                width: '350px',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #D1D1D1',
            }}
        >
            <Box>
                <Grid container spacing={1}>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>국가</Typography>
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
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    color={'info'}
                                    placeholder={'선택'}
                                    name={'country'}
                                />
                            )}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>위도</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            sx={{ width: '100%' }}
                            size="small"
                            color={'info'}
                            placeholder={'위도를 입력해주세요'}
                            name={'lat'}
                            onChange={formik.handleChange}
                            value={formik.values.lat}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>경도</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            sx={{ width: '100%' }}
                            size="small"
                            color={'info'}
                            placeholder={'경도를 입력해주세요'}
                            name={'lng'}
                            onChange={formik.handleChange}
                            value={formik.values.lng}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                    >
                        <Typography>카테고리</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
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
                                    color={'info'}
                                    placeholder={'선택'}
                                    name={'category'}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            color={'info'}
                            placeholder={'검색어를 입력해주세요'}
                            size="small"
                            sx={{ width: '100%' }}
                            name={'searchValue'}
                            onChange={formik.handleChange}
                            value={formik.values.searchValue}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon onClick={formik.handleSubmit} />
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
