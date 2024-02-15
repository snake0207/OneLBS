import { useState } from 'react'
import Select from '#/components/common/Select'
import { useFormik } from 'formik'
import * as yup from 'yup'

function SelectPage() {
    const items = [
        { key: 0, value: 0, label: '선택' },
        { key: 1, value: 1, label: '일반사용자' },
        { key: 2, value: 2, label: '요청자' },
        { key: 3, value: 3, label: '검토자' },
        { key: 4, value: 4, label: '승인자' },
        { key: 5, value: 5, label: '운영자' },
    ]

    const [selectedValues, setSelectedValues] = useState(0)
    const formik = useFormik({
        initialValues: {
            email: '',
            permission: 0,
        },
        validationSchema: yup.object({
            email: yup.string().email(),
            permission: yup.number(),
        }),
        onSubmit: (values) => {
            //const newValues = { ...values, permission: selectedPermitItem?.value }
            //console.log(newValues)
            console.log(values)
            setSelectedValues(values.permission)
        },
    })

    const handleChange = (item) => {
        console.log(item)
        setSelectedValues(item.value)
    }

    return (
        <div>
            <h1>Select</h1>
            <h2>With Label</h2>
            <Select
                name={'permission'}
                formik={formik}
                items={items}
                label="권한"
                onChange={(item) => handleChange(item)}
                sx={{ width: 200 }}
            />
            <h2>Without Label</h2>
            <Select
                name={'permission'}
                formik={formik}
                items={items}
                onChange={(item) => handleChange(item)}
                sx={{ width: 200 }}
            />
            <p>Selected Value: {selectedValues}</p>
        </div>
    )
}

export default SelectPage
