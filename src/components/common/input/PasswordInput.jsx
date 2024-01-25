import { useState } from 'react'
import {
    Box,
    IconButton,
    InputAdornment,
    OutlinedInput,
    TextField,
    Typography,
} from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

const PasswordInput = ({
    label,
    name,
    placeholder,
    inputRule = null,
    formik,
    isRequired = false,
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
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
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder={placeholder}
                    helperText={formik.touched[name] && formik.errors[name]}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                                >
                                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            {inputRule && <Typography sx={{ my: 1 }}>{inputRule}</Typography>}
        </Box>
    )
}

export default PasswordInput
