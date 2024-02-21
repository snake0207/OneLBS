import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useField } from 'formik'

/**
 * FormikProvider text 공통 Input
 * @param {string} name input formik name
 * @param {string} placeholder input placeholder
 * @param {string} inputRule 입력에 대한 가이드
 * @param {boolean} IsDisabled input disabled 여부
 * @returns ReactNode
 *
 * 사용예
 * const formik = useFormik({
 *     initialValues: {},
 *     onSubmit: (form) => {
 *     },
 * })
 * <FormikProvider value={formik}>
 *     <FormikInput name={'name'} ... />
 * </FormikProvider>
 */
const FormikInput = ({ name, placeholder = null, inputRule = null, IsDisabled = false }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <Box
                sx={{
                    flex: 1,
                }}
            >
                <TextField
                    {...field}
                    error={!!meta.error}
                    fullWidth
                    size="small"
                    type="text"
                    placeholder={placeholder}
                    helperText={meta.touched && meta.error}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {field.value && (
                                    <IconButton edge="end" onClick={() => helpers.setValue('')}>
                                        <Close />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        ),
                    }}
                    disabled={IsDisabled}
                    sx={{ bgcolor: 'white' }}
                />
            </Box>
            {inputRule && <Typography sx={{ my: 1 }}>{inputRule}</Typography>}
        </>
    )
}

export default FormikInput
