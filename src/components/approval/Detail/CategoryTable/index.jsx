import Typography from '@mui/material/Typography'
import { Box, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import EvStationIcon from '#/assets/evStationIcon.svg'

import style from './style.module'

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
                <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}>
                    <img
                        src={EvStationIcon}
                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                    />
                    {data.name}
                </Typography>
                <Table size={'small'} sx={style.tableBox}>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" align={'center'} sx={{ width: '8rem' }}>
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
