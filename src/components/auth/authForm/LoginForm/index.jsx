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

import {
    encryptPasswordBase64WithTime,
    encryptPasswordSHA256,
    encryptPasswordSHA256WithTime,
} from '#/common/libs/encode'

import style from './style.module'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined'
import { useNavigate } from 'react-router-dom'

const MAX_REQ_AUTHCODE = 3

const LoginForm = () => {
    const navigate = useNavigate()
    const { changeAuthStep } = useAuthStepActions()
    const { mutate, isPending } = usePostLogin()
    const [captchaParams, setCaptchaParams] = useState({ id: Math.random() })
    const [authCodeParams, setAuthCodeParams] = useState({
        reqTime: '',
        reqData: { userid: '' },
    })
    const [state, setState] = useState({
        isOpenJoinModal: false,
        authcodeLimits: 0,
        captchaLimits: 0,
    })

    const { data: respCaptcha } = useGetCaptcha(captchaParams)
    const { data: respAuthcode, isLoading } = useGetAuthCode(authCodeParams, {
        enabled: !!authCodeParams.reqData.userid,
    })

    const formik = useFormik({
        initialValues: {
            userid: '',
            password: '',
            authcode: '',
            captchaText: '',
        },
        validationSchema: loginSchema,
        onSubmit: (form) => {
            // const password = encryptPasswordBase64WithTime(
            //     encryptPasswordSHA256WithTime(encryptPasswordSHA256(form.password)),
            // )
            const apiParams = { ...form }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutate(
                { ...apiParams },
                // { ...form, password },
                {
                    onSuccess: ({ data }) => {
                        console.log('response : ', data)
                        // data.data의 결과값을 확인 후 필요한 처리 수행
                        changeAuthStep(AUTH_STEP.certified)
                        navigate('/')
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
        // setIsOpenJoinModal(true)
        setState({ ...state, isOpenJoinModal: true })
    }

    const handleCloseJoinModal = () => {
        // setIsOpenJoinModal(false)
        setState({ ...state, isOpenJoinModal: false })
    }

    const handleRequestAuthCode = () => {
        // 인증번호 요청 건수 +1
        console.log('인증번호 요청...')
        setState({
            ...state,
            authcodeLimits: state.authcodeLimits + 1,
        })
        formik.values.userid &&
            setAuthCodeParams({
                reqTime: Date.now(),
                reqData: { userid: formik.values.userid },
            })
    }

    const handleRequestCaptcha = () => {
        console.log('보안문자 요청...')
        setCaptchaParams({ id: Math.random() })
        setState({
            ...state,
            captchaLimits: state.captchaLimits + 1,
        })
    }

    const { themeMode } = getLayoutState()

    console.log('state : ', state)
    console.log('respAuthcode : ', respAuthcode)
    // console.log('respCaptcha : ', respCaptcha)

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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box flex={1}>
                        <Typography variant="h6" sx={style.labelText}>
                            {`인증번호`}
                        </Typography>
                        <TextInput
                            name={'authcode'}
                            placeholder={`수신된 인증번호를 입력하세요`}
                            formik={formik}
                        />
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={style.labelText}>
                            {`요청 횟수 (${state.authcodeLimits}/3)`}
                        </Typography>
                        <LoadingButton
                            loading={isLoading}
                            variant="contained"
                            disabled={
                                formik.values.userid?.length &&
                                state.authcodeLimits < MAX_REQ_AUTHCODE
                                    ? false
                                    : true
                            }
                            onClick={handleRequestAuthCode}
                            sx={{ ...style.loadingButton, pt: 1.1, pb: 1.1 }}
                        >
                            {`인증번호 요청`}
                        </LoadingButton>
                    </Box>
                </Box>
                <Typography variant="h6" sx={style.labelText}>
                    {`아래 보안문자의 정보를 입력해 주세요.`}
                </Typography>
                <Stack direction="row">
                    <CardMedia
                        component="img"
                        image={respCaptcha?.data?.data}
                        sx={{
                            border: `1px solid grey`,
                            mb: 1,
                            height: '56px',
                            opacity: 0.5,
                        }}
                        alt={`보안문자`}
                    />
                    <LoadingButton
                        variant="contained"
                        disabled={state.captchaLimits < MAX_REQ_AUTHCODE ? false : true}
                        startIcon={<CachedOutlinedIcon />}
                        onClick={handleRequestCaptcha}
                        sx={style.loadingButton}
                    >
                        {`Reload`}
                    </LoadingButton>
                </Stack>
                <TextInput name={'captchaText'} placeholder={`보안문자 입력`} formik={formik} />
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
                    {/* <Box
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
                    </Box> */}
                </Stack>
            </form>
            <Typography color={'text.light'} sx={{ mt: 4, fontSize: '11px', fontStyle: 'italic' }}>
                Copyright© OneLBS Admin 2024.
            </Typography>
            <JoinModal isOpen={state.isOpenJoinModal} onClose={handleCloseJoinModal} />
        </>
    )
}

export default LoginForm
