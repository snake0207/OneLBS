import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, renderTimeViewClock, TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { useState } from 'react'

const TimePickerInput = ({ name, formik, isDisable }) => {
    const [timeError, setTimeError] = useState(null)

    const parseNameByPath = (obj, path) => {
        const timeValue = path.split('.').reduce((acc, current) => (acc ? acc[current] : ''), obj)
        return timeValue ? dayjs(timeValue, 'HH') : null
    }

    const handleChangeTime = (newTime) => formik.setFieldValue(name, newTime?.format('HH') || null)

    const handleTimeError = (newError) =>
        newError !== 'minutesStep' ? setTimeError(newError) : setTimeError(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                name={name}
                value={parseNameByPath(formik.values, name)}
                onChange={handleChangeTime}
                onError={handleTimeError}
                disabled={isDisable}
                ampm={false}
                format={'HH'}
                views={['hours']}
                sx={{ width: '50%', backgroundColor: 'white' }}
                // viewRenderers={{
                //     hours: renderTimeViewClock,
                //     minutes: renderTimeViewClock,
                // }}
                slotProps={{
                    // field: { clearable: true, onClear: () => handleChangeTime(null) },
                    textField: {
                        helperText: timeError ? 'Time is not valid' : '',
                        size: 'small',
                    },
                }}
            />
        </LocalizationProvider>
    )
}
export default TimePickerInput
