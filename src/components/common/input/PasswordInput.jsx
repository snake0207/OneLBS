import { useState } from 'react'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import * as S from './styled'

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
        <S.Container isRule={!!inputRule}>
            <div>
                <S.InputLabel>
                    {isRequired && <S.RequiredSpan>*</S.RequiredSpan>}
                    {label}
                </S.InputLabel>
                <OutlinedInput
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[name] && !!formik.errors[name]}
                    fullWidth
                    size="small"
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder={placeholder}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                onClick={() => setIsPasswordVisible((prev) => !prev)}
                            >
                                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {formik.touched[name] && <S.HelperText>{formik.errors[name]}</S.HelperText>}
            </div>
            {inputRule && <S.MediumText>{inputRule}</S.MediumText>}
        </S.Container>
    )
}

export default PasswordInput
