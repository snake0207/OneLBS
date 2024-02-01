import { useState } from 'react'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import Close from '@mui/icons-material/Close'

const PasswordInput = ({ name, placeholder, formik, inputRule = null }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <>
            <Box
                sx={{
                    height: 60,
                    flex: 1,
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
                                {formik.values[name] && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => formik.setFieldValue(name, '')}
                                    >
                                        <Close />
                                    </IconButton>
                                )}
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
        </>
    )
}

export default PasswordInput
