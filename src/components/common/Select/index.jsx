import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function SelectBase({ items, label, value, onChange, ...props }) {
    const handleChange = (event) => {
        // find item by value
        const selectedItem = items.find((item) => item.value === event.target.value)
        onChange(selectedItem)
    }

    return (
        <FormControl>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId="select-label"
                id="select"
                value={value}
                onChange={handleChange}
                {...props}
            >
                {items.map((item) => (
                    <MenuItem key={item.key} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectBase
