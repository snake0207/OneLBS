import { useEffect, useState } from 'react'
import { Box, FormControlLabel, Checkbox, Typography, Button } from '@mui/material'
import { IpInput } from '#/components/common/input/IpInput'
import { BrowserView } from 'react-device-detect'

import t from '#/common/libs/trans'

import style from './style.module'

const IpInputGroup = ({ formik }) => {
    const [ipInputCount, setIpInputCount] = useState(0)

    // const { data } = useGetUserIp()
    const data = '123.123.123.123'

    const handleClickAddIPInput = () => {
        setIpInputCount((prev) => prev + 1)
    }

    useEffect(() => {
        if (formik.values.isIpAutoAdd) {
            const ipAddressList = data.split('.')
            ipAddressList.forEach((ip, idx) => {
                formik.setFieldValue(`ipAddress${idx + 1}_0`, ip)
            })
        } else {
            for (let idx = 0; idx < 4; idx++) {
                formik.setFieldValue(`ipAddress${idx + 1}_0`, '')
            }
        }
    }, [formik.values.isIpAutoAdd])

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="button" component="p" sx={{ mt: 1 }}>
                    <span style={{ color: 'red' }}>*</span>IP
                </Typography>
                <Button
                    onClick={handleClickAddIPInput}
                    disabled={2 === ipInputCount}
                    sx={style.btnDetaile}
                >
                    {t('add', 'auth')}
                </Button>
            </Box>
            <Typography variant="body2">{t('guide.ip_input_guide', 'auth')}</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <IpInput
                    ipName1={'ipAddress1_0'}
                    ipName2={'ipAddress2_0'}
                    ipName3={'ipAddress3_0'}
                    ipName4={'ipAddress4_0'}
                    formik={formik}
                >
                    <IpInput.IpDescription formik={formik} ipDescName={'ipDescription_0'} />
                </IpInput>
                <BrowserView>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="isIpAutoAdd"
                                value={formik.values.isIpAutoAdd}
                                onChange={formik.handleChange}
                                checked={formik.values.isIpAutoAdd}
                            />
                        }
                        label={t('auto_input', 'auth')}
                        sx={{ mb: 'auto' }}
                    />
                </BrowserView>
            </Box>
            {Array.from({ length: ipInputCount }).map((_, idx) => (
                <IpInput
                    key={idx + 1}
                    ipName1={`ipAddress1_${idx + 1}`}
                    ipName2={`ipAddress2_${idx + 1}`}
                    ipName3={`ipAddress3_${idx + 1}`}
                    ipName4={`ipAddress4_${idx + 1}`}
                    formik={formik}
                >
                    <IpInput.IpDescription
                        formik={formik}
                        ipDescName={`ipDescription_${idx + 1}`}
                    />
                </IpInput>
            ))}
        </>
    )
}

export default IpInputGroup
