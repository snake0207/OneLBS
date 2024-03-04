import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useState } from 'react'
import { getLayoutState } from '#/store/useLayoutStore.js'
import AlamIcon1 from '#/assets/alramIcon.svg'
import AlamIcon2 from '#/assets/alramIconDark.svg'

const EditableTextColumn = ({ value, name, isEditable, formik }) => {
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
                <Typography>{value || '-'}</Typography>
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
                <Box>
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
