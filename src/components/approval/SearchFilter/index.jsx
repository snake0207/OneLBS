import { Box, Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import Select from '#/components/common/Select/index.jsx'
import DatePickerInput from '#/components/common/input/DatePickerInput/index.jsx'

const SearchFilter = ({ handleSubmitFilter }) => {
    const formik = useFormik({
        initialValues: {
            tempFilter1: '',
            tempFilter2: 0,
            tempFilter3: 0,
            tempFilter4: '',
            tempFilter5: '',
            tempFilter6: '',
            tempFilter7: null,
            tempFilter8: null,
            tempFilter9: null,
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
        { key: 0, value: 0, label: '전체' },
        { key: 1, value: 1, label: 'NA' },
        { key: 2, value: 2, label: 'EU' },
    ]
    const statusItems = [
        { key: 0, value: 0, label: '전체' },
        { key: 1, value: 1, label: '임시 저장' },
        { key: 2, value: 2, label: '검토 요청' },
        { key: 3, value: 3, label: '검토 완료' },
        { key: 4, value: 4, label: '승인 완료' },
        { key: 5, value: 5, label: '반려' },
    ]

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Button variant={'contained'} onClick={formik.handleSubmit}>
                    검색
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
                                명칭
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
                                국가
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
                                상태
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
                                신청자
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
                                검토자
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
                                승인자
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
                                요청일
                            </TableCell>
                            <TableCell>
                                <DatePickerInput name={'tempFilter7'} formik={formik} />
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                검토일
                            </TableCell>
                            <TableCell>
                                <DatePickerInput name={'tempFilter8'} formik={formik} />
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                            >
                                반려/승인일
                            </TableCell>
                            <TableCell>
                                <DatePickerInput name={'tempFilter9'} formik={formik} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default SearchFilter
