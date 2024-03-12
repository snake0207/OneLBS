import { Box, Button, IconButton, Tab, Tabs, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import t from '#/common/libs/trans.js'
import style from './style.module'
import { usePopupActions } from '#/store/usePopupStore.js'
import { useFormik } from 'formik'
import { poiDetailSchema } from '#/contents/validationSchema.js'
import BasicInfo from '#/components/poiDetail/CategoryInfo/BasicInfo/index.jsx'
import Divider from '@mui/material/Divider'
import { gpssDetailResponseDataMapper } from '#/pages/ApprovalHistoryPage/mapper.js'
import EvChargingInfo from '#/components/poiDetail/CategoryInfo/EvChargingInfo/index.jsx'
import ParkingInfo from '#/components/poiDetail/CategoryInfo/ParkingInfo/index.jsx'
import FuelInfo from '#/components/poiDetail/CategoryInfo/FuelInfo/index.jsx'
import DealerPoiInfo from '#/components/poiDetail/CategoryInfo/DealerPoiInfo/index.jsx'
import H2ChargingInfo from '#/components/poiDetail/CategoryInfo/H2ChargingInfo/index.jsx'
import ApprovalSelect from '#/components/poiDetail/ApprovalSelect/index.jsx'
import { isBrowser } from 'react-device-detect'

const MapGpssDetail = ({ selectedPoi, setSelectedPoi, poiData }) => {
    const isEditable = true
    const popupAction = usePopupActions()

    const [isOpen, setIsOpen] = useState(false)
    const [tabSelected, setTabSelected] = useState('info')

    // 검토자 승인자
    const [selectedReviewer, setSelectedReviewer] = useState(null)
    const [selectedApprover, setSelectedApprover] = useState(null)

    useEffect(() => {
        if (!isBrowser) {
            setIsOpen(true)
            return
        }
        if (selectedPoi) setIsOpen(true)
        else setIsOpen(false)
    }, [selectedPoi])

    const parsedData = gpssDetailResponseDataMapper(poiData)
    const formik = useFormik({
        initialValues: {
            reason: '',
            reviewer: '',
            approver: '',
            ...parsedData,
        },
        validationSchema: poiDetailSchema,
        onSubmit: (form) => {
            console.log(form)
        },
    })

    // 임시저장
    const handleClickTempSaveBtn = () => {
        formik.handleSubmit()
        popupAction.showPopup('confirm', t('pop_up.temporary_save', 'gpss'), gpssTempSave)
    }
    const gpssTempSave = () => {
        console.log('임시저장')
        popupAction.closePopup()
    }
    // 수정요청
    const handleClickEditBtn = () => {
        if (gpssRequestValidation()) {
            popupAction.showPopup('confirm', t('pop_up.edit_request', 'gpss'), gpssEdit)
        }
    }
    const gpssEdit = () => {
        console.log('수정요청')
        popupAction.closePopup()
    }
    // 삭제요청
    const handleClickDeleteBtn = () => {
        if (gpssRequestValidation())
            popupAction.showPopup('confirm', t('pop_up.delete_request', 'gpss'), gpssDelete)
    }
    const gpssDelete = () => {
        console.log('삭제요청')
        popupAction.closePopup()
    }

    const handleClickTabChange = (event, newValue) => {
        setTabSelected(newValue)
    }

    const gpssRequestValidation = () => {
        if (formik.values.reason === '') {
            popupAction.showPopup('alert', t('pop_up.reason_required', 'gpss'))
            return false
        }
        if (!selectedReviewer) {
            popupAction.showPopup('alert', t('pop_up.reviewer_required', 'gpss'))
            return false
        }
        if (!selectedApprover) {
            popupAction.showPopup('alert', t('pop_up.approver_required', 'gpss'))
            return false
        }
        return true
    }

    const handleClickDetailClose = () => {
        setIsOpen(false)
        setSelectedPoi(null)
    }
    return (
        poiData &&
        isOpen && (
            <Box sx={style.mapDetailBox}>
                <Box sx={style.mapDetail}>
                    <Box>
                        <Tabs value={tabSelected} onChange={handleClickTabChange} sx={style.tabs}>
                            <Tab label={t('info', 'gpss')} value="info" sx={style.tabMenu} />
                            <Tab
                                label={t('last_modified_info', 'gpss')}
                                value="last-modified"
                                sx={style.tabMenu}
                            />
                        </Tabs>
                    </Box>
                    <Box sx={style.mapDetailContent}>
                        {/* 상세 기본 정보 */}
                        <BasicInfo
                            formik={formik}
                            poiData={parsedData}
                            tabSelected={tabSelected}
                            isEditable={isEditable}
                        />
                        {/* EV Charging */}
                        {!!parsedData.evChargingInfo && (
                            <Box>
                                <EvChargingInfo
                                    data={parsedData.evChargingInfo}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                <Divider
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderBottomColor: 'border.lightgray',
                                    }}
                                />
                            </Box>
                        )}
                        {/* parking */}
                        {!!parsedData.parkingInfo && (
                            <Box>
                                <ParkingInfo
                                    data={parsedData.parkingInfo}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                <Divider
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderBottomColor: 'border.lightgray',
                                    }}
                                />
                            </Box>
                        )}
                        {/* fuel */}
                        {!!parsedData.fuelInfo && (
                            <Box>
                                <FuelInfo
                                    data={parsedData.fuelInfo}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                <Divider
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderBottomColor: 'border.lightgray',
                                    }}
                                />
                            </Box>
                        )}
                        {/* h2Charging */}
                        {!!parsedData.h2ChargingInfo && (
                            <Box>
                                <H2ChargingInfo
                                    data={parsedData.h2ChargingInfo}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                <Divider
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderBottomColor: 'border.lightgray',
                                    }}
                                />
                            </Box>
                        )}

                        {/* dealerPoi */}
                        {!!parsedData.dealerPoiInfo && (
                            <Box>
                                <DealerPoiInfo
                                    data={parsedData.dealerPoiInfo}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                <Divider
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderBottomColor: 'border.lightgray',
                                    }}
                                />
                            </Box>
                        )}
                        <Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: 'text.darkgray',
                                        mt: '8px',
                                    }}
                                >
                                    {t('reason_for_approval', 'gpss')}
                                </Typography>
                            </Box>
                            <TextField
                                sx={{
                                    marginBottom: '16px',
                                    marginTop: '8px',
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                                size={'small'}
                                multiline
                                fullWidth
                                placeholder={t('reason_for_approval_input', 'gpss')}
                                name={'reason'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[name]}
                            ></TextField>
                        </Box>
                        <ApprovalSelect
                            formik={formik}
                            reviewerName={'reviewer'}
                            approverName={'approver'}
                            selectedApprover={selectedApprover}
                            setSelectedApprover={setSelectedApprover}
                            selectedReviewer={selectedReviewer}
                            setSelectedReviewer={setSelectedReviewer}
                            isReviewerShow={true}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '2px',
                                mt: '30px',
                                '@media (max-width:1024px)': {
                                    pb: '20px',
                                },
                            }}
                        >
                            <Button
                                variant={'contained'}
                                onClick={handleClickTempSaveBtn}
                                sx={style.darkBlueButton}
                            >
                                {t('temporary_save', 'gpss')}
                            </Button>
                            <Button
                                variant={'contained'}
                                onClick={handleClickEditBtn}
                                sx={style.lightButton}
                            >
                                {t('edit_request', 'gpss')}
                            </Button>
                            <Button
                                variant={'contained'}
                                onClick={handleClickDeleteBtn}
                                sx={style.lineButton}
                            >
                                {t('delete_request', 'gpss')}
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {isBrowser && (
                    <IconButton
                        variant={'contained'}
                        sx={{
                            inWidth: '20px',
                            minHeight: '20px',
                            width: '20px',
                            height: '20px',
                            ml: '4px',
                            color: 'text.close',
                            borderRadius: '35px',
                            backgroundColor: 'color.closeBg',
                            border: '1px solid',
                            borderColor: 'border.close',
                            boxShadow: '0 3px 14px rgb(0 0 0 / 20%)',
                            '&:hover': {
                                backgroundColor: 'color.closeBg',
                            },
                        }}
                        onClick={handleClickDetailClose}
                    >
                        <CloseIcon sx={{ color: 'color.close', width: '13px', height: '13px' }} />
                    </IconButton>
                )}
            </Box>
        )
    )
}

export default MapGpssDetail
