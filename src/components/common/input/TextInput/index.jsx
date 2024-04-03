import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useEffect } from 'react'
import { extractChangedObjectOfChangedJson } from '#/common/libs/objectCheck.js'

/**
 * 일반 text 공통 Input
 * @param {string} name input formik name
 * @param {string} placeholder input placeholder
 * @param {object} formik useformik return object
 * @param {string} inputRule 입력에 대한 가이드
 * @param {boolean} IsDisabled input disabled 여부
 * @returns ReactNode
 */
const TextInput = ({
    name,
    formik,
    placeholder = null,
    inputRule = null,
    IsDisabled = false,
    editClick = null,
}) => {
    // formik 중첩구조 사용 시 value parsing 위한 함수
    const parseNameByPath = (obj, path) =>
        path.split('.').reduce((acc, current) => (acc ? acc[current] : ''), obj)

    useEffect(() => {
        // console.log(extractChangedObjectOfChangedJson(formik.initialValues, formik.values))
    }, [formik.values])

    return (
        <>
            <Box
                sx={{
                    flex: 1,
                }}
            >
                <TextField
                    name={name}
                    value={parseNameByPath(formik.values, name)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onClick={editClick}
                    error={
                        !!parseNameByPath(formik.touched, name) &&
                        !!parseNameByPath(formik.errors, name)
                    }
                    fullWidth
                    size="small"
                    type="text"
                    placeholder={placeholder}
                    helperText={
                        !!parseNameByPath(formik.touched, name) &&
                        parseNameByPath(formik.errors, name)
                    }
                    sx={{ backgroundColor: 'form.main', borderRadius: '4px', fontSize: '8px' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {!IsDisabled && parseNameByPath(formik.values, name) && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => formik.setFieldValue(name, '')}
                                    >
                                        <Close />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        ),
                    }}
                    disabled={IsDisabled}
                />
            </Box>
            {inputRule && <Typography sx={{ my: 1 }}>{inputRule}</Typography>}
        </>
    )
}

export default TextInput
