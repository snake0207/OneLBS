import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import Close from '@mui/icons-material/Close'

const TextInput = ({ name, formik, placeholder = null, inputRule = null, IsDisabled = false }) => {
    return (
        <>
            <Box
                sx={{
                    height: 60,
                }}
            >
                <TextField
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[name] && !!formik.errors[name]}
                    fullWidth
                    size="small"
                    type="text"
                    placeholder={placeholder}
                    helperText={formik.touched[name] && formik.errors[name]}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {formik.values[name] && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => formik.setFieldValue(name, '')}
                                    >
                                        <Close />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        ),
                    }}
                    disabled={IsDisabled}
                />
            </Box>
            {inputRule && <Typography sx={{ my: 1 }}>{inputRule}</Typography>}
        </>
    )
}

export default TextInput
