import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import RadioInput from '#/components/common/radio'

const InputPage = () => {
    const formik = useFormik({
        initialValues: {
            demoInput: '',
            demoDisabled: '',
            demoPassword: '',
            demoRadio: 'demo1',
            demoRadioDisabled: 'demo1',
        },
        validationSchema: yup.object({
            demoInput: yup.string().required('this is required'),
            demoPassword: yup.string().required('this is required'),
        }),
        onSubmit: (form) => {
            console.log(form)
        },
    })
    const radioList = [
        { label: 'demo1', value: 'demo1' },
        { label: 'demo2', value: 'demo2' },
        { label: 'demo3', value: 'demo3' },
    ]
    return (
        <div>
            <h1>Inputs</h1>
            <h2>TextInput</h2>
            <div style={{ display: 'flex', gap: 100 }}>
                <div style={{ width: 300 }}>
                    <p>default</p>
                    <TextInput formik={formik} name={'demoInput'} placeholder={'demo input'} />
                </div>
                <div style={{ width: 300 }}>
                    <p>disabled</p>
                    <TextInput
                        formik={formik}
                        name={'demoDisabled'}
                        placeholder={'demo disabled'}
                        IsDisabled={true}
                    />
                </div>
            </div>
            <h2>PasswordInput</h2>
            <p>default</p>
            <div style={{ width: 300 }}>
                <PasswordInput
                    formik={formik}
                    name={'demoPassword'}
                    placeholder={'demo password'}
                />
            </div>
            <h2>Radio</h2>
            <div style={{ display: 'flex', gap: 100 }}>
                <div>
                    <p>default</p>
                    <RadioInput radioList={radioList} name={'demoRadio'} formik={formik} />
                </div>
                <div>
                    <p>disabled</p>
                    <RadioInput
                        radioList={radioList}
                        name={'demoRadioDisabled'}
                        formik={formik}
                        isDisabled={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default InputPage
