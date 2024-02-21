import { Box, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import FormikInput from '#/components/common/input/FormikInput/index.jsx'
import t from '#/common/libs/trans.js'

const Price = ({ dataType, formik, priceData, index }) => {
    // 데이터 수정
    const [isPriceSave, setIsPriceSave] = useState(false)
    return (
        <Table
            sx={{
                th: {
                    width: '130px',
                    color: '#444444',
                    fontWeight: 500,
                    pt: '6px',
                    pb: '6px',
                    backgroundColor: '#e2e2e2',
                    borderTop: '1px solid #d1d1d1',
                    borderBottom: '1px solid #d1d1d1',
                    textAlign: 'center',
                },
                td: {
                    color: '#444444',
                    fontWeight: 400,
                    p: '6px 0px 6px 10px',
                    textAlign: 'left',
                    borderTop: '1px solid #d1d1d1',
                },
            }}
        >
            <TableHead>
                <TableRow>
                    <TableCell>{t('price.price', 'gpss')}</TableCell>
                    <TableCell component="td">
                        <Box sx={{ display: 'flex' }}>
                            <Typography>
                                {priceData.price}
                                {priceData.currency}/{priceData.priceUnit}
                            </Typography>
                            <IconButton
                                sx={{
                                    ml: 'auto',
                                    minWidth: '15px',
                                    width: '30px',
                                    minHeight: '15px',
                                    height: '30px',
                                }}
                                onClick={() => setIsPriceSave(!isPriceSave)}
                            >
                                {isPriceSave ? <SaveIcon /> : <EditIcon />}
                            </IconButton>
                        </Box>
                        {(isPriceSave ||
                            (!isPriceSave &&
                                formik.values[`${dataType}`].price[`${index}`].price !=
                                    formik.initialValues[`${dataType}`].price[`${index}`]
                                        .price)) && (
                            <Box sx={{ display: 'flex', height: '40px' }}>
                                <FormikInput
                                    name={`${dataType}.price[${index}].price`}
                                    IsDisabled={!isPriceSave}
                                />
                            </Box>
                        )}
                    </TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}

export default Price
