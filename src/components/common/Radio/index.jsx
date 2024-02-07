import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

/**
 * 공통 Radio Group Input
 * @param {[{value: string, label: string}]} radioList radio item list
 * @param {[{value: string, label: string}]} name radio formik name
 * @param {object} formik useformik return object
 * @param {boolean} isDisabledinput radio disabled 여부
 * @returns ReactNode
 */
const RadioInput = ({ radioList, name, formik, isDisabled = false }) => {
    const formControlLabelStyle = {
        "& .MuiFormControlLabel-label": {
          fontSize: '13px'
        }
      }

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
                        sx={{...formControlLabelStyle}}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default RadioInput
