import { Box, Tab, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useFormik } from 'formik'

const InfoTab = ({ data, isShowInputs, RenderEditIcons, formik }) => {
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

    return (
        <Box sx={{ typography: 'body1' }}>
            <TabContext value={activeTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={(e, tabValue) => setActiveTab(tabValue)}>
                        <Tab label={t('info', 'approval')} value="1" sx={{ border: 1, p: 1 }} />
                        <Tab
                            label={t('final_info', 'approval')}
                            value="2"
                            sx={{ border: 1, p: 1 }}
                        />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '0.8rem 0' }}>
                    <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
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
                                                {RenderEditIcons(name)}
                                            </Box>
                                            {isShowInputs[name] && (
                                                <Box mt={1}>
                                                    <TextInput
                                                        formik={formik}
                                                        name={name}
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
                </TabPanel>

                <TabPanel value="2" sx={{ padding: '0.8rem 0' }}>
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
