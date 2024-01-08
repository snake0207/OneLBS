import { Children, isValidElement, useEffect, useState } from 'react'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import Close from '@mui/icons-material/Close'
import * as S from './styled'

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
        <S.Container isRule={!!inputRule}>
            <div>
                <S.InputLabel>
                    {isRequired && <S.RequiredSpan>*</S.RequiredSpan>}
                    {label}
                </S.InputLabel>
                <S.InputContainer>
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
                </S.InputContainer>
                {formik.touched[name] && <S.HelperText>{formik.errors[name]}</S.HelperText>}
            </div>
            {inputRule && <S.MediumText>{inputRule}</S.MediumText>}
        </S.Container>
    )
}

const SubmitButton = ({ name, onClick }) => {
    return (
        <S.SubmitButton onClick={onClick} type="button">
            {name}
        </S.SubmitButton>
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
        <S.MediumText>
            {parseInt(time / 60)}:
            {parseInt(time % 60)
                .toString()
                .padStart(2, 0)}
        </S.MediumText>
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
