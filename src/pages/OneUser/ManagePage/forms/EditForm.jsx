import { useEffect, useState } from 'react'
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
import { usePostDeleteUser, usePostUpdateUser } from '#/hooks/queries/user'
import Select from '#/components/common/Select'
import { authTypeList } from '../authType'

const EditForm = () => {
    const {
        state: { row },
    } = useLocation()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const { mutate: mutateDelete, isPending: isDeletePending } = usePostDeleteUser()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostUpdateUser()
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        edit: false,
        delete: false,
        msg: '',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            userId: row?.userId,
            cropName: row?.cropName,
            authType: row?.authType,
            phoneNum: row?.phoneNum || '',
            ipAddr_1: row?.ipAddr_1 || '',
            ipAddr_2: row?.ipAddr_2 || '',
            ipAddr_3: row?.ipAddr_3 || '',
            ipAddr_4: row?.ipAddr_4 || '',
            ipAddr_5: row?.ipAddr_5 || '',
        },
        validationSchema: registUserSchema,
        onSubmit: (form) => {
            console.log('handleFormikSubmit..')
            const ipSet = new Set([
                formik.values.ipAddr_1,
                formik.values.ipAddr_2,
                formik.values.ipAddr_3,
                formik.values.ipAddr_4,
                formik.values.ipAddr_5,
            ])
            const newArr = [...ipSet].filter((ip) => ip.length > 0)
            const apiParams = {
                userId: row?.userId,
                cropName: formik.values.cropName,
                phoneNum: formik.values.phoneNum,
                authType: formik.values.authType,
                ipAddr: [...newArr],
            }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutateUpdate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('update-response : ', data)
                        setApiSuccess(`UPDATE RESULT : ${data?.data}(${data?.code})`)
                    },
                },
            )
        },
    })

    const handleDeleteSubmit = () => {
        console.log('handleDeleteSubmit...')
        mutateDelete(
            { userId: row?.userId },
            {
                onSuccess: ({ data }) => {
                    console.log('delete-response : ', data)
                    setApiSuccess(`DELETE RESULT : ${data?.data}(${data?.code})`)
                },
            },
        )
    }

    // 수정, 삭제 버튼 click시 공통으로 실행
    const handleFormikSubmit = () => {
        console.log('state : ', state)
        state.edit && formik.handleSubmit() // 수정
        state.delete && handleDeleteSubmit() // 삭제
        handleStateReset()
    }
    const handleStateReset = () => {
        setState({ edit: false, delete: false, msg: '', openDialog: false })
    }

    const handleClickEdit = () => {
        setState((prevState) => ({
            ...prevState,
            edit: true,
            msg: '수정한 정보로 저장 하시겠습니까?',
            openDialog: true,
        }))
    }

    const handleClickDelete = () => {
        setState((prevState) => ({
            ...prevState,
            delete: true,
            msg: '삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?',
            openDialog: true,
        }))
    }

    // console.log('state.row : ', row)

    return (
        <Box>
            <TitleBar title={`사용자 정보 수정`} />
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
                                    <TextInput name="userId" formik={formik} IsDisabled={true} />
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
                    <Box sx={{ width: '90%', align: 'right' }}>
                        <Stack
                            spacing={2}
                            direction="row"
                            sx={{ justifyContent: 'flex-end', mr: 2 }}
                        >
                            <MuiMainButton
                                disabled={isDeletePending || isUpdatePending}
                                name="cancel"
                                title="목록"
                                onClick={() => navigate(-1)}
                            />
                            <MuiMainButton
                                disabled={isDeletePending || isUpdatePending}
                                name="edit"
                                title="수정"
                                onClick={handleClickEdit}
                            />
                            <MuiMainButton
                                disabled={isDeletePending || isUpdatePending}
                                name="delete"
                                title="삭제"
                                onClick={handleClickDelete}
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
        </Box>
    )
}

export default EditForm
