import { Box, FormHelperText, TextField, Typography } from '@mui/material'

/**
 * 공통 IP Input
 * @param {string} ipName ip 1 ~ 4 formik name
 * @param {string} ipDescription ip 설명 formik name
 * @param {object} formik useformik return object
 * @returns ReactNode
 */
const IpInput = ({ ipName1, ipName2, ipName3, ipName4, ipDescription, formik }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                <TextField
                    name={ipName1}
                    value={formik.values[ipName1]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[ipName1] && !!formik.errors[ipName1]}
                    size="small"
                    type="text"
                    sx={{ width: 60, minWidth: 60 }}
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
                    sx={{ width: 60, minWidth: 60 }}
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
                    sx={{ width: 60, minWidth: 60 }}
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
                    sx={{ width: 60, minWidth: 60 }}
                />
                <TextField
                    name={ipDescription}
                    value={formik.values[ipDescription]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[ipDescription] && !!formik.errors[ipDescription]}
                    size="small"
                    type="text"
                    fullWidth
                />
            </Box>
            <FormHelperText sx={{ mt: 1, ml: 2 }} error>
                {(formik.touched[ipName1] && formik.errors[ipName1]) ||
                    (formik.touched[ipName2] && formik.errors[ipName2]) ||
                    (formik.touched[ipName3] && formik.errors[ipName3]) ||
                    (formik.touched[ipName4] && formik.errors[ipName4]) ||
                    (formik.touched[ipDescription] && formik.errors[ipDescription])}
            </FormHelperText>
        </Box>
    )
}

export default IpInput
