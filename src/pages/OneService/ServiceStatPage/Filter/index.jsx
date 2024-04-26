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
import { getPlanes, getStatPosMethods, getTimeTypeList } from '#/common/libs/service'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            dateType: 'D',
            startDate: '',
            endDate: '',
            start_time: '00',
            end_time: '00',
            groupBy: {
                service: '',
                appId: '',
                model: '',
                opType: '',
                posInit: '',
                plane: '',
                posMethod: '',
                respCode: '',
            },
            service: '',
            appId: '',
            model: '',
            opType: '',
            posInit: '',
            plane: 'CP',
            posMethod: 'CELL',
            respCode: '',
        },
        onSubmit: (values) => {
            const startDate = `${values.startDate.split('-').join('')}${values.start_time}`
            const endDate = `${values.endDate.split('-').join('')}${values.end_time}`
            if (onSearch) onSearch({ ...values, startDate, endDate })
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
                <Box sx={{ flex: 8 }}>
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
                <Box sx={{ flex: 8 }}>
                    <Table>
                        <TableHead>
                            <TableCell sx={style.cellInput} colSpan={8}>
                                <Box display={`flex`} justifyContent={`space-between`}>
                                    <CheckBox
                                        checked={
                                            formik.values.groupBy.service === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.service',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.service}
                                        label={`서비스코드`}
                                    />
                                    <CheckBox
                                        checked={formik.values.groupBy.appId === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.appId',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.appId}
                                        label={`AppID`}
                                    />
                                    <CheckBox
                                        checked={formik.values.groupBy.model === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.model',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.model}
                                        label={`모델`}
                                    />
                                    <CheckBox
                                        checked={
                                            formik.values.groupBy.opType === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.opType',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.opType}
                                        label={`OP Type`}
                                    />
                                    <CheckBox
                                        checked={
                                            formik.values.groupBy.posInit === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.posInit',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.posInit}
                                        label={`POS INIT`}
                                    />
                                    <CheckBox
                                        checked={formik.values.groupBy.plane === 'Y' ? true : false}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.plane',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.plane}
                                        label={`Plane`}
                                    />
                                    <CheckBox
                                        checked={
                                            formik.values.groupBy.posMethod === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.posMethod',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.posMethod}
                                        label={`측위방식`}
                                    />
                                    <CheckBox
                                        checked={
                                            formik.values.groupBy.respCode === 'Y' ? true : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                'groupBy.respCode',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }
                                        value={formik.values.groupBy.respCode}
                                        label={`응답코드`}
                                    />
                                </Box>
                            </TableCell>
                        </TableHead>
                    </Table>
                </Box>
                <Box sx={{ flex: 1 }}></Box>
            </Box>
            <Divider />
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
                <Box sx={{ flex: 8 }}>
                    <Table>
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
                                <TableCell style={{ width: '10%' }}>{`Pos INIT`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <TextInput name="posInit" formik={formik} />
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>{`Plane`}</TableCell>
                                <TableCell style={{ width: '15%' }}>
                                    <Select
                                        name="plane"
                                        items={getPlanes()}
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
                                        items={getStatPosMethods()}
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
                <Box sx={{ flex: 1, textAlign: 'right' }}>
                    <MuiSubButton name="search" title="검색" onClick={formik.handleSubmit} />
                </Box>
            </Box>
            {/* <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`시간 구분`}</TableCell>
                        <TableCell sx={style.cellInput}>
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
                        <TableCell sx={style.cellTitle}>{`조회기간`}</TableCell>
                        <TableCell sx={style.cellInput} colSpan={6}>
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

                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`Group By`}</TableCell>
                        <TableCell sx={style.cellInput} colSpan={8}>
                            <Stack direction={`row`} spacing={4}>
                                <CheckBox
                                    checked={formik.values.groupBy.service === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.service',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.service}
                                    label={`서비스코드`}
                                />
                                <CheckBox
                                    checked={formik.values.groupBy.appId === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.appId',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.appId}
                                    label={`AppID`}
                                />
                                <CheckBox
                                    checked={formik.values.groupBy.model === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.model',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.model}
                                    label={`모델`}
                                />
                                <CheckBox
                                    checked={formik.values.groupBy.opType === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.opType',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.opType}
                                    label={`OP Type`}
                                />
                                <CheckBox
                                    checked={formik.values.groupBy.posInit === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.posInit',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.posInit}
                                    label={`POS INIT`}
                                />
                                <CheckBox
                                    checked={formik.values.groupBy.plane === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.plane',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.plane}
                                    label={`Plane`}
                                />
                                <CheckBox
                                    checked={formik.values.groupBy.posMethod === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.posMethod',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.posMethod}
                                    label={`측위방식`}
                                />
                                <CheckBox
                                    checked={formik.values.groupBy.respCode === 'Y' ? true : false}
                                    onChange={(e) =>
                                        formik.setFieldValue(
                                            'groupBy.respCode',
                                            e.target.value === 'Y' ? 'N' : 'Y',
                                        )
                                    }
                                    value={formik.values.groupBy.respCode}
                                    label={`응답코드`}
                                />
                            </Stack>
                        </TableCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableCell sx={style.cellTitle} rowSpan={2}>{`검색조건`}</TableCell>
                        <TableCell sx={style.cellTitle}>{`서비스 코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="service" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`App ID`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="appId" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`단말 모델`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="model" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`OP Type`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="opType" formik={formik} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`Pos INIT`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="posInit" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`Plane`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <Select
                                name="plane"
                                items={getPlanes()}
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
                        <TableCell sx={style.cellTitle}>{`측위 방식`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <Select
                                name="posMethod"
                                items={getStatPosMethods()}
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
                        <TableCell sx={style.cellTitle}>{`응답 코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="respCode" formik={formik} />
                        </TableCell>
                        <TableCell align="right">
                            <MuiSubButton
                                name="search"
                                title="검색"
                                onClick={formik.handleSubmit}
                            />
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table> */}
        </Box>
    )
}

export default SearchFilter
