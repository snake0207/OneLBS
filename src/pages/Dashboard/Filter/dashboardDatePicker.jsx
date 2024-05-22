import DatePickerIcon from '#/assets/datePickerIcon.svg'
import DatePickerIconDark from '#/assets/datePickerIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'
import { Box } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useState } from 'react'

function MuiIcon() {
    const { themeMode } = useLayoutStore()
    return (
        <Box sx={{}}>
            {themeMode === 'light' ? (
                <img src={DatePickerIcon} />
            ) : (
                <img src={DatePickerIconDark} />
            )}
        </Box>
    )
}

const DatePickerInput = ({ name, formik, disabled = false, onChange }) => {
    const [dateError, setDateError] = useState(null)

    const stringToDayFormat = (stringDate) => (stringDate ? dayjs(stringDate) : null)

    const handleChangeDate = (newDate) => {
        const date = newDate?.format('YYYY-MM-DD')
        formik.setFieldValue(name, date || null)
        onChange(date)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                name={name}
                value={stringToDayFormat(formik.values[name])}
                onChange={handleChangeDate}
                onError={(newError) => setDateError(newError)}
                format="YYYY-MM-DD"
                disabled={disabled}
                sx={{ width: '100%', backgroundColor: 'form.main', borderRadius: '4px' }}
                slots={{ openPickerIcon: MuiIcon }}
                slotProps={{
                    field: { clearable: true, onClear: () => handleChangeDate(null) },
                    textField: {
                        helperText: dateError ? 'Date is not valid' : '',
                        size: 'small',
                    },
                }}
            />
        </LocalizationProvider>
    )
}

export default DatePickerInput
