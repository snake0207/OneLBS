import { Box, Typography } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import FormikInput from '#/components/common/input/FormikInput/index.jsx'

const Price = ({ dataType, formik, priceData, index }) => {
    // 데이터 수정
    const [isPriceSave, setIsPriceSave] = useState(false)
    const [isPricePerUnitSave, setIsPricePerUnitSave] = useState(false)
    const [isCodeSave, setIsCodeSave] = useState(false)
    const [isUnitSave, setIsUnitSave] = useState(false)

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>가격</Typography>
                </Box>
                <Box>
                    <Typography>{priceData.price}</Typography>
                </Box>
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
                        formik.initialValues[`${dataType}`].price[`${index}`].price)) && (
                <Box sx={{ display: 'flex', height: '40px' }}>
                    <FormikInput
                        name={`${dataType}.price[${index}].price`}
                        IsDisabled={!isPriceSave}
                    />
                </Box>
            )}
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>가격 단위</Typography>
                </Box>
                <Box>
                    <Typography>{priceData.priceUnit}</Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                    onClick={() => setIsPricePerUnitSave(!isPricePerUnitSave)}
                >
                    {isPricePerUnitSave ? <SaveIcon /> : <EditIcon />}
                </IconButton>
            </Box>
            {(isPricePerUnitSave ||
                (!isPricePerUnitSave &&
                    formik.values[`${dataType}`].price[`${index}`].priceUnit !==
                        formik.initialValues[`${dataType}`].price[`${index}`].priceUnit)) && (
                <Box sx={{ display: 'flex', height: '40px' }}>
                    <FormikInput
                        name={`${dataType}.price[${index}].priceUnit`}
                        IsDisabled={!isPricePerUnitSave}
                    />
                </Box>
            )}
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>통화 코드</Typography>
                </Box>
                <Box>
                    <Typography>{priceData.currencyCode}</Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                    onClick={() => setIsCodeSave(!isCodeSave)}
                >
                    {isCodeSave ? <SaveIcon /> : <EditIcon />}
                </IconButton>
            </Box>
            {(isCodeSave ||
                (!isCodeSave &&
                    formik.values[`${dataType}`].price[`${index}`].currencyCode !==
                        formik.initialValues[`${dataType}`].price[`${index}`].currencyCode)) && (
                <Box sx={{ display: 'flex', height: '40px' }}>
                    <FormikInput
                        name={`${dataType}.price[${index}].currencyCode`}
                        IsDisabled={!isCodeSave}
                    />
                </Box>
            )}
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>통화 단위</Typography>
                </Box>
                <Box>
                    <Typography>{priceData.currency}</Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                    onClick={() => setIsUnitSave(!isUnitSave)}
                >
                    {isUnitSave ? <SaveIcon /> : <EditIcon />}
                </IconButton>
            </Box>
            {(isUnitSave ||
                (!isUnitSave &&
                    formik.values[`${dataType}`].price[`${index}`].currency !==
                        formik.initialValues[`${dataType}`].price[`${index}`].currency)) && (
                <Box sx={{ display: 'flex', height: '40px' }}>
                    <FormikInput
                        name={`${dataType}.price[${index}].currency`}
                        IsDisabled={!isUnitSave}
                    />
                </Box>
            )}
        </Box>
    )
}

export default Price
