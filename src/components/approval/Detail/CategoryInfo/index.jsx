import Typography from '@mui/material/Typography'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    useTheme,
} from '@mui/material'
import t from '#/common/libs/trans.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useMemo, useRef, useState } from 'react'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import Select from '#/components/common/Select/index.jsx'
import EvStationIcon from '#/assets/evStationIcon.svg'
import style from '#/components/approval/Detail/CategoryTable/style.module.js'
import EvChargingInfo from '#/components/approval/Detail/CategoryInfo/EvChargingInfo/index.jsx'
import EvStationIconDark from '#/assets/evStationIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'
import style from './style.module'

const CategoryInfo = ({ category, data, formik, isEditable }) => {
    console.log('DATA >> ', data)
    const theme = useTheme()
    const [showInputArray] = useState([])
    const [tableData, setTableData] = useState({
        evCharging: [
            { title: 'brand', name: 'brand', isDisable: true, isSelect: false },
            { title: 'maxWatt', name: 'maxWatt', isDisable: true, isSelect: false },
            { title: 'status', name: 'stationStatus', isDisable: true, isSelect: true },
        ],
        dealerPoi: [
            { title: '딜러', name: 'dealerType', isDisable: true, isSelect: false },
            { title: '제조사', name: 'brand', isDisable: true, isSelect: false },
        ],
        h2Charging: [
            { title: 'brand', name: 'brand', isDisable: true, isSelect: false },
            { title: 'possibleCount', name: 'possibleCount', isDisable: true, isSelect: false },
        ],
    })
    const selectItems = useRef({
        stationStatus: [
            { key: 0, value: 0, label: '상태1' },
            { key: 1, value: 1, label: '상태2' },
            { key: 2, value: 2, label: '상태3' },
        ],
        parkingType: [
            { key: 0, value: 0, label: '타입1' },
            { key: 1, value: 1, label: '타입2' },
            { key: 2, value: 2, label: '타입3' },
        ],
    })

    // const handleClickInputButton = (type) => {
    //     if (!showInputArray.includes(type)) showInputArray.push(type)
    //     const changeDisableData = tableData[category].map((el) => {
    //         if (el.name === type) el.isDisable = !el.isDisable
    //         return el
    //     })
    //     setTableData({ ...tableData, [category]: changeDisableData })
    // }
    const { themeMode } = getLayoutState()

    const renderInputTable = (category, keys) => {
        console.log('SELECT >> ', category, selectItems.current)
        return (
            <Table size={'small'} sx={style.tableBox}>
                <TableBody>
                    {keys.map(({ title, name, isDisable, isSelect }, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell component="th" sx={{ width: '8rem' }}>
                                    {title}
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Typography variant={'body2'}>
                                            {data[name] || '-'}
                                        </Typography>
                                        {isEditable && (
                                            <Button
                                                variant={'contained'}
                                                // onClick={() => handleClickInputButton(name)}
                                            >
                                                {isDisable ? '수정' : '저장'}
                                            </Button>
                                        )}
                                    </Box>
                                    {showInputArray.includes(name) && (
                                        <Box mt={1}>
                                            {isSelect ? (
                                                <Select
                                                    name={`${data}.${name}`}
                                                    formik={formik}
                                                    items={selectItems.current[name]}
                                                    disabled={isDisable}
                                                />
                                            ) : (
                                                <TextInput
                                                    formik={formik}
                                                    name={`${data}.${name}`}
                                                    IsDisabled={isDisable}
                                                    placeholder={'명칭을 입력하세요'}
                                                />
                                            )}
                                        </Box>
                                    )}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        )
    }

    return (
        <Box>
            <Headline title={t('category', 'approval')} />
            <Box>
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
                            {category}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {category === 'evCharging' && <EvChargingInfo />}
                        {/*{category === 'fuel' && <EvChargingInfo />}*/}
                        {/*{category === 'parking' && <EvChargingInfo />}*/}
                        {/*{category === 'h2Charging' && <EvChargingInfo />}*/}
                        {/*{category === 'dealerPoi' && <EvChargingInfo />}*/}
                        <Table size={'small'} sx={style.tableBox}>
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        component="th"
                                        align={'center'}
                                        sx={{ width: '8rem' }}
                                    >
                                        {t('brand', 'approval')}
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant={'body2'}>{data.brand}-</Typography>
                                            {isEditable && (
                                                <Button
                                                    variant={'contained'}
                                                    // onClick={() => handleClickInputButton(name)}
                                                >
                                                    {/*{isDisable ? '수정' : '저장'}*/}
                                                </Button>
                                            )}
                                        </Box>
                                        {showInputArray.includes('brand') && (
                                            <Box mt={1}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'brand'}
                                                    // IsDisabled={isDisableInputs['brand']}
                                                    placeholder={'명칭을 입력하세요'}
                                                />
                                            </Box>
                                        )}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </AccordionDetails>
                </Accordion>
                {/*{category === 'evCharging' && (*/}
                {/*    <Accordion>*/}
                {/*        <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
                {/*            ev Charging*/}
                {/*        </AccordionSummary>*/}
                {/*        <AccordionDetails>*/}
                {/*            <Typography>상태 정보</Typography>*/}
                {/*            {renderInputTable('evCharging', tableData.evCharging)}*/}
                {/*        </AccordionDetails>*/}
                {/*    </Accordion>*/}
                {/*)}*/}
                {/*{category === 'fuel' && (*/}
                {/*    <Accordion>*/}
                {/*        <AccordionSummary expandIcon={<ExpandMoreIcon />}>fuel</AccordionSummary>*/}
                {/*        <AccordionDetails>*/}
                {/*            <Typography>상태 정보</Typography>*/}
                {/*            {renderInputTable('fuel', tableData.fuel)}*/}
                {/*        </AccordionDetails>*/}
                {/*    </Accordion>*/}
                {/*)}*/}
                {/*{category === 'parking' && (*/}
                {/*    <Accordion>*/}
                {/*        <AccordionSummary expandIcon={<ExpandMoreIcon />}>parking</AccordionSummary>*/}
                {/*        <AccordionDetails>*/}
                {/*            <Typography>상태 정보</Typography>*/}
                {/*            {renderInputTable('parking', tableData.parking)}*/}
                {/*        </AccordionDetails>*/}
                {/*    </Accordion>*/}
                {/*)}*/}
                {/*{category === 'h2Charging' && (*/}
                {/*    <Accordion>*/}
                {/*        <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
                {/*            h2Charging*/}
                {/*        </AccordionSummary>*/}
                {/*        <AccordionDetails>*/}
                {/*            <Typography>상태 정보</Typography>*/}
                {/*            {renderInputTable('h2Charging', tableData.h2Charging)}*/}
                {/*        </AccordionDetails>*/}
                {/*    </Accordion>*/}
                {/*)}*/}
                {/*{category === 'dealerPoi' && (*/}
                {/*    <Accordion>*/}
                {/*        <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
                {/*            dealerPoi*/}
                {/*        </AccordionSummary>*/}
                {/*        <AccordionDetails>*/}
                {/*            <Typography>상태 정보</Typography>*/}
                {/*            {renderInputTable('dealerPoi', tableData.dealerPoi)}*/}
                {/*        </AccordionDetails>*/}
                {/*    </Accordion>*/}
                {/*)}*/}
            </Box>
        </Box>
    )
}

export default CategoryInfo
