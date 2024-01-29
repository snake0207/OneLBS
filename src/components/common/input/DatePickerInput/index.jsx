import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { useState } from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DatePickerInput = ({ name, formik, disabled = false }) => {
    const [dateError, setDateError] = useState(null)

    const stringToDayFormat = (stringDate) => (stringDate ? dayjs(stringDate) : null)

    const handleChangeDate = (newDate) =>
        formik.setFieldValue(name, newDate?.format('YYYY-MM-DD') || null)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                name={name}
                value={stringToDayFormat(formik.values[name])}
                onChange={handleChangeDate}
                onError={(newError) => setDateError(newError)}
                format="YYYY-MM-DD"
                disabled={disabled}
                sx={{ width: '100%' }}
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
