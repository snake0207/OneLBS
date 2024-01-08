import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import * as S from './styled'

// 합성 컴포넌트
const RadioInputMain = ({ children, itemArr, name, label, formik, isRequired = false }) => {
    return (
        <S.RadioInputContainer>
            <S.RadioLabelContainer>
                <S.RadioLabel>
                    {isRequired && <S.RequiredSpan>*</S.RequiredSpan>}
                    {label}
                </S.RadioLabel>
                {children}
            </S.RadioLabelContainer>
            <FormControl>
                <RadioGroup
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    row
                >
                    {itemArr.map((item, idx) => (
                        <FormControlLabel
                            key={idx}
                            value={item.value}
                            control={<Radio name={name} />}
                            label={item.label}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </S.RadioInputContainer>
    )
}

const RadioLabelButton = ({ name, onClick }) => {
    return (
        <S.RadioButton onClick={onClick} type="button">
            {name}
        </S.RadioButton>
    )
}

export const RadioInput = Object.assign(RadioInputMain, { RadioButton: RadioLabelButton })
