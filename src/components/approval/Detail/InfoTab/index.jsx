import { Box, Tab, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useFormik } from 'formik'

import style from './style.module'

const InfoTab = ({ data, formik, isEditable }) => {
    const theme = useTheme()
    const [activeTab, setActiveTab] = useState('1')
    const inputNames = ['name', 'address', 'lat', 'lon']
    const jsonSample = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4',
        key5: 'value5',
        key6: 'value6',
    }
    const [isShowInputs, setIsShowInputs] = useState({
        name: false,
        address: false,
        lat: false,
        lon: false,
    })
    const [isDisableInputs, setIsDisableInputs] = useState({
        name: true,
        address: true,
        lat: true,
        lon: true,
    })

    const RenderEditIcons = (type) => {
        return !isDisableInputs[type] ? (
            <SaveIcon fontSize={'small'} onClick={() => handleShowEditInputs(type)} />
        ) : (
            <EditIcon fontSize={'small'} onClick={() => handleShowEditInputs(type)} />
        )
    }

    const handleShowEditInputs = (type) => {
        setIsShowInputs({ ...isShowInputs, [type]: true })
        setIsDisableInputs({ ...isDisableInputs, [type]: !isDisableInputs[type] })
        console.log(formik.values)
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
                            {inputNames.map((name, index) => {
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
                                                    {data[name]}
                                                </Typography>
                                                {isEditable && RenderEditIcons(name)}
                                            </Box>
                                            {isShowInputs[name] && (
                                                <Box mt={1}>
                                                    <TextInput
                                                        formik={formik}
                                                        name={name}
                                                        IsDisabled={isDisableInputs[name]}
                                                        // placeholder={'명칭을 입력하세요'}
                                                    />
                                                </Box>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
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
