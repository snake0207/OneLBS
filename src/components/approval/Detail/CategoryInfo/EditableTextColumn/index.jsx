import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useState } from 'react'
import { getLayoutState } from '#/store/useLayoutStore.js'
import AlamIcon1 from '#/assets/alramIcon.svg'
import AlamIcon2 from '#/assets/alramIconDark.svg'
import IconButton from '@mui/material/IconButton'

const EditableTextColumn = ({ value, name, isEditable, formik }) => {
    const [isShowInput, setIsShowInput] = useState(false)
    const [isDisableInput, setIsDisableInput] = useState(true)
    const { themeMode } = getLayoutState()
    // 테마에 따른 아이콘, 배경색 삽입부
    const editButtonIcon = themeMode === 'light' ? AlamIcon1 : AlamIcon1
    const saveButtonIcon = themeMode === 'light' ? AlamIcon2 : AlamIcon2
    const editButtonBackground = themeMode === 'light' ? '#CFE5FF' : '#84A3C7'
    const saveButtonBackground = themeMode === 'light' ? '#002C5F' : '#00418D'

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
                    <IconButton
                        onClick={handleClickInputButton}
                        sx={{
                            backgroundColor: isDisableInput
                                ? editButtonBackground
                                : saveButtonBackground,
                        }}
                    >
                        {isDisableInput ? (
                            <img src={editButtonIcon} />
                        ) : (
                            <img src={saveButtonIcon} />
                        )}
                    </IconButton>
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
