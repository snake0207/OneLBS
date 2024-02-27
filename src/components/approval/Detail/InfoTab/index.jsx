import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableRow,
    useTheme,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'

import style from './style.module'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import EvStationIcon from '#/assets/evStationIcon.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const InfoTab = ({ basicData, coordData, formik, isEditable }) => {
    console.log('INFO DATA >> ', coordData, formik.values)
    const theme = useTheme()
    const [activeTab, setActiveTab] = useState('1')
    const jsonSample = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4',
        key5: 'value5',
        key6: 'value6',
    }
    const [isShowInputs, setIsShowInputs] = useState({
        title: false,
        address: false,
        center_lat: false,
        center_lon: false,
        guide_lat: false,
        guide_lon: false,
    })
    const [isDisableInputs, setIsDisableInputs] = useState({
        title: true,
        address: true,
        center_lat: true,
        center_lon: true,
        guide_lat: true,
        guide_lon: true,
    })

    const handleClickInputButton = (name) => {
        setIsShowInputs({ ...isShowInputs, [name]: true })
        setIsDisableInputs({ ...isDisableInputs, [name]: !isDisableInputs[name] })
    }

    return (
        <Box sx={{ typography: 'body1' }}>
            <TabContext value={activeTab}>
                <Box sx={{ position: 'relative' }}>
                    <TabList onChange={(e, tabValue) => setActiveTab(tabValue)} sx={style.tabs}>
                        <Tab label={t('info', 'approval')} value="1" sx={style.tabMenu} />
                        <Tab label={t('final_info', 'approval')} value="2" sx={style.tabMenu} />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '4px 0 0 0' }}>
                    <Table size={'small'} sx={style.tableBox}>
                        <TableBody>
                            {Object.keys(basicData).map((name, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell
                                            component="th"
                                            align={'center'}
                                            sx={{
                                                backgroundColor: theme.palette.grey[100],
                                                width: '8rem',
                                            }}
                                        >
                                            {t(name, 'approval')}
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Typography variant={'body2'}>
                                                    {basicData[name]}
                                                </Typography>
                                                {isEditable && (
                                                    <Button
                                                        variant={'contained'}
                                                        onClick={() => handleClickInputButton(name)}
                                                    >
                                                        {isDisableInputs[name] ? '수정' : '저장'}
                                                    </Button>
                                                )}
                                            </Box>
                                            {isShowInputs[name] && (
                                                <Box mt={1}>
                                                    <TextInput
                                                        formik={formik}
                                                        name={name}
                                                        IsDisabled={isDisableInputs[name]}
                                                        placeholder={'명칭을 입력하세요'}
                                                    />
                                                </Box>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    {/* 좌표 아코디언 시작 */}
                    <Box>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#05141F',
                                    mb: '4px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#05141F',
                                        mb: '4px',
                                    }}
                                >
                                    <img
                                        // src={EvStationIcon}
                                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                    />
                                    메인좌표
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Table size={'small'} sx={style.tableBox}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell
                                                component="th"
                                                align={'center'}
                                                sx={{ width: '8rem' }}
                                            >
                                                lat
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <Typography variant={'body2'}>
                                                        {coordData['center']['lat']}
                                                    </Typography>
                                                    {isEditable && (
                                                        <Button
                                                            variant={'contained'}
                                                            onClick={() =>
                                                                handleClickInputButton('center_lat')
                                                            }
                                                        >
                                                            {isDisableInputs['center_lat']
                                                                ? '수정'
                                                                : '저장'}
                                                        </Button>
                                                    )}
                                                </Box>
                                                {isShowInputs['center_lat'] && (
                                                    <Box mt={1}>
                                                        <TextInput
                                                            formik={formik}
                                                            name={'center.lat'}
                                                            IsDisabled={
                                                                isDisableInputs['center_lat']
                                                            }
                                                            placeholder={'명칭을 입력하세요'}
                                                        />
                                                    </Box>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell
                                                component="th"
                                                align={'center'}
                                                sx={{ width: '8rem' }}
                                            >
                                                lon
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <Typography variant={'body2'}>
                                                        {coordData['center']['lon']}
                                                    </Typography>
                                                    {isEditable && (
                                                        <Button
                                                            variant={'contained'}
                                                            onClick={() =>
                                                                handleClickInputButton('center_lon')
                                                            }
                                                        >
                                                            {isDisableInputs['center_lon']
                                                                ? '수정'
                                                                : '저장'}
                                                        </Button>
                                                    )}
                                                </Box>
                                                {isShowInputs['center_lon'] && (
                                                    <Box mt={1}>
                                                        <TextInput
                                                            formik={formik}
                                                            name={'center.lon'}
                                                            IsDisabled={
                                                                isDisableInputs['center_lon']
                                                            }
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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#05141F',
                                    mb: '4px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#05141F',
                                        mb: '4px',
                                    }}
                                >
                                    <img
                                        // src={EvStationIcon}
                                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                    />
                                    가이드좌표
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Table size={'small'} sx={style.tableBox}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell
                                                component="th"
                                                align={'center'}
                                                sx={{ width: '8rem' }}
                                            >
                                                lat
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <Typography variant={'body2'}>
                                                        {coordData['guide']['lat']}
                                                    </Typography>
                                                    {isEditable && (
                                                        <Button
                                                            variant={'contained'}
                                                            onClick={() =>
                                                                handleClickInputButton('guide_lat')
                                                            }
                                                        >
                                                            {isDisableInputs['guide_lat']
                                                                ? '수정'
                                                                : '저장'}
                                                        </Button>
                                                    )}
                                                </Box>
                                                {isShowInputs['guide_lat'] && (
                                                    <Box mt={1}>
                                                        <TextInput
                                                            formik={formik}
                                                            name={'guide.lat'}
                                                            IsDisabled={
                                                                isDisableInputs['guide_lat']
                                                            }
                                                            placeholder={'명칭을 입력하세요'}
                                                        />
                                                    </Box>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell
                                                component="th"
                                                align={'center'}
                                                sx={{ width: '8rem' }}
                                            >
                                                lon
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <Typography variant={'body2'}>
                                                        {coordData['guide']['lon']}
                                                    </Typography>
                                                    {isEditable && (
                                                        <Button
                                                            variant={'contained'}
                                                            onClick={() =>
                                                                handleClickInputButton('guide_lon')
                                                            }
                                                        >
                                                            {isDisableInputs['guide_lon']
                                                                ? '수정'
                                                                : '저장'}
                                                        </Button>
                                                    )}
                                                </Box>
                                                {isShowInputs['guide_lon'] && (
                                                    <Box mt={1}>
                                                        <TextInput
                                                            formik={formik}
                                                            name={'guide.lon'}
                                                            IsDisabled={
                                                                isDisableInputs['guide_lon']
                                                            }
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
                    </Box>
                </TabPanel>

                <TabPanel value="2" sx={{ padding: '4px 0 0 0' }}>
                    <Typography
                        variant={'body1'}
                        sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                    >
                        {JSON.stringify(jsonSample, null, 4)}
                    </Typography>
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default InfoTab
