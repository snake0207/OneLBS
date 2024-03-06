import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import EvStationIcon from '#/assets/evStationIcon.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import EditableSelectColumn from '#/components/approval/Detail/CategoryInfo/EditableSelectColumn/index.jsx'
import { useRef } from 'react'
import t from '#/common/libs/trans.js'
import H2Icon from '#/assets/h2Icon.svg'
import H2IconDark from '#/assets/h2IconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'
import style from './style.module'

const H2ChargingInfo = ({ data, isEditable, formik }) => {
    const selectSpeedItems = useRef([
        { key: 0, value: 0, label: t('h2ChargingInfo.0', 'approval') },
        { key: 1, value: 750, label: t('h2ChargingInfo.750', 'approval') },
        { key: 2, value: 350, label: t('h2ChargingInfo.350', 'approval') },
    ])
    const { themeMode } = useLayoutStore()

    return (
        <Accordion sx={style.accordionBox}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={style.summaryBox}>
                <Typography
                    sx={{
                        display: 'flex',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'text.darkgray',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={H2Icon} style={{ marginRight: '4px', marginTop: '4px' }} />
                    ) : (
                        <img src={H2IconDark} style={{ marginRight: '4px', marginTop: '4px' }} />
                    )}
                    h2Charging
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* brand */}
                <EditableTextColumn
                    value={data.brand}
                    name={'h2ChargingInfo.brand'}
                    isEditable={isEditable}
                    formik={formik}
                />
                {/* price */}
                <Typography sx={{ color: 'text.main', fontSize: '18px' }}>
                    {data.price}
                    {data.currency}(1{data.currency} / 1{data.priceUnit})
                </Typography>
                {/* openingHours */}
                <Accordion sx={style.accordionDepsBox}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            sx={{
                                ontSize: '18px',
                                fontWeight: 600,
                                color: 'text.darkgray',
                            }}
                        >
                            <img
                            // src={EvStationIcon}
                            />
                            {t('commonInfo.weekday', 'approval')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={style.detailsBox}>
                        {data.openingHours.map((openingHour, index) => (
                            <Box key={index}>
                                <Typography component={'span'}>{openingHour.weekday}</Typography>
                                <Typography component={'span'}>
                                    {openingHour.open || '-'}
                                    {' ~ '}
                                    {openingHour.close || '-'}
                                </Typography>
                            </Box>
                        ))}
                    </AccordionDetails>
                </Accordion>
                {/* status */}
                <Accordion sx={style.accordionBox}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                                color: 'text.darkgray',
                                mb: '4px',
                            }}
                        >
                            <img
                            // src={EvStationIcon}
                            />
                            {t('commonInfo.charger', 'approval')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={style.detailsBox}>
                        {data.chargers.map(({ id, speed, status }, index) => (
                            <Box key={index}>
                                <Typography>{id}</Typography>
                                <Typography>{status}</Typography>
                                <EditableSelectColumn
                                    value={speed}
                                    name={`h2ChargingInfo.chargers.${index}.speed`}
                                    items={selectSpeedItems.current}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                            </Box>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    )
}
export default H2ChargingInfo
