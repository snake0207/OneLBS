import { MuiSubButton } from '#/components/common/button/MuiButton'
import TextInput from '#/components/common/input/TextInput'
import { useGetUserIdDup } from '#/hooks/queries/user'
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
        userId: '',
    })

    const { data: apiResult } = useGetUserIdDup(queryParams, {
        enabled: isFetchState,
    })

    const handleCancel = () => {
        setOpen(false)
        onCancel()
    }

    const formik = useFormik({
        initialValues: {
            userId: '',
        },
        onSubmit: (values) => {
            setIsFetchState(true)
            setQueryParams({ ...queryParams, ...values })
        },
    })

    useEffect(() => {
        if (apiResult) {
            console.log('apiResult : ', apiResult)
            const msg = `* 조회하신 ${apiResult.data}`
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
                <Stack direction="row" mb={2} spacing={0.5}>
                    <TextInput name="userId" formik={formik} />
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
                {apiResult?.code === '0000' && (
                    <Button
                        size="large"
                        color="primary"
                        onClick={() => {
                            setOpen(false)
                            onConfirm(queryParams.userId)
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
