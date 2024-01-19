import { Children, isValidElement, useEffect, useState } from 'react'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import Close from '@mui/icons-material/Close'

// 합성 컴포넌트
const TextInputMain = ({
    children,
    label,
    name,
    placeholder = null,
    inputRule = null,
    formik,
    isRequired = false,
}) => {
    const submitButton = getSubmitButton(children)
    const inputTimer = getInputTimer(children)
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                    <OutlinedInput
                        name={name}
                        value={formik.values[name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched[name] && !!formik.errors[name]}
                        fullWidth
                        size="small"
                        type="text"
                        placeholder={placeholder}
                        endAdornment={
                            <InputAdornment position="end">
                                {inputTimer && inputTimer}
                                {formik.values[name] && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => formik.setFieldValue(name, '')}
                                    >
                                        <Close />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        }
                    />
                    {submitButton && submitButton}
                </Box>
                {formik.touched[name] && (
                    <Typography sx={{ color: 'red', fontSize: 14 }}>
                        {formik.errors[name]}
                    </Typography>
                )}
            </Box>
            {inputRule && <Typography sx={{ my: 1 }}>{inputRule}</Typography>}
        </Box>
    )
}

const SubmitButton = ({ name, onClick }) => {
    return (
        <Button variant="contained" onClick={onClick} type="button" sx={{ flex: '0 0 auto' }}>
            {name}
        </Button>
    )
}

const InputTimer = () => {
    const [time, setTime] = useState(180) // (단위: 초)
    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [time])
    return (
        <Typography>
            {parseInt(time / 60)}:
            {parseInt(time % 60)
                .toString()
                .padStart(2, 0)}
        </Typography>
    )
}

// 컴포넌트 타입
const SubmitButtonType = (<SubmitButton />).type
const InputTimerType = (<InputTimer />).type

// children에서 타입과 동일한 컴포넌트 추출해서 반환하는 함수
const getSubmitButton = (children) => {
    const childrenArr = Children.toArray(children)
    return childrenArr.filter((child) => isValidElement(child) && child.type === SubmitButtonType)
}

const getInputTimer = (children) => {
    const childrenArr = Children.toArray(children)
    return childrenArr
        .filter((child) => isValidElement(child) && child.type === InputTimerType)
        .slice(0, 2)
}

export const TextInput = Object.assign(TextInputMain, {
    SubmitButton,
    InputTimer,
})
