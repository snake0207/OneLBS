import CreateIcon from '@mui/icons-material/Create'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'

import { MuiMainButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'
import TextInput from '#/components/common/input/TextInput'
import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { deleteUpdateUESchema } from '#/contents/validationSchema'
import { usePostDeleteUEs, usePostUpdateUE } from '#/hooks/queries/system'

import MuiAlert from '#/components/common/popup/MuiAlert'
import style from './style.module'

const EditForm = () => {
    const {
        state: { row },
    } = useLocation()
    const navigate = useNavigate()
    // 수정을 위해 key 값인 id를 추가해 준다. 삭제 시 활용
    const { mutate: mutateDelete, isPending: isDeletePending } = usePostDeleteUEs()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostUpdateUE()
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        edit: false,
        delete: false,
        msg: '',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {
            modelCode: row?.modelCode,
            note: row?.note,
            posConfig: {
                cellConfig: {
                    lpp: row?.posConfig.cellConfig.lpp || 'N',
                    lppa: row?.posConfig.cellConfig.lppa || 'N',
                },
                gnssConfig: {
                    msa: row?.posConfig?.gnssConfig?.msa || 'N',
                    msb: row?.posConfig?.gnssConfig?.msb || 'N',
                    cp: row?.posConfig?.gnssConfig?.cp || 'N',
                    lppe: row?.posConfig?.gnssConfig?.lppe || 'N',
                    suplVer: row?.posConfig?.gnssConfig?.suplVer,
                    tls: row?.posConfig?.gnssConfig?.tls || 'N',
                    emergencyFlag: row?.posConfig?.gnssConfig?.emergencyFlag || 'N',
                },
                ksaConfig: {
                    ver: row?.posConfig?.ksaConfig?.ver || 0,
                },
            },
        },
        validationSchema: deleteUpdateUESchema,
        onSubmit: (form) => {
            console.log('handleFormikSubmit..')
            const apiParams = {
                ...form,
            }
            // 임시로 사용된 tmpModelCode 삭제
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutateUpdate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('update-response : ', data)
                        setApiSuccess(`UPDATE API RESULT : ${data?.data}`)
                    },
                },
            )
        },
    })

    const handleDeleteSubmit = () => {
        console.log('handleDeleteSubmit...')
        mutateDelete(
            { modelCode: [row?.modelCode] },
            {
                onSuccess: ({ data }) => {
                    console.log('delete-response : ', data)
                    setApiSuccess(`DELETE API RESULT : ${data?.data}`)
                },
            },
        )
    }

    // 수정, 삭제 버튼 click시 공통으로 실행
    const handleFormikSubmit = () => {
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
            <TitleBar title={`단말 모델 정보 수정`} />
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
                                    {`모델 코드`}
                                </TableCell>
                                <TableCell component="td" colSpan={3}>
                                    <TextInput name="modelCode" formik={formik} IsDisabled />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`비고`}</TableCell>
                                <TableCell component="td" colSpan={3}>
                                    <TextInput name="note" formik={formik} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    {/* 측위 기능 설정 */}
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
                            {`측위 기능 설정`}
                        </Typography>
                    </Box>
                    <Typography fontSize="small" sx={{ color: 'text.darkgray' }}>
                        <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                        {`필수 입력입니다.`}
                    </Typography>

                    <Table sx={style.table_set_option}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{`기지국측위`}</TableCell>
                                <TableCell>{`LPP-ECID`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.cellConfig.lpp === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.cellConfig.lpp',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.cellConfig.lpp === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.cellConfig.lpp}
                                    />
                                </TableCell>
                                <TableCell>{`LPPa-ECID`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.cellConfig.lppa === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.cellConfig.lppa',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.cellConfig.lppa === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.cellConfig.lppa}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={4}>{`위성 측위`}</TableCell>
                                <TableCell>{`MSA`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.msa === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.msa',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.msa === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.msa}
                                    />
                                </TableCell>
                                <TableCell>{`MSB`}</TableCell>
                                <TableCell component="td">
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.msb === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.msb',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.msb === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.msb}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`CP`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.cp === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.cp',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.cp === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.cp}
                                    />
                                </TableCell>
                                <TableCell>{`LPPe`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.lppe === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.lppe',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.lppe === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.lppe}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`SUPL ver`}
                                </TableCell>
                                <TableCell>
                                    <TextInput
                                        name="posConfig.gnssConfig.suplVer"
                                        formik={formik}
                                    />
                                </TableCell>
                                <TableCell>{`SUPL TLS`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.tls === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.tls',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.tls === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.tls}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`SUPL Emergency Flag`}</TableCell>
                                <TableCell>
                                    <CheckBox
                                        checked={
                                            formik.values.posConfig.gnssConfig.emergencyFlag === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'posConfig.gnssConfig.emergencyFlag',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        label={
                                            formik.values.posConfig.gnssConfig.emergencyFlag === 'Y'
                                                ? '적용'
                                                : '미적용'
                                        }
                                        value={formik.values.posConfig.gnssConfig.emergencyFlag}
                                    />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={3}>{`KSA`}</TableCell>
                                <TableCell>
                                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                                    {`Ver`}
                                </TableCell>
                                <TableCell>
                                    <TextInput name="posConfig.ksaConfig.ver" formik={formik} />
                                </TableCell>
                                <TableCell colSpan={2}></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    {/* 하단 버튼 */}
                    <Box align={'right'}>
                        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                            <MuiMainButton
                                disabled={isDeletePending || isUpdatePending}
                                name="cancel"
                                title="목록"
                                onClick={() => navigate('/system/ue/list')}
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
                    autoHideDuration={3000}
                    callback={() => {
                        setApiSuccess('')
                        navigate('/system/ue/list')
                    }}
                />
            )}
        </Box>
    )
}

export default EditForm
