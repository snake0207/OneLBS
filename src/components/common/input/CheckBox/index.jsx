import CheckboxBase from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

function CheckBox({ checked, onChange, label = '', ...props }) {
    return (
        <FormControlLabel
            control={<CheckboxBase checked={checked} onChange={onChange} {...props} />}
            label={label}
        />
    )
}

export default CheckBox
