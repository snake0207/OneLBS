import CheckboxBase from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

function CheckBox({ checked, onChange, label = '', ...props }) {
    return (
        <FormControlLabel
            onChange={onChange}
            control={<CheckboxBase checked={checked} {...props} />}
            label={<span style={{ fontSize: '14px' }}>{label}</span>}
        />
    )
}

export default CheckBox
