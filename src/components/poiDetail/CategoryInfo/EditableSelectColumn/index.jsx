import { useState } from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Select from '#/components/common/Select/index.jsx'
import { getLayoutState } from '#/store/useLayoutStore.js'
import IconButton from '@mui/material/IconButton'

import EditIcon from '#/assets/editIcon.svg'
import EditIconDark from '#/assets/editIconDark.svg'
import SaveIcon from '#/assets/saveIcon.svg'
import SaveIconDark from '#/assets/saveIconDark.svg'

const EditableSelectColumn = ({ value, name, items, isEditable, formik }) => {
    const [isShowInput, setIsShowInput] = useState(false)
    const [isDisableInput, setIsDisableInput] = useState(true)
    const { themeMode } = getLayoutState()
    // 테마에 따른 아이콘, 배경색 삽입부
    const editButtonIcon = themeMode === 'light' ? EditIcon : EditIconDark
    const saveButtonIcon = themeMode === 'light' ? SaveIcon : SaveIconDark
    const editButtonBackground = themeMode === 'light' ? '#CFE5FF' : '#002C5F'
    const saveButtonBackground = themeMode === 'light' ? '#002C5F' : '#0057BB'

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
                    <IconButton
                        onClick={handleClickInputButton}
                        sx={{
                            mb: '4px',
                            backgroundColor: isDisableInput
                                ? editButtonBackground
                                : saveButtonBackground,
                            '&:hover': {
                                backgroundColor: isDisableInput
                                    ? editButtonBackground
                                    : saveButtonBackground,
                            },
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
                <Box
                    sx={{
                        width: '100%',
                        mt: '8px',
                        '& .MuiFormControl-root': {
                            height: '40px',
                            width: '100%',
                            '& .MuiSelect-select ': {
                                p: '8.5px 14px',
                            },
                        },
                    }}
                >
                    <Select
                        name={name}
                        formik={formik}
                        value={value}
                        items={items}
                        disabled={isDisableInput}
                    />
                </Box>
            )}
        </>
    )
}
export default EditableSelectColumn
