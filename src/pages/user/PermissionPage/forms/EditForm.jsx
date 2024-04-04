import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import { Box, Table, TableHead, TableRow, TableCell, Typography, TableBody } from '@mui/material'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'

import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'
import { useGetMenuPermission, usePostUpdatePermission } from '#/hooks/queries/user'

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

    const findObject = (arrs, objKey) => {
        return arrs.find((arr) => arr.key === objKey)
    }

    const formik = useFormik({
        initialValues: {
            L100_M000_S000: { admin: '', operator: '' },
            L200_M210_S000: { admin: '', operator: '' },
            L200_M220_S000: { admin: '', operator: '' },
            L200_M230_S000: { admin: '', operator: '' },
            L200_M240_S000: { admin: '', operator: '' },
            L300_M310_S000: { admin: '', operator: '' },
            L300_M320_S000: { admin: '', operator: '' },
            L400_M410_S000: { admin: '', operator: '' },
            L400_M420_S000: { admin: '', operator: '' },
            L400_M430_S000: { admin: '', operator: '' },
            L400_M440_S000: { admin: '', operator: '' },
            L400_M450_S000: { admin: '', operator: '' },
            L500_M510_S000: { admin: '', operator: '' },
            L500_M520_S000: { admin: '', operator: '' },
            L500_M530_S000: { admin: '', operator: '' },
        },
        // validationSchema: registUESchema,
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
            apiResult.menus.map((menu) =>
                formik.setFieldValue(menu.key, findObject(apiResult?.menus, menu.key).value),
            )
            setState((prevState) => ({
                ...prevState,
                query: false,
            }))
        }
    }, [apiResult])

    console.log(formik.values)

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
                                <TableCell>{`대시보드_100`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L100_M000_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L100_M000_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L100_M000_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L100_M000_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L100_M000_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L100_M000_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* 서비스 현황 */}
                            <TableRow>
                                <TableCell rowSpan={4}>{`서비스 현황_200`}</TableCell>
                                <TableCell>{`서비스 이력 조회_210`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M210_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M210_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M210_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M210_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M210_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M210_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치 트리거 조회_220`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M220_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M220_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M220_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M220_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M220_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M220_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`서비스 통계_230`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M230_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M230_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M230_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M230_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M230_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M230_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`크라우드소싱 통계_240`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M240_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M240_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M240_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L200_M240_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L200_M240_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L200_M240_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>

                            {/* 측위기반 정보 관리 */}
                            <TableRow>
                                <TableCell rowSpan={2}>{`측위기반 정보 관리_300`}</TableCell>
                                <TableCell>{`시설정보_310`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L300_M310_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L300_M310_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L300_M310_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L300_M310_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L300_M310_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L300_M310_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`정보 현행화 이력_320`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L300_M320_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L300_M320_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L300_M320_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L300_M320_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L300_M320_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L300_M320_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* 시스템 관리 */}
                            <TableRow>
                                <TableCell rowSpan={5}>{`시스템 관리_400`}</TableCell>
                                <TableCell>{`서비스 관리_410`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M410_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M410_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M410_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M410_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M410_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M410_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`단말 모델 관리_420`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M420_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M420_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M420_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M420_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M420_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M420_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`엔진 설정 관리_430`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M430_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M430_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M430_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M430_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M430_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M430_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치정보 처리 내역_440`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M440_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M440_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M440_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M440_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M440_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M440_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`위치이력 열람 내역_450`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M450_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M450_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M450_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L400_M450_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L400_M450_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L400_M450_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* 사용자 관리 */}
                            <TableRow>
                                <TableCell rowSpan={4}>{`사용자 관리_500`}</TableCell>
                                <TableCell>{`사용자 정보 관리_510`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L500_M510_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L500_M510_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L500_M510_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L500_M510_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L500_M510_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L500_M510_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`권한 관리_520`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L500_M520_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L500_M520_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L500_M520_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L500_M520_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L500_M520_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L500_M520_S000.operator}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{`사용자 이력 관리_530`}</TableCell>
                                <TableCell>{``}</TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L500_M530_S000.admin === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L500_M530_S000.admin',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L500_M530_S000.admin}
                                    />
                                </TableCell>
                                <TableCell component="td" sx={style.center}>
                                    <CheckBox
                                        checked={
                                            formik.values.L500_M530_S000.operator === 'Y'
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            formik.setFieldValue(
                                                'L500_M530_S000.operator',
                                                e.target.value === 'Y' ? 'N' : 'Y',
                                            )
                                        }}
                                        value={formik.values.L500_M530_S000.operator}
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
