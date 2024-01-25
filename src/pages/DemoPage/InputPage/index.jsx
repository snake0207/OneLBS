import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import * as yup from 'yup'

const InputPage = () => {
    const formik = useFormik({
        initialValues: {
            demoInput: '',
            demoDisabled: '',
            demoPassword: '',
        },
        validationSchema: yup.object({
            demoInput: yup.string().required('this is required'),
            demoPassword: yup.string().required('this is required'),
        }),
        onSubmit: (form) => {
            console.log(form)
        },
    })
    return (
        <div>
            <h1>Inputs</h1>
            <h2>TextInput</h2>
            <div style={{ width: 300 }}>
                <TextInput formik={formik} name={'demoInput'} placeholder={'demo input'} />
                <TextInput
                    formik={formik}
                    name={'demoDisabled'}
                    placeholder={'demo disabled'}
                    IsDisabled={true}
                />
            </div>
            <h2>PasswordInput</h2>
            <div style={{ width: 300 }}>
                <PasswordInput
                    formik={formik}
                    name={'demoPassword'}
                    placeholder={'demo password'}
                />
            </div>
        </div>
    )
}

export default InputPage
