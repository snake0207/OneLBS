import Typography from '@mui/material/Typography'
import { Box, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'
import TextInput from '#/components/common/input/TextInput/index.jsx'

const CategoryTable = ({ data, isShowInputs, RenderEditIcons, formik }) => {
    const theme = useTheme()

    return (
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
                                {RenderEditIcons('brand')}
                            </Box>
                            {isShowInputs.brand && (
                                <Box mt={1}>
                                    <TextInput
                                        formik={formik}
                                        name={'brand'}
                                        placeholder={'명칭을 입력하세요'}
                                    />
                                </Box>
                            )}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}

export default CategoryTable
