import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function SelectBase({ name, formik, items, label, onChange, ...props }) {
    const handleChange = (event) => {
        // find item by value
        const selectedItem = items.find((item) => item.value === event.target.value)

        // set formik value
        formik.setFieldValue(name, selectedItem.value)
        if (onChange) onChange(selectedItem)
    }

    return (
        <FormControl>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                id="select"
                name={name}
                labelId="select-label"
                value={formik.values[name]}
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
