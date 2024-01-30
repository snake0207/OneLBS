import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import RadioInput from '#/components/common/Radio'
import IpInput from '#/components/common/input/IpInput'
import { Box, Button } from '@mui/material'
import DatePickerInput from '#/components/common/input/DatePickerInput/index.jsx'
import CheckBoxInput from '#/components/common/input/CheckBoxInput/index.jsx'
import t from '#/common/libs/trans'

const InputPage = () => {
    const formik = useFormik({
        initialValues: {
            demoInput: '',
            demoDisabled: '',
            demoPassword: '',
            demoRadio: 'demo1',
            demoRadioDisabled: 'demo1',
            demoDatePicker: null, // 기본값 X -> null
            demoDisableDatePicker: '2022-02-22', // 기본값 O -> 'YYYY-MM-DD' 형식
            demoCheck1: false, // checkbox 기본값
            demoCheck2: false,
            demoCheck3: false,
        },
        validationSchema: yup.object({
            demoInput: yup.string().required('this is required'),
            demoPassword: yup.string().required('this is required'),
            demoIp1: yup.string().required('IP 입력해 주세요'),
            demoIp2: yup.string().required('IP 입력해 주세요'),
            demoIp3: yup.string().required('IP 입력해 주세요'),
            demoIp4: yup.string().required('IP 입력해 주세요'),
            demoIpDescription: yup.string().required('설명 입력해 주세요'),
            demoCheck1: yup.boolean().isTrue(t('required', 'inputs')),
            demoCheck2: yup.boolean().isTrue(t('required', 'inputs')),
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
    const checkBoxes = [
        { name: 'demoCheck1', label: '[필수] 만 14세 이상입니다.1' },
        { name: 'demoCheck2', label: '[필수] 만 14세 이상입니다.2' },
        { name: 'demoCheck3', label: '[선택] 만 14세 이상입니다.3' },
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
            <h2>DatePicker</h2>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Box width={300}>
                    <p>default</p>
                    <DatePickerInput name={'demoDatePicker'} formik={formik} />
                </Box>
                <Box width={300}>
                    <p>disabled</p>
                    <DatePickerInput
                        name={'demoDisableDatePicker'}
                        formik={formik}
                        disabled={true}
                    />
                </Box>
            </Box>
            <h2>Check Box</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CheckBoxInput
                    isAllExist={true} // 전체항목 표기여부
                    allLabelText="전체 동의"
                    checkItems={checkBoxes}
                    formik={formik}
                    isDisabled={false}
                />
            </Box>
            <Button type={'submit'} onClick={formik.handleSubmit}>
                submit
            </Button>
        </div>
    )
}

export default InputPage
