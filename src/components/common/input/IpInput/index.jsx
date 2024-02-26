import { Box, FormHelperText, TextField, Typography } from '@mui/material'
import { isMobile } from 'react-device-detect'

/**
 * 공통 IP Input 메인 컴포넌트
 * @param {ReactNode} children 서브 컴포넌트
 * @param {string} ipName ip 1 ~ 4 formik name
 * @param {object} formik useformik return object
 * @returns ReactNode
 */
const IpInputMain = ({ children, ipName1, ipName2, ipName3, ipName4, formik }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 1,
                    flexWrap: isMobile ? 'wrap' : '',
                }}
            >
                <TextField
                    name={ipName1}
                    value={formik.values[ipName1]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[ipName1] && !!formik.errors[ipName1]}
                    size="small"
                    type="text"
                    sx={{
                        width: 60,
                        minWidth: 60,
                        backgroundColor: 'form.main',
                        borderRadius: '4px',
                    }}
                />
                <Typography sx={{ fontWeight: 700 }}>.</Typography>
                <TextField
                    name={ipName2}
                    value={formik.values[ipName2]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[ipName2] && !!formik.errors[ipName2]}
                    size="small"
                    type="text"
                    sx={{
                        width: 60,
                        minWidth: 60,
                        backgroundColor: 'form.main',
                        borderRadius: '4px',
                    }}
                />
                <Typography sx={{ fontWeight: 700 }}>.</Typography>
                <TextField
                    name={ipName3}
                    value={formik.values[ipName3]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[ipName3] && !!formik.errors[ipName3]}
                    size="small"
                    type="text"
                    sx={{
                        width: 60,
                        minWidth: 60,
                        backgroundColor: 'form.main',
                        borderRadius: '4px',
                    }}
                />
                <Typography sx={{ fontWeight: 700 }}>.</Typography>
                <TextField
                    name={ipName4}
                    value={formik.values[ipName4]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[ipName4] && !!formik.errors[ipName4]}
                    size="small"
                    type="text"
                    sx={{
                        width: 60,
                        minWidth: 60,
                        backgroundColor: 'form.main',
                        borderRadius: '4px',
                    }}
                />
                {children}
            </Box>
            <FormHelperText sx={{ mt: 1, ml: 2 }} error>
                {(formik.touched[ipName1] && formik.errors[ipName1]) ||
                    (formik.touched[ipName2] && formik.errors[ipName2]) ||
                    (formik.touched[ipName3] && formik.errors[ipName3]) ||
                    (formik.touched[ipName4] && formik.errors[ipName4])}
            </FormHelperText>
        </Box>
    )
}

/**
 * IP 설명 Input 서브 컴포넌트
 * @param {object} formik useformik return object
 * @param {string} ipDescription ip 설명 formik name
 * @returns ReactNode
 */
const IpDescriptionInput = ({ formik, ipDescName }) => {
    return (
        <TextField
            name={ipDescName}
            value={formik.values[ipDescName]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[ipDescName] && !!formik.errors[ipDescName]}
            size="small"
            type="text"
            fullWidth
            sx={{ backgroundColor: 'form.main', borderRadius: '4px' }}
        />
    )
}

export const IpInput = Object.assign(IpInputMain, { IpDescription: IpDescriptionInput })
