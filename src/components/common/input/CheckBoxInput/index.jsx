import FormControlLabel from '@mui/material/FormControlLabel'
import { Checkbox, FormGroup, FormHelperText } from '@mui/material'
import { useMemo } from 'react'

const CheckBoxInput = ({ isAllExist, allLabelText, checkItems, formik, isDisabled }) => {
    const handleClickCheckBox = (index) => {
        const inputName = checkItems[index].name
        formik.setFieldValue(inputName, !formik.values[inputName])
    }

    const handleClickAllCheckBox = ({ target }) => {
        checkItems.forEach((item) => formik.setFieldValue(item.name, target.checked))
    }

    const isAllBoxCheck = useMemo(() => {
        let isAllCheck = true
        checkItems.forEach((item) => {
            if (!formik.values[item.name]) isAllCheck = formik.values[item.name]
        })
        return isAllCheck
    }, [formik])

    return (
        <>
            {isAllExist && (
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isAllBoxCheck}
                            onClick={handleClickAllCheckBox}
                            disabled={isDisabled}
                        />
                    }
                    label={allLabelText}
                />
            )}
            {checkItems.map((item, index) => {
                return (
                    <FormGroup key={index}>
                        <FormControlLabel
                            // key={index}
                            control={
                                <Checkbox
                                    name={item.name}
                                    checked={formik.values[item.name]}
                                    onClick={() => handleClickCheckBox(index)}
                                    disabled={isDisabled}
                                />
                            }
                            label={item.label + formik.values[item.name]}
                        />
                        <FormHelperText error>
                            {formik.touched[item.name] && formik.errors[item.name]}
                        </FormHelperText>
                    </FormGroup>
                )
            })}
        </>
    )
}

export default CheckBoxInput
