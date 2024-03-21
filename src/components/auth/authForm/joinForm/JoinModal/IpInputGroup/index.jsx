import { useEffect, useState } from 'react'
import { Box, FormControlLabel, Checkbox, Typography, Button } from '@mui/material'
import { IpInput } from '#/components/common/input/IpInput'
import { BrowserView } from 'react-device-detect'
import { useGetUserIp } from '#/hooks/queries/auth'

import style from './style.module'

const IpInputGroup = ({ formik }) => {
    const MAX_IP_COUNT = 4 // 5개, index=0 부터 시작
    const [ipInputCount, setIpInputCount] = useState(0)

    const { data } = useGetUserIp()

    const handleClickAddIPInput = () => {
        setIpInputCount((prev) => prev + 1)
    }

    useEffect(() => {
        if (formik.values.isIpAutoAdd && data) {
            const ipAddressList = data.data.data.ip.split('.')
            ipAddressList.forEach((ip, idx) => {
                formik.setFieldValue(`ipAddress${idx + 1}_0`, ip)
            })
        } else {
            for (let idx = 0; idx < 4; idx++) {
                formik.setFieldValue(`ipAddress${idx + 1}_0`, '')
            }
        }
    }, [formik.values.isIpAutoAdd, data])

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="button" component="p" sx={{ mt: 1, color: 'text.main' }}>
                    <span style={{ color: 'red' }}>*</span>IP
                </Typography>
                <Button
                    onClick={handleClickAddIPInput}
                    disabled={MAX_IP_COUNT === ipInputCount}
                    sx={style.btnDetaile}
                >
                    {`추가`}
                </Button>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.main' }}>
                {`IP는 최대5개까지 입력 가능 합니다.`}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <IpInput
                    ipName1={'ipAddress1_0'}
                    ipName2={'ipAddress2_0'}
                    ipName3={'ipAddress3_0'}
                    ipName4={'ipAddress4_0'}
                    formik={formik}
                >
                    <IpInput.IpDescription
                        formik={formik}
                        ipDescName={'ipDescription_0'}
                        sx={{ backgroundColor: 'form.main', borderRadius: '4px' }}
                    />
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
                        label={`자동입력`}
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
