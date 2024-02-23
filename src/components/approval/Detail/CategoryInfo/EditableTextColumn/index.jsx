import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useState } from 'react'

const EditableTextColumn = ({ value, name, isEditable, formik }) => {
    const [isShowInput, setIsShowInput] = useState(false)
    const [isDisableInput, setIsDisableInput] = useState(true)

    const handleClickInputButton = () => {
        setIsShowInput(true)
        setIsDisableInput(!isDisableInput)
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant={'body2'}>{value || '-'}</Typography>
                {isEditable && (
                    <Button variant={'contained'} onClick={handleClickInputButton}>
                        {isDisableInput ? '수정' : '저장'}
                    </Button>
                )}
            </Box>
            {isShowInput && (
                <Box mt={1}>
                    <TextInput
                        formik={formik}
                        name={name}
                        IsDisabled={isDisableInput}
                        placeholder={'명칭을 입력하세요'}
                    />
                </Box>
            )}
        </>
    )
}
export default EditableTextColumn
