import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    IconButton,
    Button,
    TextField,
} from '@mui/material'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'

import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton } from '#/components/common/button/MuiButton'
import CheckBox from '#/components/common/input/CheckBox'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'
import { useGetMenuPermission, usePostUpdatePermission } from '#/hooks/queries/user'
import { engineConfig } from '#/mock/data/engine.json'
import TextInput from '#/components/common/input/TextInput'
import Select from '#/components/common/Select'
import { getDataTypeLabel, getDataTypeList } from '#/common/libs/service'

const DataTypes = {
    TEXT: 0,
    CHECKBOX: 1,
    ARRAY: 2,
    UNKNOWN: 3,
}

const EditForm = () => {
    const navigate = useNavigate()
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostUpdatePermission()
    const [apiSuccess, setApiSuccess] = useState('')
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
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
            configList: [],
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

    const handleClickAdd = () => {
        console.log('Add New Row')
        const _count = fetchData.count + 1
        const addObj = { id: _count, name: '', dataType: 'S', value: '', newFlag: 'Y' }
        setFetchData({ count: _count, lists: [...fetchData.lists, addObj] })
    }

    const handleClickEdit = () => {
        setState((prevState) => ({
            ...prevState,
            edit: true,
            openDialog: true,
        }))
    }

    const handleClickDelete = (id) => {
        console.log('Delete Row id : ', id)
        console.log(
            'target : ',
            fetchData.lists.filter((item) => item.id === id),
        )
        // setFetchData({ count: fetchData.count - 1, lists: [...fetchData.lists.map(item => item.id != id)]})
    }

    useEffect(() => {
        // if (apiResult) {
        //     console.log('apiResult : ', apiResult)
        //     if (apiResult?.code === '0000') {
        //         apiResult?.data.map((menu) => {
        //             delete menu.menuName
        //             formik.setFieldValue(menu.menuCode, { ...menu })
        //         })
        //     }
        //     setState((prevState) => ({
        //         ...prevState,
        //         query: false,
        //     }))
        // }
        if (apiResult) {
            console.log(engineConfig)
            setFetchData({ count: engineConfig.length, lists: [...engineConfig] })
        }
    }, [apiResult])

    console.log('fetchData : ', fetchData)

    const retValueStyle = (dataType) => {
        const _dataType = dataType.toUpperCase()
        if (_dataType === 'S' || _dataType === 'I' || _dataType === 'D') return DataTypes.TEXT
        else if (_dataType === 'B') return DataTypes.CHECKBOX
        else if (_dataType === 'AS' || _dataType === 'AI' || _dataType === 'AD')
            return DataTypes.ARRAY
        else return DataTypes.UNKNOWN
    }
    // console.log(formik.values)
    const TableRowDraw = ({ idx, item }) => {
        const [value, setValue] = useState('')
        const [nameValue, setNameValue] = useState('')
        const [selected, setSelected] = useState(0)

        const handleChangeNameField = (e) => {
            setNameValue(e.target.value)
            console.log('before : ', JSON.stringify(fetchData.lists))
            const _changeItem = { ...item, name: e.target.value }
            console.log('Name changeitem : ', _changeItem)

            // const _lists = fetchData.lists.filter((data) => data.id !== item.id)
            // console.log('remove list : ', JSON.stringify(_lists))
            // setFetchData((prevState) => ({ ...prevState, lists: [..._lists, _changeItem] }))
            // console.log('after : ', JSON.stringify(fetchData.lists))
        }

        const handleChangeValueField = (e) => {
            setValue(e.target.value)
            console.log('before : ', JSON.stringify(fetchData.lists))
            const _changeItem = { ...item, value: e.target.value }
            console.log('Value changeitem : ', _changeItem)
        }

        return (
            <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                    {item.newFlag !== 'Y' ? (
                        item.name
                    ) : (
                        <TextField
                            id={`${item.id}`}
                            variant="outlined"
                            type="text"
                            fullWidth
                            size="small"
                            value={nameValue}
                            onChange={handleChangeNameField}
                        />
                    )}
                </TableCell>
                <TableCell>
                    <Select
                        name={item.dataType}
                        items={getDataTypeList()}
                        value={item.dataType}
                        // onChange={(param) => console.log(param)}
                        style={{
                            height: '40px',
                            width: '100%',
                            fontSize: 14,
                            backgroundColor: 'form.main',
                            borderRadius: '4px',
                        }}
                    />
                </TableCell>
                <TableCell>
                    {retValueStyle(item.dataType) === DataTypes.TEXT && (
                        <TextField
                            id={`${item.id}`}
                            variant="outlined"
                            type="text"
                            fullWidth
                            size="small"
                            value={value}
                            onChange={handleChangeValueField}
                        />
                    )}
                    {retValueStyle(item.dataType) === DataTypes.CHECKBOX && (
                        <CheckBox
                            checked={item.value === 'Y' ? true : false}
                            onChange={(e) => (e.target.value === 'Y' ? 'N' : 'Y')}
                            label={item.value === 'Y' ? '적용' : '미적용'}
                            value={item.value}
                        />
                    )}
                    {retValueStyle(item.dataType) === DataTypes.ARRAY && (
                        <TextField
                            id={`${item.id}`}
                            variant="outlined"
                            type="text"
                            fullWidth
                            size="small"
                            value={value}
                            rows={5}
                            onChange={handleChangeValueField}
                            sx={{ height: '400px' }}
                        />
                    )}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                    <Button
                        variant={`text`}
                        sx={{ color: 'red' }}
                        onClick={() => handleClickDelete(item.id)}
                    >
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <Box>
            <TitleBar title={`엔진 설정 관리`} />
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
                            {`엔진 환경 설정`}
                        </Typography>
                    </Box>

                    <Table size="small" sx={style.table_base}>
                        <TableHead>
                            {/* row - 1 */}
                            <TableRow
                                sx={{ backgroundColor: '#009ACC', position: 'sticky', top: 0 }}
                            >
                                <TableCell sx={{ width: '8%' }}>{`번호`}</TableCell>
                                <TableCell sx={{ width: '47%' }}>{`설정명`}</TableCell>
                                <TableCell sx={{ width: '15%' }}>{`데이터 타입`}</TableCell>
                                <TableCell sx={{ width: '20%' }}>{`값`}</TableCell>
                                <TableCell sx={{ width: '10%' }}>{`삭제`}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* row - 2 */}
                            {fetchData?.count > 0 &&
                                fetchData?.lists.map((item, i) => (
                                    <TableRowDraw key={item.id} idx={i} item={item} />
                                ))}
                        </TableBody>
                    </Table>

                    {/* 하단 버튼 */}
                    <Box
                        align={'right'}
                        display={`flex`}
                        justifyContent={`flex-end`}
                        alignItems={`center`}
                    >
                        <MuiMainButton
                            disabled={isUpdatePending}
                            name="add"
                            title="설정 추가"
                            onClick={handleClickAdd}
                        />
                        <MuiMainButton
                            disabled={isUpdatePending}
                            name="create"
                            title="설정 저장"
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
