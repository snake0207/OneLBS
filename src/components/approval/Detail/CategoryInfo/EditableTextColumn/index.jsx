import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import { useState } from 'react'
import { getLayoutState } from '#/store/useLayoutStore.js'
import IconButton from '@mui/material/IconButton'

import EditIcon from '#/assets/editIcon.svg'
import EditIconDark from '#/assets/editIconDark.svg'
import SaveIcon from '#/assets/saveIcon.svg'
import SaveIconDark from '#/assets/saveIconDark.svg'

const EditableTextColumn = ({ value, name, isEditable, formik }) => {
    const [isShowInput, setIsShowInput] = useState(false)
    const [isDisableInput, setIsDisableInput] = useState(true)
    const { themeMode } = getLayoutState()
    // 테마에 따른 아이콘, 배경색 삽입부
    const editButtonIcon = themeMode === 'light' ? EditIcon : EditIconDark
    const saveButtonIcon = themeMode === 'light' ? SaveIcon : SaveIconDark
    const editButtonBackground = themeMode === 'light' ? '#CFE5FF' : '#002C5F'
    const saveButtonBackground = themeMode === 'light' ? '#002C5F' : '#002C5F'

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
                            mb: '4px',
                            backgroundColor: isDisableInput
                                ? editButtonBackground
                                : saveButtonBackground,
                        }}
                    >
                        {isDisableInput ? (
                            <img src={editButtonIcon} width={14} height={14} />
                        ) : (
                            <img src={saveButtonIcon} width={14} height={14} />
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
