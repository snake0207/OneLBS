import { FormControl, InputLabel, MenuItem } from '@mui/material'
import SelectBase from '@mui/material/Select'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

function Select({ name, formik, value, items, label, onChange, ...props }) {
    const parseNameByPath = (obj, path) =>
        path.split('.').reduce((acc, current) => (acc ? acc[current] : ''), obj)

    const handleChange = (event) => {
        // find item by value
        const selectedItem = items.find((item) => item.value === event.target.value)

        // set formik value
        if (formik) formik.setFieldValue(name, selectedItem.value)
        if (onChange) onChange(selectedItem)
    }

    return (
        <FormControl
            sx={{
                '& .MuiInputBase-root': {
                    '& .MuiSvgIcon-root': {
                        color: 'text.lightblue',
                    },
                },
            }}
        >
            <InputLabel id="select-label">{label}</InputLabel>
            <SelectBase
                id="select"
                name={name}
                labelId="select-label"
                value={formik ? parseNameByPath(formik.values, name) : value}
                onChange={handleChange}
                IconComponent={KeyboardArrowDownRoundedIcon}
                sx={{
                    backgroundColor: 'form.main',
                    borderRadius: '4px',
                    opacity: '95%',
                }}
                {...props}
            >
                {items.map((item) => (
                    <MenuItem key={item.key} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </SelectBase>
        </FormControl>
    )
}

export default Select
