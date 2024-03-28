import CheckboxBase from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

function CheckBox({ checked, onChange, label = '', ...props }) {
    return (
        <FormControlLabel
            control={<CheckboxBase checked={checked} onChange={onChange} {...props} />}
            label={<span style={{ fontSize: '14px' }}>{label}</span>}
        />
    )
}

export default CheckBox
