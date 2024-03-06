import { Button, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import Select from '#/components/common/Select/index.jsx'
import DatePickerInput from '#/components/common/input/DatePickerInput/index.jsx'
import t from '#/common/libs/trans.js'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import ResetIcon from '#/assets/resetIcon.svg'
import FilterIcon from '#/assets/filterIcon.svg'

import style from './style.module'

const SearchFilter = ({ type, handleSubmitFilter, isMobile }) => {
    const formik = useFormik({
        initialValues: {
            tempFilter1: '',
            tempFilter2: 0,
            tempFilter3: 0,
            tempFilter4: '',
            tempFilter5: '',
            tempFilter6: '',
            tempFilter7_1: null,
            tempFilter7_2: null,
            tempFilter8_1: null,
            tempFilter8_2: null,
            tempFilter9_1: null,
            tempFilter9_2: null,
        },
        validationSchema: yup.object({
            tempFilter1: yup.string().max(20, '20자 내외로 입력해주세요'),
            tempFilter4: yup
                .string()
                .matches(/^[가-힣a-zA-Z0-9]+$/, '한글, 영문, 숫자만 입력해주세요')
                .max(20, '20자 내외로 입력해주세요'),
            tempFilter5: yup
                .string()
                .matches(/^[가-힣a-zA-Z0-9]+$/, '한글, 영문, 숫자만 입력해주세요')
                .max(20, '20자 내외로 입력해주세요'),
            tempFilter6: yup
                .string()
                .matches(/^[가-힣a-zA-Z0-9]+$/, '한글, 영문, 숫자만 입력해주세요')
                .max(20, '20자 내외로 입력해주세요'),
        }),
        onSubmit: (form) => {
            // 부모 컴포넌트로 전달
            handleSubmitFilter(form)
        },
    })
    const regionSelectItems = [
        { key: 0, value: 0, label: t('entire', 'approval') },
        { key: 1, value: 1, label: 'NA' },
        { key: 2, value: 2, label: 'EU' },
    ]
    const statusSelectItems = () => {
        const base = [
            { key: 3, value: 3, label: t('status.reviewed', 'approval') },
            { key: 4, value: 4, label: t('status.approved', 'approval') },
            { key: 5, value: 5, label: t('status.rejected', 'approval') },
        ]
        switch (type) {
            case 'reviewer':
                return [
                    { key: 0, value: 0, label: t('entire', 'approval') },
                    { key: 2, value: 2, label: t('status.request', 'approval') },
                    ...base,
                ]
            case 'approver':
                return [{ key: 0, value: 0, label: t('entire', 'approval') }, ...base]
            default:
                return [
                    { key: 0, value: 0, label: t('entire', 'approval') },
                    { key: 1, value: 1, label: t('status.temporary', 'approval') },
                    { key: 2, value: 2, label: t('status.request', 'approval') },
                    ...base,
                ]
        }
    }
    const [isFilterShow, setIsFilterShow] = useState(true)

    return (
        <Stack
            direction={'row'}
            alignItems={'flex-end'}
            sx={{ flexDirection: isMobile && 'column-reverse' }}
        >
            {isFilterShow && (
                <Grid container sx={style.searchBox}>
                    <Grid md={4} xs={12} container alignItems={'center'}>
                        <Grid xs={3} md={3} sx={style.labelText}>
                            {t('title', 'approval')}
                        </Grid>
                        <Grid xs={9} md={8}>
                            <TextInput
                                formik={formik}
                                name={'tempFilter1'}
                                placeholder={t('valid.title', 'approval')}
                            />
                        </Grid>
                    </Grid>
                    <Grid md={4} xs={12} container alignItems={'center'}>
                        <Grid xs={3} md={3} sx={style.labelText}>
                            {t('country', 'approval')}
                        </Grid>
                        <Grid xs={9} md={8}>
                            <Select
                                name={'tempFilter2'}
                                formik={formik}
                                items={regionSelectItems}
                                sx={style.select}
                            />
                        </Grid>
                    </Grid>
                    <Grid md={4} xs={12} container alignItems={'center'}>
                        <Grid xs={3} md={3} sx={style.labelText}>
                            {t('state', 'approval')}
                        </Grid>
                        <Grid xs={9} md={8}>
                            <Select
                                name={'tempFilter3'}
                                formik={formik}
                                items={statusSelectItems()}
                                sx={style.select}
                            />
                        </Grid>
                    </Grid>
                    {type !== 'requester' && (
                        <Grid md={4} xs={12} container alignItems={'center'}>
                            <Grid xs={3} md={3} sx={style.labelText}>
                                {t('requester', 'approval')}
                            </Grid>
                            <Grid xs={9} md={8}>
                                <TextInput
                                    formik={formik}
                                    name={'tempFilter4'}
                                    placeholder={t('valid.requester', 'approval')}
                                />
                            </Grid>
                        </Grid>
                    )}
                    {type !== 'reviewer' && (
                        <Grid md={4} xs={12} container alignItems={'center'}>
                            <Grid xs={3} md={3} sx={style.labelText}>
                                {t('reviewer', 'approval')}
                            </Grid>
                            <Grid xs={9} md={8}>
                                <TextInput
                                    formik={formik}
                                    name={'tempFilter5'}
                                    placeholder={t('valid.reviewer', 'approval')}
                                />
                            </Grid>
                        </Grid>
                    )}
                    {type !== 'approver' && (
                        <Grid md={4} xs={12} container alignItems={'center'}>
                            <Grid xs={3} md={3} sx={style.labelText}>
                                {t('approver', 'approval')}
                            </Grid>
                            <Grid xs={9} md={8}>
                                <TextInput
                                    formik={formik}
                                    name={'tempFilter6'}
                                    placeholder={t('valid.approver', 'approval')}
                                />
                            </Grid>
                        </Grid>
                    )}
                    <Grid md={4} xs={12} container alignItems={'center'} sx={style.mobLine}>
                        <Grid xs={3} md={3} sx={style.labelText}>
                            {t('request_date', 'approval')}
                        </Grid>
                        <Grid xs={9} md={8}>
                            <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                                <DatePickerInput name={'tempFilter7_1'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'tempFilter7_2'} formik={formik} />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid md={4} xs={12} container alignItems={'center'} sx={style.mobLine}>
                        <Grid xs={3} md={3} sx={style.labelText}>
                            {t('review_date', 'approval')}
                        </Grid>
                        <Grid xs={9} md={8}>
                            <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                                <DatePickerInput name={'tempFilter8_1'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'tempFilter8_2'} formik={formik} />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid md={4} xs={12} container alignItems={'center'} sx={style.mobLine}>
                        <Grid xs={3} md={3} sx={style.labelText}>
                            {t('approval_date', 'approval')}
                        </Grid>
                        <Grid xs={9} md={8}>
                            <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                                <DatePickerInput name={'tempFilter9_1'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'tempFilter9_2'} formik={formik} />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            <Stack
                direction={'row'}
                sx={{
                    m: '0 20px 20px 0',
                    '@media (max-width:1024px)': {
                        m: '0 0 20px 0',
                    },
                }}
            >
                {isMobile && (
                    <Button onClick={() => setIsFilterShow(!isFilterShow)} sx={style.filter}>
                        <img src={FilterIcon} />
                    </Button>
                )}
                {/* TODO: 새로고침 클릭 시 액션 정의 필요 (인풋클리어 / 인풋클리어 + 리스트초기화) */}
                <Button variant={'contained'} onClick={formik.resetForm} sx={style.ResetButton}>
                    <img src={ResetIcon} />
                </Button>
                <Button variant={'contained'} onClick={formik.handleSubmit} sx={style.searchButton}>
                    {t('search', 'approval')}
                </Button>
            </Stack>
        </Stack>
    )
}

export default SearchFilter
