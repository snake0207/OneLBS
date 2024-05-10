import { useFormik } from 'formik'
import {
    Box,
    Divider,
    FormGroup,
    Stack,
    Table,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'
import CheckBox from '#/components/common/input/CheckBox'
import TextInput from '#/components/common/input/TextInput'
import { getTimeTypeList, unionGetPlanes, unionGetStatPosMethods } from '#/common/libs/service'
import * as yup from 'yup'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            dateType: 'D',
            startDate: '',
            endDate: '',
            start_time: '00',
            end_time: String(new Date().getHours()),
            serviceCheck: false,
            appIdCheck: false,
            modelCheck: false,
            opTypeCheck: false,
            // posInitCheck: false,
            planeCheck: false,
            posMethodCheck: false,
            respCodeCheck: false,
            service: '',
            appId: '',
            model: '',
            opType: '',
            // posInit: '',
            plane: 'N',
            posMethod: 'N',
            respCode: '',
        },
        // validationSchema: yup.object({
        //     startDate: yup.date().required(`검색 시작날짜를 입력해주세요`),
        //     endDate: yup
        //         .date()
        //         .required(`검색 종료날짜를 입력해주세요`)
        //         .min(yup.ref('startDate'), '종료날짜는 시작날짜 이후여야 합니다.'),
        // }),
        onSubmit: (values) => {
            const startDate = `${values.startDate.split('-').join('')}${values.start_time}`
            const endDate = `${values.endDate.split('-').join('')}${values.end_time}`
            const plane = values.plane === 'N' ? '' : values.plane
            const posMethod = values.posMethod === 'N' ? '' : values.posMethod
            if (onSearch) {
                // API 불필요 field 삭제
                delete values.start_time
                delete values.end_time
                onSearch({ ...values, startDate, endDate, plane, posMethod })
            }
        },
    })

    return (
        <Box sx={style.searchBox} flexDirection={`column`}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Typography>{`시간 구분`}</Typography>
                </Box>
                <Box sx={{ flex: 7 }}>
                    <Table sx={style.tableBox}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '15%' }}>
                                    <Select
                                        name={'dateType'}
                                        formik={formik}
                                        items={getTimeTypeList()}
                                        sx={{
                                            width: '100%',
                                            height: 40,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell style={{ width: '4%' }}></TableCell>
                                <TableCell style={{ width: '8%' }}>{`조회기간`}</TableCell>
                                <TableCell style={{ width: '60%' }}>
                                    <Stack
                                        direction={'row'}
                                        spacing={0.1}
                                        alignItems={'center'}
                                        width="100%"
                                    >
                                        <DatePickerInput name={'startDate'} formik={formik} />
                                        <TimePickerInput name={'start_time'} formik={formik} />
                                        <Typography>~</Typography>
                                        <DatePickerInput name={'endDate'} formik={formik} />
                                        <TimePickerInput name={'end_time'} formik={formik} />
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Box>
                <Box sx={{ flex: 1 }}></Box>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Typography>{`Group By`}</Typography>
                </Box>
                <Box sx={{ flex: 7 }}>
                    <Table sx={style.tableBox}>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={8}>
                                    <Box display={`flex`} justifyContent={`space-between`}>
                                        <CheckBox
                                            checked={formik.values.serviceCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'serviceCheck',
                                                    e.target.checked,
                                                )
                                            }
                                            value={formik.values.serviceCheck}
                                            label={`서비스코드`}
                                        />
                                        <CheckBox
                                            checked={formik.values.appIdCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue('appIdCheck', e.target.checked)
                                            }
                                            value={formik.values.appIdCheck}
                                            label={`AppID`}
                                        />
                                        <CheckBox
                                            checked={formik.values.modelCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue('modelCheck', e.target.checked)
                                            }
                                            value={formik.values.modelCheck}
                                            label={`모델`}
                                        />
                                        <CheckBox
                                            checked={formik.values.opTypeCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'opTypeCheck',
                                                    e.target.checked,
                                                )
                                            }
                                            value={formik.values.opTypeCheck}
                                            label={`OP Type`}
                                        />
                                        {/* <CheckBox
                                            checked={formik.values.posInitCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posInitCheck',
                                                    e.target.checked,
                                                )
                                            }
                                            value={formik.values.posInitCheck}
                                            label={`POS INIT`}
                                        /> */}
                                        <CheckBox
                                            checked={formik.values.planeCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue('planeCheck', e.target.checked)
                                            }
                                            value={formik.values.planeCheck}
                                            label={`Plane`}
                                        />
                                        <CheckBox
                                            checked={formik.values.posMethodCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'posMethodCheck',
                                                    e.target.checked,
                                                )
                                            }
                                            value={formik.values.posMethodCheck}
                                            label={`측위방식`}
                                        />
                                        <CheckBox
                                            checked={formik.values.respCodeCheck}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    'respCodeCheck',
                                                    e.target.checked,
                                                )
                                            }
                                            value={formik.values.respCodeCheck}
                                            label={`응답코드`}
                                        />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Box>
                <Box sx={{ flex: 1 }}></Box>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Typography>{`검색 조건`}</Typography>
                </Box>
                <Box sx={{ flex: 7 }}>
                    <Table sx={style.tableBox}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '10%' }}>{`서비스 코드`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <TextInput name="service" formik={formik} />
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>{`App ID`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <TextInput name="appId" formik={formik} />
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>{`단말 모델`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <TextInput name="model" formik={formik} />
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>{`OP Type`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <TextInput name="opType" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {/* <TableCell style={{ width: '10%' }}>{`Pos INIT`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <TextInput name="posInit" formik={formik} />
                                </TableCell> */}
                                <TableCell style={{ width: '10%' }}>{`Plane`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <Select
                                        name="plane"
                                        items={unionGetPlanes()}
                                        formik={formik}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>{`측위 방식`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <Select
                                        name="posMethod"
                                        items={unionGetStatPosMethods()}
                                        formik={formik}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            fontSize: 14,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>{`응답 코드`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <TextInput name="respCode" formik={formik} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        height: '100px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        pb: 0.5,
                    }}
                >
                    <MuiSubButton
                        disabled={!formik.values.startDate || !formik.values.endDate}
                        name="search"
                        title="검색"
                        onClick={formik.handleSubmit}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default SearchFilter
