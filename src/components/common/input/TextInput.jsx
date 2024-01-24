import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import Close from '@mui/icons-material/Close'

const TextInput = ({
    label,
    name,
    formik,
    placeholder = null,
    inputRule = null,
    isRequired = false,
}) => {
    return (
        <Box sx={{ my: 1 }}>
            <Typography variant="h6">
                {isRequired && <span style={{ color: 'red' }}>*</span>}
                {label}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
                />
            </Box>
            {inputRule && <Typography sx={{ my: 1 }}>{inputRule}</Typography>}
        </Box>
    )
}

export default TextInput
