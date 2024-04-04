import { MuiSubButton } from '#/components/common/button/MuiButton'
import TextInput from '#/components/common/input/TextInput'
import { useGetServiceCodeDup } from '#/hooks/queries/system'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'

const PaperComponent = (props) => {
    const nodeRef = useRef(null)

    return (
        <Draggable
            nodeRef={nodeRef}
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper ref={nodeRef} {...props} sx={{ minWidth: '40%' }} />
        </Draggable>
    )
}

const SearchPopup = ({ isOpen, draggable = true, title, onCancel, onConfirm }) => {
    const [open, setOpen] = useState(isOpen)
    const [message, setMessage] = useState('')
    const [isFetchState, setIsFetchState] = useState(false)
    const [queryParams, setQueryParams] = useState({
        serviceCode: '',
    })

    const { data: apiResult } = useGetServiceCodeDup(queryParams, {
        enabled: isFetchState,
    })

    const handleCancel = () => {
        setOpen(false)
        onCancel()
    }

    const formik = useFormik({
        initialValues: {
            serviceCode: '',
        },
        onSubmit: (values) => {
            setIsFetchState(true)
            setQueryParams({ ...queryParams, ...values })
        },
    })

    useEffect(() => {
        if (apiResult) {
            const msg = `* 조회하신 ${queryParams.serviceCode} 는 ${apiResult.result === '0000' ? '사용가능 합니다.' : '이미 사용중 입니다.'}`
            setMessage(msg)
            setIsFetchState(false)
        }
    }, [apiResult, isFetchState])

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
            PaperComponent={draggable && PaperComponent}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle
                id="draggable-dialog-title"
                children={<Typography sx={{ fontWeight: '500' }}>{title}</Typography>}
                style={{
                    cursor: draggable && 'move',
                    backgroundColor: `black`,
                    color: 'white',
                    marginBottom: '1rem',
                }}
            />
            <DialogContent dividers={false}>
                <Stack direction="row" mb={2}>
                    <TextInput name="serviceCode" formik={formik} />
                    <MuiSubButton name="search" title="검색" onClick={formik.handleSubmit} />
                </Stack>
                {apiResult && (
                    <Typography
                        sx={{ fontSize: '13px', fontFamily: 'italic', backgroundColor: `#ccc` }}
                    >
                        {message}
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button size="large" color="error" onClick={handleCancel}>
                    취소
                </Button>
                {apiResult?.result === '0000' && (
                    <Button
                        size="large"
                        color="primary"
                        onClick={() => {
                            setOpen(false)
                            onConfirm(queryParams.serviceCode)
                        }}
                        autoFocus
                    >
                        사용
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}

export default SearchPopup
