import style from '#/components/approval/Detail/CategoryTable/style.module.js'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material'
import t from '#/common/libs/trans.js'
import Typography from '@mui/material/Typography'
import EvStationIcon from '#/assets/evStationIcon.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import TimePickerInput from '#/components/common/input/TimePickerInput/index.jsx'
import { Fragment, useRef, useState } from 'react'
import Select from '#/components/common/Select/index.jsx'

const EvChargingInfo = ({ data, isEditable, formik }) => {
    const [handleTimeInputs, setHandleTimeInputs] = useState(() =>
        data.openingHours.map(() => ({ isShow: false, isDisable: true })),
    )
    const [handleChargerInput, setHandleChargerInput] = useState({ isShow: false, isDisable: true })
    const selectTypeItems = useRef([
        { key: 0, value: 0, label: '알수없음' },
        { key: 1, value: 1, label: 'ACtype1' },
        { key: 2, value: 2, label: 'ACtype2' },
        { key: 3, value: 3, label: 'Combo(AC+DC)' },
        { key: 4, value: 4, label: 'CHAdeMO' },
    ])

    const handleClickTimeInputButton = (index) => {
        setHandleTimeInputs((prevState) => {
            const newState = [...prevState]
            newState[index].isShow = true
            newState[index].isDisable = !newState[index].isDisable
            return newState
        })
    }

    const handleClickChargerInputButton = () => {
        setHandleChargerInput({ isShow: true, isDisable: !handleChargerInput.isDisable })
    }

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                >
                    <Typography
                        sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                    >
                        <img
                            src={EvStationIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                        evCharging
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table size={'small'} sx={style.tableBox}>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" align={'center'} sx={{ width: '8rem' }}>
                                    {t('brand', 'approval')}
                                </TableCell>
                                <TableCell>
                                    <EditableTextColumn
                                        value={data.brand}
                                        name={'evChargingInfo.brand'}
                                        isEditable={isEditable}
                                        formik={formik}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" align={'center'} sx={{ width: '8rem' }}>
                                    주차료
                                </TableCell>
                                <TableCell>
                                    <EditableTextColumn
                                        value={data.maxWatt}
                                        name={'evChargingInfo.maxWatt'}
                                        isEditable={isEditable}
                                        formik={formik}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" align={'center'} sx={{ width: '8rem' }}>
                                    최대전력
                                </TableCell>
                                <TableCell>
                                    <EditableTextColumn
                                        value={data.maxWatt}
                                        name={'evChargingInfo.maxWatt'}
                                        isEditable={isEditable}
                                        formik={formik}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" align={'center'} sx={{ width: '8rem' }}>
                                    상태
                                </TableCell>
                                <TableCell>{data.status}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                >
                    <Typography
                        sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                    >
                        <img
                            // src={EvStationIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                        영업 요일
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table size={'small'} sx={style.tableBox}>
                        <TableBody>
                            {data.openingHours.map((openingHour, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        component="th"
                                        align={'center'}
                                        sx={{ width: '8rem' }}
                                    >
                                        {openingHour.weekday}
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant={'body2'}>
                                                {openingHour.open || '-'}
                                                {' ~ '}
                                                {openingHour.close || '-'}
                                            </Typography>
                                            {isEditable && (
                                                <Button
                                                    variant={'contained'}
                                                    onClick={() =>
                                                        handleClickTimeInputButton(index)
                                                    }
                                                >
                                                    {handleTimeInputs[index].isDisable
                                                        ? '수정'
                                                        : '저장'}
                                                </Button>
                                            )}
                                        </Box>
                                        {handleTimeInputs[index].isShow && (
                                            <Stack direction={'row'}>
                                                <TimePickerInput
                                                    name={`evChargingInfo.openingHours.${index}.open`}
                                                    formik={formik}
                                                    isDisable={handleTimeInputs[index].isDisable}
                                                />
                                                ~
                                                <TimePickerInput
                                                    name={`evChargingInfo.openingHours.${index}.close`}
                                                    formik={formik}
                                                    isDisable={handleTimeInputs[index].isDisable}
                                                />
                                            </Stack>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                >
                    <Typography
                        sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                    >
                        <img
                            // src={EvStationIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                        status
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table size={'small'} sx={style.tableBox}>
                        <TableBody>
                            {data.summary.map((summary, index) => (
                                <Fragment key={index}>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            type
                                        </TableCell>
                                        <TableCell>{summary.type}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            전력
                                        </TableCell>
                                        <TableCell>{summary.watt}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            속도
                                        </TableCell>
                                        <TableCell>{summary.speed}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            충전가능수
                                        </TableCell>
                                        <TableCell>{summary.possibleCount}</TableCell>
                                    </TableRow>
                                </Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                >
                    <Typography
                        sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                    >
                        <img
                            // src={EvStationIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                        charger
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table size={'small'} sx={style.tableBox}>
                        <TableBody>
                            {data.chargers.map((charger, index) => (
                                <Fragment key={index}>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            id
                                        </TableCell>
                                        <TableCell>{charger.id}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            speed
                                        </TableCell>
                                        <TableCell>{charger.speed}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            watt
                                        </TableCell>
                                        <TableCell>{charger.watt}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            status
                                        </TableCell>
                                        <TableCell>{charger.status}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            lastUsedTime
                                        </TableCell>
                                        <TableCell>{charger.lastUsedTime || '-'}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{ width: '8rem' }}
                                        >
                                            type
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Typography variant={'body2'}>
                                                    {selectTypeItems.current.find(
                                                        (item) => item.value === charger?.type,
                                                    )?.label || '-'}
                                                </Typography>
                                                {isEditable && (
                                                    <Button
                                                        variant={'contained'}
                                                        onClick={handleClickChargerInputButton}
                                                    >
                                                        {handleChargerInput.isDisable
                                                            ? '수정'
                                                            : '저장'}
                                                    </Button>
                                                )}
                                            </Box>
                                            {handleChargerInput.isShow && (
                                                <Box mt={1}>
                                                    <Select
                                                        name={`evChargingInfo.chargers.${index}.type`}
                                                        formik={formik}
                                                        items={selectTypeItems.current}
                                                        disabled={handleChargerInput.isDisable}
                                                    />
                                                </Box>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                </Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
export default EvChargingInfo
