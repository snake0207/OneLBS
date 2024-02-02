import { Box, Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import Select from '#/components/common/Select/index.jsx'
import DatePickerInput from '#/components/common/input/DatePickerInput/index.jsx'
import t from '#/common/libs/trans.js'

const SearchFilter = ({ handleSubmitFilter }) => {
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
    const regionItems = [
        { key: 0, value: 0, label: t('entire', 'approval') },
        { key: 1, value: 1, label: 'NA' },
        { key: 2, value: 2, label: 'EU' },
    ]
    const statusItems = [
        { key: 0, value: 0, label: t('entire', 'approval') },
        { key: 1, value: 1, label: t('status.temporary', 'approval') },
        { key: 2, value: 2, label: t('status.request', 'approval') },
        { key: 3, value: 3, label: t('status.reviewed', 'approval') },
        { key: 4, value: 4, label: t('status.approved', 'approval') },
        { key: 5, value: 5, label: t('status.rejected', 'approval') },
    ]

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Button variant={'contained'} onClick={formik.handleSubmit}>
                    {t('search', 'approval')}
                </Button>
            </Box>
            <TableContainer>
                <Table
                    size="small"
                    sx={{
                        border: '1px solid #e0e0e0',
                    }}
                >
                    <TableBody>
                        <TableRow>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('name', 'approval')}
                            </TableCell>
                            <TableCell>
                                <TextInput
                                    formik={formik}
                                    name={'tempFilter1'}
                                    placeholder={'명칭을 입력하세요'}
                                />
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('country', 'approval')}
                            </TableCell>
                            <TableCell>
                                <Select
                                    name={'tempFilter2'}
                                    formik={formik}
                                    items={regionItems}
                                    sx={{ width: 200 }}
                                />
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('state', 'approval')}
                            </TableCell>
                            <TableCell>
                                <Select
                                    name={'tempFilter3'}
                                    formik={formik}
                                    items={statusItems}
                                    sx={{ width: 200 }}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('requester', 'approval')}
                            </TableCell>
                            <TableCell>
                                <TextInput
                                    formik={formik}
                                    name={'tempFilter4'}
                                    placeholder={'신청자를 입력하세요'}
                                />
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('reviewer', 'approval')}
                            </TableCell>
                            <TableCell>
                                <TextInput
                                    formik={formik}
                                    name={'tempFilter5'}
                                    placeholder={'검토자를 입력하세요'}
                                />
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('approver', 'approval')}
                            </TableCell>
                            <TableCell>
                                <TextInput
                                    formik={formik}
                                    name={'tempFilter6'}
                                    placeholder={'승인자를 입력하세요'}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('request_date', 'approval')}
                            </TableCell>
                            <TableCell>
                                <Grid container alignItems={'center'} columns={15}>
                                    <Grid md={7}>
                                        <DatePickerInput name={'tempFilter7_1'} formik={formik} />
                                    </Grid>
                                    <Grid md={1} textAlign={'center'}>
                                        -
                                    </Grid>
                                    <Grid md={7}>
                                        <DatePickerInput name={'tempFilter7_2'} formik={formik} />
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('review_date', 'approval')}
                            </TableCell>
                            <TableCell>
                                <Grid container alignItems={'center'} columns={{ md: 15 }}>
                                    <Grid md={7}>
                                        <DatePickerInput name={'tempFilter8_1'} formik={formik} />
                                    </Grid>
                                    <Grid md={1} textAlign={'center'}>
                                        -
                                    </Grid>
                                    <Grid md={7}>
                                        <DatePickerInput name={'tempFilter8_2'} formik={formik} />
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                {t('approval_date', 'approval')}
                            </TableCell>
                            <TableCell>
                                <Grid container alignItems={'center'} columns={{ md: 15 }}>
                                    <Grid md={7}>
                                        <DatePickerInput name={'tempFilter9_1'} formik={formik} />
                                    </Grid>
                                    <Grid md={1} textAlign={'center'}>
                                        -
                                    </Grid>
                                    <Grid md={7}>
                                        <DatePickerInput name={'tempFilter9_2'} formik={formik} />
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default SearchFilter
