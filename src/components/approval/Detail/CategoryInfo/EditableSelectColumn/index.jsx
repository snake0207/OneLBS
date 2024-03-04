import { useState } from 'react'
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import Select from '#/components/common/Select/index.jsx'
import AlamIcon1 from '#/assets/alramIcon.svg'
import AlamIcon2 from '#/assets/alramIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore.js'

const EditableSelectColumn = ({ value, name, items, isEditable, formik }) => {
    const [isShowInput, setIsShowInput] = useState(false)
    const [isDisableInput, setIsDisableInput] = useState(true)
    const { themeMode } = getLayoutState()
    // 테마에 따른 아이콘 삽입부
    const editButtonIcon = themeMode === 'light' ? AlamIcon1 : AlamIcon1
    const saveButtonIcon = themeMode === 'light' ? AlamIcon2 : AlamIcon2

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
                    <Button
                        variant={'contained'}
                        onClick={handleClickInputButton}
                        // 하단에 테마에 따른 버튼 배경색 설정한 스타일명 삽입
                        sx={{ backgroundColor: isDisableInput ? '#fff' : '#000' }}
                    >
                        {isDisableInput ? (
                            <img src={editButtonIcon} />
                        ) : (
                            <img src={saveButtonIcon} />
                        )}
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
