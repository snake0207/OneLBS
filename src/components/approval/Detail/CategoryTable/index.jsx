import Typography from '@mui/material/Typography'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Table,
    TableBody,
    TableCell,
    TableRow,
    useTheme,
} from '@mui/material'
import t from '#/common/libs/trans.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'

const CategoryTable = ({ data, formik, isEditable }) => {
    const theme = useTheme()
    const [showInputArray] = useState([])
    const [isDisableInputs, setIsDisableInputs] = useState({
        brand: true,
    })
    console.log('DATA >> ', data, isEditable)

    const RenderEditIcons = (type) => {
        return !isEditable ? null : isDisableInputs[type] ? (
            <EditIcon fontSize={'small'} onClick={() => handleShowEditInputs(type)} />
        ) : (
            <SaveIcon fontSize={'small'} onClick={() => handleShowEditInputs(type)} />
        )
    }

    const handleShowEditInputs = (type) => {
        if (!showInputArray.includes(type)) showInputArray.push(type)
        setIsDisableInputs({ ...isDisableInputs, [type]: !isDisableInputs[type] })
        console.log(formik.values)
    }

    return (
        <Box>
            <Headline title={t('category', 'approval')} />
            <Box>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>dealerPoi</AccordionSummary>
                    <AccordionDetails>
                        <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        component="th"
                                        align={'center'}
                                        sx={{
                                            backgroundColor: theme.palette.grey[100],
                                            width: '8rem',
                                        }}
                                    >
                                        딜러
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant={'body2'}>
                                                {data.dealerPoi.dealerType || '-'}
                                            </Typography>
                                            {RenderEditIcons('dealerType')}
                                        </Box>
                                        {showInputArray.includes('dealerType') && (
                                            <Box mt={1}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'dealerType'}
                                                    IsDisabled={isDisableInputs['dealerType']}
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
                                        sx={{
                                            backgroundColor: theme.palette.grey[100],
                                            width: '8rem',
                                        }}
                                    >
                                        제조사
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant={'body2'}>
                                                {data.dealerPoi.brand || '-'}
                                            </Typography>
                                            {RenderEditIcons('brand')}
                                        </Box>
                                        {showInputArray.includes('brand') && (
                                            <Box mt={1}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'brand'}
                                                    IsDisabled={isDisableInputs['brand']}
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
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>h2 Charging</AccordionSummary>
                    <AccordionDetails>
                        <Typography>상태 정보</Typography>
                        <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        component="th"
                                        align={'center'}
                                        sx={{
                                            backgroundColor: theme.palette.grey[100],
                                            width: '8rem',
                                        }}
                                    >
                                        주차장타입
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant={'body2'}>
                                                {data.brand || '-'}
                                            </Typography>
                                            {RenderEditIcons('brand')}
                                        </Box>
                                        {showInputArray.includes('brand') && (
                                            <Box mt={1}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'brand'}
                                                    IsDisabled={isDisableInputs['brand']}
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
                                        sx={{
                                            backgroundColor: theme.palette.grey[100],
                                            width: '8rem',
                                        }}
                                    >
                                        주차장혼잡도
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant={'body2'}>
                                                {data.brand || '-'}
                                            </Typography>
                                            {RenderEditIcons('brand')}
                                        </Box>
                                        {showInputArray.includes('brand') && (
                                            <Box mt={1}>
                                                <TextInput
                                                    formik={formik}
                                                    name={'brand'}
                                                    IsDisabled={isDisableInputs['brand']}
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
        </Box>
    )
}

export default CategoryTable
