import { Button, TableCell, Box } from '@mui/material'
import { IpInput } from '#/components/common/input/IpInput'
import { useFormik } from 'formik'
import * as yup from 'yup'

import t from '#/common/libs/trans'
import { useEffect, useState } from 'react'
import CheckBox from '#/components/common/input/CheckBox'
//import { useGetUserIp } from '#/hooks/queries/auth'
import { usePopupActions } from '#/store/usePopupStore'

function IPRecord({ ip, ipAddresses, onAdd, onEdit, onDelete, onAutoInput }) {
    //const { data: userIp } = useGetUserIp()
    const [checkAuto, setCheckAuto] = useState(false)
    const popupActions = usePopupActions()
    const formik = useFormik({
        initialValues: {
            ip1: ip?.ip_address.split('.')[0],
            ip2: ip?.ip_address.split('.')[1],
            ip3: ip?.ip_address.split('.')[2],
            ip4: ip?.ip_address.split('.')[3],
            ip_description: ip?.description,
        },
        validationSchema: yup.object().shape({
            ip1: yup.number().required('Required'),
            ip2: yup.number().required('Required'),
            ip3: yup.number().required('Required'),
            ip4: yup.number().required('Required'),
        }),
        onSubmit: (values) => {
            if (onEdit) onEdit(values)
        },
    })

    useEffect(() => {
        if (ip?.ip_address === '') {
            formik.setValues({
                ip1: '',
                ip2: '',
                ip3: '',
                ip4: '',
                ip_description: '',
            })
        } else {
            formik.setValues({
                ip1: ip?.ip_address.split('.')[0],
                ip2: ip?.ip_address.split('.')[1],
                ip3: ip?.ip_address.split('.')[2],
                ip4: ip?.ip_address.split('.')[3],
                ip_description: ip?.description,
            })
        }
    }, [ip?.ip_address, ip?.description])

    const handleAdd = () => {
        if (onAdd) onAdd()
    }

    const handleDelete = () => {
        if (onDelete) onDelete()
    }

    const handleAutoInput = (event) => {
        // console.log('userIp', userIp)
        if (event.target.checked) {
            // duplicate check
            const tempIp = '192.168.0.1'

            const currentIp = `${formik.values.ip1}.${formik.values.ip2}.${formik.values.ip3}.${formik.values.ip4}`

            const isDuplicate = ipAddresses.find((item) => item.ip_address === tempIp)
            if (isDuplicate && currentIp !== tempIp) {
                popupActions.showPopup('alert', t('duplicate_ip_message', 'profile'))
                return
            }

            // formik.setValues({
            //     ip1: userIp?.ip_address.split('.')[0],
            //     ip2: userIp?.ip_address.split('.')[1],
            //     ip3: userIp?.ip_address.split('.')[2],
            //     ip4: userIp?.ip_address.split('.')[3],
            // })
            formik.setValues({
                ...formik.values,
                ip1: '192',
                ip2: '168',
                ip3: '0',
                ip4: '1',
            })
            if (onAutoInput) onAutoInput(tempIp)

            setCheckAuto(true)
        } else {
            setCheckAuto(false)
        }
    }

    return (
        <>
            <TableCell component="td" sx={{ border: 'none', p: '6px 0px 0px 10px !important' }}>
                <IpInput
                    name="ip"
                    formik={formik}
                    ipName1="ip1"
                    ipName2="ip2"
                    ipName3="ip3"
                    ipName4="ip4"
                >
                    <IpInput.IpDescription formik={formik} ipDescName="ip_description" />
                </IpInput>
            </TableCell>
            <TableCell
                component="td"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 'none',
                    p: '6px 0px 0px 10px !important',
                }}
            >
                <CheckBox
                    label={t('auto', 'profile')}
                    checked={checkAuto}
                    onChange={handleAutoInput}
                />
                <Box>
                    <Button
                        onClick={handleAdd}
                        sx={{
                            minWidth: '44px',
                            height: 30,
                            fontWeight: 400,
                            color: '#fff',
                            ml: '4px',
                            backgroundColor: 'button.light',
                            '&:hover': {
                                backgroundColor: 'button.light',
                            },
                        }}
                    >
                        {t('add', 'profile')}
                    </Button>
                    <Button
                        onClick={formik.handleSubmit}
                        sx={{
                            minWidth: '44px',
                            height: 30,
                            ml: '4px',
                            color: '#0A5CBA',
                            border: '1px solid #0A5CBA',
                            backgroundColor: '#E3F0FF',
                            '&:hover': {
                                backgroundColor: '#E3F0FF',
                            },
                        }}
                    >
                        {t('edit', 'profile')}
                    </Button>
                    <Button
                        onClick={handleDelete}
                        sx={{
                            minWidth: '44px',
                            height: 30,
                            ml: '4px',
                            color: '#0A5CBA',
                            border: '1px solid #0A5CBA',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        {t('delete', 'profile')}
                    </Button>
                </Box>
            </TableCell>
        </>
    )
}

export default IPRecord
