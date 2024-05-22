import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { MuiMainButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'
import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'

import MuiAlert from '#/components/common/popup/MuiAlert'
import { useGetMenuPermission, usePostUpdatePermission } from '#/hooks/queries/user'
import style from './style.module'

const EditForm = () => {
    const navigate = useNavigate()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostUpdatePermission()
    const [apiSuccess, setApiSuccess] = useState('')
    const [state, setState] = useState({
        query: true,
        edit: false,
        msg: '수정한 정보로 저장 하시겠습니까?',
        openDialog: false,
    })
    const { data: apiResult } = useGetMenuPermission(
        {},
        {
            enabled: state.query,
        },
    )

    const formik = useFormik({
        initialValues: {
            OM10000: {},
            OM20100: {},
            OM20200: {},
            OM20300: {},
            OM20400: {},
            OM20500: {},
            OM30100: {},
            OM30200: {},
            OM30300: {},
            OM40100: {},
            OM40200: {},
            OM40300: {},
            OM40400: {},
            OM40500: {},
            OM50100: {},
            OM50200: {},
            OM50300: {},
        },
        // validationSchema: registUESchema,
        onSubmit: (form) => {
            console.log('handleFormikSubmit..')
            // 임시로 사용된 tmpModelCode 삭제
            const formikArray = Object.keys(formik.values).map((key) => formik.values[key])
            console.log('formik Array : ', formikArray)
            const apiParams = {
                targetMenuInfo: [...formikArray],
            }
            console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutateUpdate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('update-response : ', data)
                        setApiSuccess(`UPDATE API RESULT : ${data?.data}(${data?.code})`)
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
        setState((prevState) => ({
            ...prevState,
            edit: false,
            openDialog: false,
        }))
    }

    const handleClickEdit = () => {
        setState((prevState) => ({
            ...prevState,
            edit: true,
            openDialog: true,
        }))
    }

    useEffect(() => {
        if (apiResult) {
            console.log('apiResult : ', apiResult)
            if (apiResult?.code === '0000') {
                apiResult?.data.map((menu) => {
                    delete menu.menuName
                    formik.setFieldValue(menu.menuCode, { ...menu })
                })
            }
            setState((prevState) => ({
                ...prevState,
                query: false,
            }))
        }
    }, [apiResult])

    // console.log(formik.values)

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

                    <Table size="small" sx={style.table_base}>
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
                                        checked={
                                            formik.values.OM10000.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM10000.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM10000.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM10000.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM10000.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM10000.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* 서비스 현황 */}
                            <TableRow>
                                <TableCell rowSpan={5}>{`서비스 현황`}</TableCell>
                                <TableCell>{`서비스 이력 조회`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20100.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20100.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20100.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20100.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20100.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20100.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>{`서비스 통계`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20200.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20200.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20200.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20200.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20200.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20200.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>{`서비스 세부 통계`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20500.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20500.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20500.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20200.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20200.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20200.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`크라우드소싱 통계`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20300.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20300.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20300.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20300.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20300.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20300.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치 트리거 조회`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20400.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20400.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20400.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM20400.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM20400.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM20400.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>

                            {/* 측위기반 정보 관리 */}
                            <TableRow>
                                <TableCell rowSpan={3}>{`측위기반 정보 관리`}</TableCell>
                                <TableCell>{`시설정보`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM30100.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM30100.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM30100.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM30100.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM30100.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM30100.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`WiFi 시설정보`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM30200.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM30200.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM30200.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM30200.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM30200.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM30200.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`정보 현행화 이력`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM30300.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM30300.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM30300.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM30300.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM30300.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM30300.operatorYn}
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
                                        checked={
                                            formik.values.OM40100.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40100.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40100.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40100.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40100.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40100.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`단말 모델 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40200.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40200.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40200.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40200.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40200.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40200.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`엔진 설정 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40300.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40300.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40300.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40300.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40300.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40300.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치정보 처리 내역`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40400.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40400.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40400.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40400.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40400.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40400.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치이력 열람 내역`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40500.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40500.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40500.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM40500.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM40500.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM40500.operatorYn}
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
                                        checked={
                                            formik.values.OM50100.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM50100.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM50100.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM50100.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM50100.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM50100.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`권한 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM50200.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM50200.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM50200.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM50200.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM50200.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM50200.operatorYn}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`사용자 이력 관리`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM50300.adminYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM50300.adminYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM50300.adminYn}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.OM50300.operatorYn === 'Y' ? true : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'OM50300.operatorYn',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.OM50300.operatorYn}
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
