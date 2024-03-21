import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Button, Typography, Box, Avatar, Stack, Divider, CardMedia } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import JoinModal from '#/components/auth/authForm/joinForm/JoinModal'
import { AUTH_STEP } from '#/contents/constant'
import { loginSchema } from '#/contents/validationSchema'
import { useGetAuthCode, useGetCaptcha, usePostLogin } from '#/hooks/queries/auth'
import { useAuthStepActions } from '#/store/useAuthStepStore'
import { getLayoutState } from '#/store/useLayoutStore'
import useOtpStore from '#/store/useOtpStore'

import {
    encryptPasswordBase64WithTime,
    encryptPasswordSHA256,
    encryptPasswordSHA256WithTime,
} from '#/common/libs/encode'

import style from './style.module'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Data } from '@react-google-maps/api'

const LoginForm = () => {
    const { changeAuthStep } = useAuthStepActions()
    const { mutate, isPending } = usePostLogin()
    const [captchaParams, setCaptchaParams] = useState({ id: Math.random() })
    const [isOpenJoinModal, setIsOpenJoinModal] = useState(false)
    const [authCodeParams, setAuthCodeParams] = useState({
        reqTime: '',
        userid: '',
    })

    const { data: respCaptcha } = useGetCaptcha(captchaParams)
    const { data: respAuthcode, isLoading } = useGetAuthCode(authCodeParams)

    console.log('respAuthcode : ', respAuthcode)
    const formik = useFormik({
        initialValues: {
            userid: '',
            password: '',
            authcode: '',
            secretText: '',
        },
        validationSchema: loginSchema,
        onSubmit: (form) => {
            // const password = encryptPasswordBase64WithTime(
            //     encryptPasswordSHA256WithTime(encryptPasswordSHA256(form.password)),
            // )
            mutate(
                { ...form },
                // { ...form, password },
                {
                    onSuccess: ({ data }) => {
                        console.log(data)
                        const { twoFactorAuth, twoFactorSecret, secretKey, qrCodeUrl } = data.fields
                        console.log(
                            'fields : ',
                            twoFactorAuth,
                            twoFactorSecret,
                            secretKey,
                            qrCodeUrl,
                        )
                        changeAuthStep(AUTH_STEP.certified)
                    },
                },
            )
        },
    })

    const handleClickFindUserId = () => {
        changeAuthStep(AUTH_STEP.findId)
    }

    const handleClickPasswordReset = () => {
        changeAuthStep(AUTH_STEP.passwordReset)
    }

    const handleClickJoin = () => {
        setIsOpenJoinModal(true)
    }

    const handleCloseJoinModal = () => {
        setIsOpenJoinModal(false)
    }

    const handleRequestAuthCode = () => {
        formik.values.userid &&
            setAuthCodeParams({
                // ...authCodeParams,
                reqTime: Date.now(),
                userid: formik.values.userid,
            })
        console.log(authCodeParams)
    }

    const { themeMode } = getLayoutState()

    console.log('respCaptcha : ', respCaptcha)
    console.log('formik : ', formik)

    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: themeMode === 'light' ? 'primary.main' : 'gray.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" sx={style.loginTitle}>
                LOGIN
            </Typography>

            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                <Typography variant="h6" sx={style.labelText}>
                    {`아이디`}
                </Typography>
                <TextInput name={'userid'} placeholder={`아이디를 입력하세요`} formik={formik} />
                <Typography variant="h6" sx={style.labelText}>
                    {`비밀번호`}
                </Typography>
                <PasswordInput
                    name={'password'}
                    placeholder={`비밀번호를 입력하세요`}
                    formik={formik}
                />
                <Typography variant="h6" sx={style.labelText}>
                    {`인증번호`}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <TextInput
                        name={'authcode'}
                        placeholder={`수신된 인증번호를 입력하세요`}
                        formik={formik}
                    />
                    <LoadingButton
                        loading={isLoading}
                        variant="contained"
                        disabled={formik.values.userid?.length ? false : true}
                        onClick={handleRequestAuthCode}
                        sx={{
                            ml: 0.5,
                            mb: 2,
                            bgcolor: 'grey.darkgray',
                            fontWeight: 400,
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}
                    >
                        {`인증번호 요청`}
                    </LoadingButton>
                </Box>
                <CardMedia
                    component="img"
                    image={respCaptcha?.data?.data}
                    sx={{ border: `1px solid grey`, mt: 3, mb: 1, height: '56px', opacity: 0.5 }}
                    alt={`보안문자`}
                />
                <TextInput
                    name={'secretText'}
                    placeholder={`화면에 보이는 문자를 입력해 주세요`}
                    formik={formik}
                />
                <Stack sx={{ alignSelf: 'end', gap: 1, mt: '30px', width: '100%' }}>
                    <LoadingButton
                        fullWidth
                        loading={isPending}
                        variant="contained"
                        type="submit"
                        sx={{
                            mb: 1,
                            bgcolor: 'primary.main',
                            fontWeight: 400,
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}
                    >
                        {`로그인`}
                    </LoadingButton>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 0.5,
                            height: 36,
                        }}
                    >
                        <Button
                            fullWidth
                            variant="text"
                            onClick={handleClickFindUserId}
                            sx={{
                                ...style.button,
                                justifyContent: 'flex-end',
                            }}
                        >
                            {`아이디 찾기`}
                        </Button>
                        <Button
                            fullWidth
                            variant="text"
                            onClick={handleClickPasswordReset}
                            sx={{
                                ...style.button,
                            }}
                        >
                            {`비밀번호 재설정`}
                        </Button>
                        <Button
                            fullWidth
                            variant="text"
                            onClick={handleClickJoin}
                            sx={{
                                ...style.button,
                                justifyContent: 'flex-start',
                            }}
                        >
                            {`회원가입`}
                        </Button>
                    </Box>
                </Stack>
            </form>
            <Typography color={'text.light'} sx={{ mt: 4, fontSize: '11px', fontStyle: 'italic' }}>
                Copyright© OneLBS Admin 2024.
            </Typography>
            <JoinModal isOpen={isOpenJoinModal} onClose={handleCloseJoinModal} />
        </>
    )
}

export default LoginForm
