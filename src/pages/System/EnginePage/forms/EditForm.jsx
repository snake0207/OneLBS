import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
} from '@mui/material'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'

import TitleBar from '#/components/common/menu/TitleBar'
import MuiDialog from '#/components/common/popup/MuiDialog'
import { MuiMainButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import MuiAlert from '#/components/common/popup/MuiAlert'
import { engineConfig } from '#/mock/data/engine.json'
import Select from '#/components/common/Select'
import { getDataTypeList } from '#/common/libs/service'
import { useGetEngine, usePostUpdateEngine } from '#/hooks/queries/system'

const DataTypes = {
    TEXT: 0,
    CHECKBOX: 1,
    ARRAY: 2,
    UNKNOWN: 3,
}

const EditForm = () => {
    const { mutate: mutateUpdate, isPending: isUpdatePending } = usePostUpdateEngine()
    const [apiSuccess, setApiSuccess] = useState('')
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [state, setState] = useState({
        query: true,
        edit: false,
        msg: '수정한 정보로 저장 하시겠습니까?',
        openDialog: false,
    })
    const { data: apiResult, refetch } = useGetEngine(
        {},
        {
            enabled: state.query,
        },
    )

    const formik = useFormik({
        initialValues: {
            engineInfoList: [],
        },
        onSubmit: (form) => {
            console.log('handleFormikSubmit..')

            const _engineArr = fetchData?.lists.map((item) => ({
                name: item.name,
                dataType: item.dataType,
                value: item.value,
            }))

            const apiParams = {
                engineInfoList: [..._engineArr],
            }
            // console.log('onSubmit >> ', JSON.stringify(apiParams, null, 2))
            mutateUpdate(
                { ...apiParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('update-response : ', data)
                        setApiSuccess(`UPDATE API RESULT : ${data?.data}`)
                        if (data?.code === '0000') {
                            setFetchData({ count: 0, lists: [] })
                            setState((prevState) => ({
                                ...prevState,
                                query: true,
                                edit: false,
                                openDialog: false,
                            }))
                            refetch({ queryParams: {}, queryKey: 'refresh-engine' })
                        }
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
        const _count = Math.max(...fetchData?.lists.map((item) => item.id)) + 1
        const addObj = { id: _count, name: '', dataType: 'S', value: '', newFlag: 'Y' }
        setFetchData({ count: _count, lists: [...fetchData.lists, addObj] })
    }

    const handleClickCommit = () => {
        setState((prevState) => ({
            ...prevState,
            edit: true,
            openDialog: true,
        }))
    }

    const handleClickDelete = (id) => {
        console.log('Delete Row id : ', id)
        setFetchData({
            count: fetchData.count - 1,
            lists: [...fetchData.lists.filter((item) => item.id != id)],
        })
    }

    useEffect(() => {
        if (apiResult) {
            console.log('apiResult : ', apiResult)
            if (apiResult?.code === '0000') {
                setState((prevState) => ({
                    ...prevState,
                    query: false,
                }))
                setFetchData({
                    count: apiResult?.data?.length,
                    lists: [...apiResult?.data].sort((a, b) => {
                        if (a.name < b.name) return -1
                        if (a.name > b.name) return 1
                        return 0
                    }),
                })
            }
        }
    }, [apiResult, refetch])

    const retValueStyle = (dataType) => {
        const _orgDataType = dataType.toUpperCase()
        if (_orgDataType === 'S' || _orgDataType === 'I' || _orgDataType === 'D')
            return DataTypes.TEXT
        else if (_orgDataType === 'B') return DataTypes.CHECKBOX
        else if (_orgDataType === 'AS' || _orgDataType === 'AI' || _orgDataType === 'AD')
            return DataTypes.ARRAY
        else return DataTypes.UNKNOWN
    }

    const CreateTableRow = ({ idx, item }) => {
        const [rowValue, setRowValue] = useState({ ...item })

        const convertItemValue = (_item) => {
            const _convDataType = _item.dataType.toUpperCase()
            let value = ''

            if (_convDataType === 'S') {
                value = String(_item.value)
            } else if (_convDataType === 'I') {
                value = parseInt(_item.value)
            } else if (_convDataType === 'D') {
                value = parseFloat(_item.value)
            } else if (_convDataType === 'B') {
                value = _item.value ? true : false
            } else if (_convDataType === 'AS') {
                value = _item.value || ''
            } else if (_convDataType === 'AI') {
                value = _item.value || ''
            } else if (_convDataType === 'AD') {
                value = _item.value || ''
            } else {
                console.warn('Unknown dataType, check select-box list...')
            }
        }

        // 해당 자료에 대한 dataType 검사하여 해당 type으로 변환
        const handleBlurField = () => {
            console.log('handleBlur : ', item)
            // const convItem = convertItemValue(item)
            convertItemValue(item)
            const _lists = fetchData.lists.filter((data) => data.id !== item.id)
            setFetchData({
                count: fetchData.count,
                lists: [..._lists, item],
            })
        }

        // 데이터타입을 변경할 경우 값을 초기화
        const handleChangeSelectDataType = (param) => {
            const _convDataType = param.value.toUpperCase()
            console.log(`CHANGE ${item.dataType} ===> ${_convDataType}`)

            if (_convDataType === 'S') {
                item.value = String(item.value)
            } else if (_convDataType === 'I') {
                item.value = 1
            } else if (_convDataType === 'D') {
                item.value = 1.0
            } else if (_convDataType === 'B') {
                item.value = true
            } else if (_convDataType === 'AS') {
                item.value = item.value || ''
            } else if (_convDataType === 'AI') {
                item.value = 1
            } else if (_convDataType === 'AD') {
                item.value = 0.1
            }
            item.dataType = param.value
            setRowValue((prev) => ({ ...prev, dataType: item.dataType, value: item.value }))
        }

        return (
            <TableRow>
                <TableCell style={{ textAlign: 'right' }}>{item.id}</TableCell>
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
                            value={item.name}
                            onChange={(e) => {
                                item.name = e.target.value
                                setRowValue((prev) => ({ ...prev, name: e.target.value }))
                            }}
                            onBlur={handleBlurField}
                        />
                    )}
                </TableCell>
                <TableCell>
                    <Select
                        name={item.dataType}
                        items={getDataTypeList()}
                        value={item.dataType}
                        onChange={(param) => handleChangeSelectDataType(param)}
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
                            value={item.value}
                            onChange={(e) => {
                                item.value = e.target.value
                                setRowValue((prev) => ({ ...prev, value: e.target.value }))
                            }}
                            onBlur={handleBlurField}
                        />
                    )}
                    {retValueStyle(item.dataType) === DataTypes.CHECKBOX && (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={item.value}
                                    onChange={(e) => {
                                        item.value = e.target.checked
                                        setRowValue((prev) => ({
                                            ...prev,
                                            value: e.target.checked,
                                        }))
                                    }}
                                />
                            }
                            label={item.value ? '적용' : '미적용'}
                        />
                    )}
                    {retValueStyle(item.dataType) === DataTypes.ARRAY && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                id={`${item.id}`}
                                variant="outlined"
                                type="text"
                                fullWidth
                                size="small"
                                value={item.value}
                                onChange={(e) => {
                                    item.value = e.target.value
                                    setRowValue((prev) => ({ ...prev, value: e.target.value }))
                                }}
                                onBlur={handleBlurField}
                            />
                        </Box>
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
                                <TableCell style={{ width: '8%' }}>{`번호`}</TableCell>
                                <TableCell style={{ width: '40%' }}>{`설정명`}</TableCell>
                                <TableCell style={{ width: '15%' }}>{`데이터 타입`}</TableCell>
                                <TableCell style={{ width: '27%' }}>{`값`}</TableCell>
                                <TableCell style={{ width: '10%' }}>{`삭제`}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* row - 2 */}
                            {fetchData?.count > 0 &&
                                fetchData?.lists.map((item, i) => (
                                    <CreateTableRow key={item.id} idx={i} item={item} />
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
                            onClick={handleClickCommit}
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
