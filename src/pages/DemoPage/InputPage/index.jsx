import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import RadioInput from '#/components/common/Radio'
import IpInput from '#/components/common/input/IpInput'
import IpAddressInput from './../../../components/common/modal/auth/Join/IpAddressInput/index'

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
            demoIp1: yup.string().required('IP 입력해 주세요'),
            demoIp2: yup.string().required('IP 입력해 주세요'),
            demoIp3: yup.string().required('IP 입력해 주세요'),
            demoIp4: yup.string().required('IP 입력해 주세요'),
            demoIpDescription: yup.string().required('설명 입력해 주세요'),
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
            <h2>IPInput</h2>
            <div style={{ width: 600 }}>
                <IpInput
                    ipName1={'demoIp1'}
                    ipName2={'demoIp2'}
                    ipName3={'demoIp3'}
                    ipName4={'demoIp4'}
                    ipDescription={'demoIpDescription'}
                    formik={formik}
                />
            </div>
            <IpAddressInput />
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
