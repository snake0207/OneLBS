import { useState } from 'react'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import Close from '@mui/icons-material/Close'

/**
 * 비밀번호 공통 Input
 * @param {string} name input formik name
 * @param {string} placeholder input placeholder
 * @param {object} formik useformik return object
 * @param {string} inputRule 입력에 대한 가이드
 * @returns ReactNode
 */
const PasswordInput = ({ name, placeholder, formik, inputRule = null }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <>
            <Box
                sx={{
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
            {inputRule && <Typography sx={{ my: 1, fontSize: 11, mt: 0 }}><span style={{ color: 'red', fontSize: 14, verticalAlign:'middle' }}>*</span>{inputRule}</Typography>}
        </>
    )
}

export default PasswordInput
