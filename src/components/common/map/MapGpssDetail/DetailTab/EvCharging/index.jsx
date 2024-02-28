import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import EvStationIcon from '#/assets/evStationIcon.svg'
import EvStationIconDark from '#/assets/evStationIconDark.svg'
import GpssOpeningHours from '#/components/common/map/detailCommon/GpssOpeningHours/index.jsx'
import GpssPrices from '#/components/common/map/detailCommon/GpssPrices/index.jsx'

import { getLayoutState } from '#/store/useLayoutStore'

const EvCharging = ({ evChargingData, formik }) => {
    const { themeMode } = getLayoutState()
    return (
        <Box sx={{ marginBottom: '16px' }}>
            <Accordion elevation={0} sx={{ padding: 0, backgroundColor: 'dialog.main' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        padding: '0px',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: 'text.darkgray',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img
                            src={EvStationIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                    ) : (
                        <img
                            src={EvStationIconDark}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                    )}
                    EV Charging
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                    {/* 이용 시간 */}
                    {evChargingData.openingHours && (
                        <GpssOpeningHours openingHoursData={evChargingData.openingHours} />
                    )}
                    {/* 가격 정보 */}
                    {evChargingData.price && (
                        <GpssPrices
                            formik={formik}
                            dataType={'evCharging'}
                            pricesData={evChargingData.price}
                        />
                    )}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default EvCharging
