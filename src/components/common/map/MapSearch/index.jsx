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
import { europeanCountries } from '#/contents/contryCode.js'

const languageCodeArr = ['ENG', 'KOR']
const categoryCodeArr = ['ev Charging', 'fuel', 'parking', 'h2 Charging', 'dealerPoi']

const MapSearch = ({ formik, suggestionData }) => {
    const { themeMode } = getLayoutState()
    const [isKeywordDisabled, setIsKeywordDisabled] = useState(true)
    const [keywordOptions, setKeywordOptions] = useState([])
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
    useEffect(() => {
        if (suggestionData) setKeywordOptions([...suggestionData])
    }, [suggestionData])
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
                            options={europeanCountries}
                            getOptionLabel={(option) => option.alpha3}
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
                                    value !== null
                                        ? value.map((it) => it.alpha3)
                                        : formik.initialValues.country,
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
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '6px',
                        }}
                    >
                        <Autocomplete
                            freeSolo
                            options={keywordOptions}
                            onInputChange={formik.handleChange}
                            size="small"
                            getOptionLabel={(option) => option.title}
                            disabled={isKeywordDisabled}
                            fullWidth
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={t('input_keyword', 'common')}
                                    value={formik.values.keyword}
                                    sx={{
                                        width: '100%',
                                        backgroundColor: 'form.main',
                                        borderRadius: '4px',
                                    }}
                                    name={'keyword'}
                                />
                            )}
                        />
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MapSearch
