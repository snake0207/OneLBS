import { useField } from 'formik'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

/**
 * FormikProvider TimePicker 공통 Input
 * @param name input formik name
 * @param dateFormat ex) 'HH:mm' or 'hh:mm a'
 * @param isAmPm ampm 여부
 * @param IsDisabled input disabled 여부
 * @returns {JSX.Element}
 *
 * 사용예
 * const formik = useFormik({
 *     initialValues: {},
 *     onSubmit: (form) => {
 *     },
 * })
 * <FormikProvider value={formik}>
 *     <FormikTimePickerInput name={'name'} ... />
 * </FormikProvider>
 */
const FormikTimePickerInput = ({
    name,
    dateFormat = 'HH:mm',
    isAmPm = false,
    IsDisabled = false,
}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                name={name}
                value={dayjs(field.value, dateFormat)}
                onChange={(value) => helpers.setValue(value.format(dateFormat))}
                error={!!meta.error}
                helperText={meta.touched && meta.error}
                disabled={IsDisabled}
                ampm={isAmPm}
                format={dateFormat}
                slotProps={{
                    textField: {
                        size: 'small',
                        fullWidth: true,
                    },
                }}
            />
        </LocalizationProvider>
    )
}

export default FormikTimePickerInput
