import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material'

// 합성 컴포넌트
const RadioInputMain = ({ children, items, name, label, formik, isRequired = false }) => {
    return (
        <Box sx={{ my: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    {isRequired && <span style={{ color: 'red' }}>*</span>}
                    {label}
                </Typography>
                {children}
            </Box>
            <FormControl>
                <RadioGroup
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    row
                >
                    {items.map((item, idx) => (
                        <FormControlLabel
                            key={idx}
                            value={item.value}
                            control={<Radio name={name} />}
                            label={item.label}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

const RadioLabelButton = ({ name, onClick }) => {
    return (
        <Button variant="contained" onClick={onClick} type="button">
            {name}
        </Button>
    )
}

export const RadioInput = Object.assign(RadioInputMain, { RadioButton: RadioLabelButton })
