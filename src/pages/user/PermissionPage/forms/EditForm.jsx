import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    Stack,
    TableBody,
} from '@mui/material'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'

import TextInput from '#/components/common/input/TextInput'
import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton, MuiSubButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'
import { usePostDeleteUEs, usePostUpdateUE } from '#/hooks/queries/system'
import { registUESchema } from '#/contents/validationSchema'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'

const EditForm = () => {
    const navigate = useNavigate()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostUpdateUE()
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        edit: false,
        msg: '',
        openDialog: false,
    })

    const formik = useFormik({
        initialValues: {},
        validationSchema: registUESchema,
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
                        setApiSuccess(`UPDATE API RESULT : ${data.id}`)
                    },
                },
            )
        },
    })

    // 수정, 삭제 버튼 click시 공통으로 실행
    const handleFormikSubmit = () => {
        state.edit && formik.handleSubmit() // 수정
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

    return (
        <Box>
            <TitleBar title={`권한 관리`} />
            <form style={{ width: '100%' }}>
                <Box sx={style.contentBox}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <SettingsSuggestOutlinedIcon />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '16px',
                                fontWeight: 500,
                                color: 'text.darkgray',
                            }}
                        >
                            {`메뉴 권한 설정`}
                        </Typography>
                    </Box>

                    <Table sx={style.table_base}>
                        <TableHead>
                            {/* row - 1 */}
                            <TableRow
                                sx={{ backgroundColor: '#009ACC', position: 'sticky', top: 0 }}
                            >
                                <TableCell>{`대메뉴`}</TableCell>
                                <TableCell>{`중메뉴`}</TableCell>
                                <TableCell>{`소메뉴`}</TableCell>
                                <TableCell>{`관리자`}</TableCell>
                                <TableCell>{`운영자`}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* row - 2 */}
                            <TableRow>
                                <TableCell>{`대시보드`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* row - 3 */}
                            <TableRow>
                                <TableCell rowSpan={4}>{`서비스 현황`}</TableCell>
                                <TableCell>{`서비스 이력 조회`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`서비스 통계`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`크라우드소싱 통계`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치 트리거 조회`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* 측위기반 정보 관리 */}
                            <TableRow>
                                <TableCell rowSpan={2}>{`측위기반 정보 관리`}</TableCell>
                                <TableCell>{`시설정보`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`정보 현행화 이력`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* 시스템 관리 */}
                            <TableRow>
                                <TableCell rowSpan={5}>{`시스템 관리`}</TableCell>
                                <TableCell>{`서비스 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`단말 모델 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`엔진 설정 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치정보 처리 내역`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치이력 열람 내역`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* 사용자 관리 */}
                            <TableRow>
                                <TableCell rowSpan={4}>{`사용자 관리`}</TableCell>
                                <TableCell>{`사용자 정보 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`권한 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`사용자 이력 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msaCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msaCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msaCheck}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={formik.values.msbCheck === 'Y' ? true : false}
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'msbCheck',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.msbCheck}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    {/* 하단 버튼 */}
                    <Box align={'right'}>
                        <MuiMainButton
                            disabled={isUpdatePending}
                            name="create"
                            title="저장"
                            onClick={handleClickEdit}
                        />
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
                    callback={() => setApiSuccess(false)}
                />
            )}
        </Box>
    )
}

export default EditForm
