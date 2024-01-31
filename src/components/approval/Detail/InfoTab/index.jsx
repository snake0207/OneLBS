import { Box, Tab, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { tokens } from '#/theme/index.js'

const InfoTab = () => {
    const [activeTab, setActiveTab] = useState('1')
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
                        <Tab label="정보" value="1" sx={{ border: 1, p: 1 }} />
                        <Tab label="최종수정정보" value="2" sx={{ border: 1, p: 1 }} />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '0.8rem 0' }}>
                    <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    align={'center'}
                                    sx={{ backgroundColor: tokens.grey[100] }}
                                >
                                    명칭
                                </TableCell>
                                <TableCell>Phillips 66</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    align={'center'}
                                    sx={{ backgroundColor: tokens.grey[100] }}
                                >
                                    주소
                                </TableCell>
                                <TableCell>Phillips 66</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    align={'center'}
                                    sx={{ backgroundColor: tokens.grey[100] }}
                                >
                                    위도
                                </TableCell>
                                <TableCell>45.123123</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    align={'center'}
                                    sx={{ backgroundColor: tokens.grey[100] }}
                                >
                                    경도
                                </TableCell>
                                <TableCell>-105.123123</TableCell>
                            </TableRow>
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
