import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

const RadioInput = ({ radioList, name, formik, isDisabled = false }) => {
    return (
        <FormControl>
            <RadioGroup
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                row
            >
                {radioList.map((radio, idx) => (
                    <FormControlLabel
                        key={idx}
                        value={radio.value}
                        control={<Radio name={name} />}
                        label={radio.label}
                        disabled={isDisabled}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default RadioInput
