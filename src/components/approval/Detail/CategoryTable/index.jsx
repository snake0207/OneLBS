import Typography from '@mui/material/Typography'
import { Box, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import Headline from '#/components/approval/Detail/Headline/index.jsx'

const CategoryTable = ({ data, formik, isEditable }) => {
    const theme = useTheme()
    const [isShowInputs, setIsShowInputs] = useState({
        brand: false,
    })
    const [isDisableInputs, setIsDisableInputs] = useState({
        brand: true,
    })

    const RenderEditIcons = (type) => {
        return isShowInputs[type] ? (
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
        <Box>
            <Headline title={t('category', 'approval')} />
            <Box>
                <Typography>{data.name}</Typography>
                <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
                    <TableBody>
                        <TableRow>
                            <TableCell
                                component="th"
                                align={'center'}
                                sx={{ backgroundColor: theme.palette.grey[100], width: '8rem' }}
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
                                    {isEditable && RenderEditIcons('brand')}
                                </Box>
                                {isShowInputs.brand && (
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
            </Box>
        </Box>
    )
}

export default CategoryTable
