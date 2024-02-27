import { useState } from 'react'
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import Select from '#/components/common/Select/index.jsx'

const EditableSelectColumn = ({ value, name, items, isEditable, formik }) => {
    console.log('ITEMS >> ', items)
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
                    alignItems: 'center',
                }}
            >
                <Typography>{items?.find((item) => item.value === value)?.label || '-'}</Typography>
                {isEditable && (
                    <Button variant={'contained'} onClick={handleClickInputButton}>
                        {isDisableInput ? '수정' : '저장'}
                    </Button>
                )}
            </Box>
            {isShowInput && (
                <Box mt={1}>
                    <Select name={name} formik={formik} items={items} disabled={isDisableInput} />
                </Box>
            )}
        </>
    )
}
export default EditableSelectColumn
