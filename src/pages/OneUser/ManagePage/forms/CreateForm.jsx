import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import { Box, Table, TableHead, TableRow, TableCell, Typography, Stack } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'

import TextInput from '#/components/common/input/TextInput'
import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton } from '#/components/common/button/MuiButton'
import { registUserSchema } from '#/contents/validationSchema'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'
import Select from '#/components/common/Select'
import { authTypeList } from '../authType'
import SearchPopup from './SearchPopup'
import { usePostRegistUser } from '#/hooks/queries/user'

const CreateForm = () => {
    const {
        state: { row },
    } = useLocation()
    const navigate = useNavigate()
    const [isOpenUserCheckPopup, setIsOpenUserCheckPopup] = useState(false)
    const { mutate, isPending } = usePostRegistUser()
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        msg: '입력한 정보로 저장 하시겠습니까?',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            userId: '',
            cropName: '',
            phoneNum: '',
            authType: 'O',
            ipAddr_1: '',
            ipAddr_2: '',
            ipAddr_3: '',
            ipAddr_4: '',
            ipAddr_5: '',
        },
        validationSchema: registUserSchema,
        onSubmit: (form) => {
            const ipSet = new Set([
                formik.values.ipAddr_1,
                formik.values.ipAddr_2,
                formik.values.ipAddr_3,
                formik.values.ipAddr_4,
                formik.values.ipAddr_5,
            ])
            const newArr = [...ipSet].filter((ip) => ip.length > 0)
            const apiParams = {
                userId: formik.values.userId,
                cropName: formik.values.cropName,
                phoneNum: formik.values.phoneNum,
                authType: formik.values.authType,
                ipAddr: [...newArr],
            }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('response : ', data)
                        setApiSuccess(`API RESULT : ${data?.data}(${data?.code})`)
                    },
                },
            )
        },
    })

    const handleClickSave = () => {
        setState((prevState) => ({ ...prevState, openDialog: true }))
    }

    const handleFormikSubmit = () => {
        console.log('handleFormikSubmit..')
        formik.handleSubmit()
        handleStateReset()
    }
    const handleStateReset = () => {
        setState((prevState) => ({ ...prevState, openDialog: false }))
    }

    const handleOpenUserCheckPopup = () => {
        setIsOpenUserCheckPopup(true)
    }

    return (
        <Box>
            <TitleBar title={`사용자 등록`} />
            <form style={{ width: '100%' }}>
                <Box sx={style.contentBox}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <CreateIcon />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '16px',
                                fontWeight: 500,
                                color: 'text.darkgray',
                            }}
                        >
                            {`기본 정보`}
                        </Typography>
                    </Box>
                    <Typography fontSize="small" sx={{ color: 'text.darkgray' }}>
                        <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                        {`필수 입력입니다.`}
                    </Typography>
                    <Table sx={style.table_info}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`아이디`}
                                </TableCell>
                                <TableCell component="td">
                                    <TextInput
                                        name="userId"
                                        formik={formik}
                                        editClick={handleOpenUserCheckPopup}
                                    />
                                </TableCell>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`소속`}
                                </TableCell>
                                <TableCell component="td">
                                    <TextInput name="cropName" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`전화번호`}</TableCell>
                                <TableCell component="td">
                                    <TextInput name="phoneNum" formik={formik} />
                                </TableCell>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`권한`}
                                </TableCell>
                                <TableCell component="td">
                                    <Select
                                        name={'authType'}
                                        formik={formik}
                                        items={authTypeList()}
                                        sx={{
                                            width: '100%',
                                            height: 40,
                                            backgroundColor: 'form.main',
                                            borderRadius: '4px',
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={5}>{`접속 허용 IP 목록`}</TableCell>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`ip-address-1`}
                                </TableCell>
                                <TableCell component="td" colSpan={2}>
                                    <TextInput name="ipAddr_1" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`ip-address-2`}</TableCell>
                                <TableCell component="td" colSpan={2}>
                                    <TextInput name="ipAddr_2" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`ip-address-3`}</TableCell>
                                <TableCell component="td" colSpan={2}>
                                    <TextInput name="ipAddr_3" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`ip-address-4`}</TableCell>
                                <TableCell component="td" colSpan={2}>
                                    <TextInput name="ipAddr_4" formik={formik} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`ip-address-5`}</TableCell>
                                <TableCell component="td" colSpan={2}>
                                    <TextInput name="ipAddr_5" formik={formik} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    {/* 하단 버튼 */}
                    <Box sx={{ width: '90%', justifyContent: 'flex-end' }}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <MuiMainButton
                                disabled={isPending}
                                name="list"
                                title="취소"
                                onClick={() => navigate('/user/manage/list')}
                            />
                            <MuiMainButton
                                disabled={isPending}
                                name="create"
                                title="저장"
                                onClick={handleClickSave}
                            />
                        </Stack>
                    </Box>
                </Box>
            </form>
            {state.openDialog && (
                <MuiDialog
                    isOpen={state.openDialog}
                    content={state.msg}
                    onCancel={handleStateReset}
                    onConfirm={handleFormikSubmit}
                />
            )}
            {apiSuccess && (
                <MuiAlert
                    msg={apiSuccess}
                    autoHideDuration={5000}
                    callback={() => {
                        setApiSuccess(false)
                        navigate('/user/manage/list')
                    }}
                />
            )}
            {isOpenUserCheckPopup && (
                <SearchPopup
                    isOpen={isOpenUserCheckPopup}
                    title={`사용자 아이디 중복 체크`}
                    onCancel={() => setIsOpenUserCheckPopup(false)}
                    onConfirm={(param) => {
                        setIsOpenUserCheckPopup(false)
                        formik.setFieldValue('userId', param)
                    }}
                />
            )}
        </Box>
    )
}

export default CreateForm
