import { useEffect, useState } from 'react'
import { Box, FormControlLabel, Checkbox, IconButton, Typography } from '@mui/material'
import IpInput from '#/components/common/input/IpInput'
import Info from '@mui/icons-material/Info'
import { useGetUserIp } from '#/hooks/queries/auth'

import t from '#/common/libs/trans'

const IpInputGroup = ({ formik }) => {
    const [ipInputCount, setIpInputCount] = useState(0)
    const [isAutoInput, setIsAutoInput] = useState(true)

    // const { data } = useGetUserIp()
    const data = '123.123.123.123'

    const handleClickAddIPInput = () => {
        setIpInputCount((prev) => prev + 1)
    }

    useEffect(() => {
        if (isAutoInput) {
            const ipAddressList = data.split('.')
            ipAddressList.forEach((ip, idx) => {
                formik.setFieldValue(`ipAddress${idx + 1}_0`, ip)
            })
        }
    }, [isAutoInput])

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>IP
                </Typography>
                <IconButton onClick={handleClickAddIPInput} disabled={2 === ipInputCount}>
                    <Info />
                </IconButton>
            </Box>
            <Typography variant="body2">
                <span style={{ color: 'red' }}>*</span>
                {t('guide.ip_input_guide', 'auth')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <IpInput
                    ipName1={'ipAddress1_0'}
                    ipName2={'ipAddress2_0'}
                    ipName3={'ipAddress3_0'}
                    ipName4={'ipAddress4_0'}
                    ipDescription={'ipDescription_0'}
                    formik={formik}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isAutoInput}
                            onChange={() => setIsAutoInput((prev) => !prev)}
                        />
                    }
                    label={t('auto_input', 'auth')}
                    sx={{ mb: 'auto' }}
                />
            </Box>
            {Array.from({ length: ipInputCount }).map((_, idx) => (
                <IpInput
                    key={idx + 1}
                    ipName1={`ipAddress1_${idx + 1}`}
                    ipName2={`ipAddress2_${idx + 1}`}
                    ipName3={`ipAddress3_${idx + 1}`}
                    ipName4={`ipAddress4_${idx + 1}`}
                    ipDescription={`ipDescription_${idx + 1}`}
                    formik={formik}
                />
            ))}
        </>
    )
}

export default IpInputGroup
