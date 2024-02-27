import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import EvStationIcon from '#/assets/evStationIcon.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import EditableSelectColumn from '#/components/approval/Detail/CategoryInfo/EditableSelectColumn/index.jsx'
import { useRef } from 'react'

const H2ChargingInfo = ({ data, isEditable, formik }) => {
    const selectSpeedItems = useRef([
        { key: 0, value: 0, label: '알수없음' },
        { key: 1, value: 750, label: '750bar 수소차' },
        { key: 2, value: 350, label: '350bar 수소차' },
    ])

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
            >
                <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}>
                    <img
                        src={EvStationIcon}
                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                    />
                    h2Charging
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* brand */}
                <EditableTextColumn
                    value={data.brand}
                    name={'h2Charging.brand'}
                    isEditable={isEditable}
                    formik={formik}
                />
                {/* price */}
                <Typography>
                    {data.price}
                    {data.currency}(1{data.currency} / 1{data.priceUnit})
                </Typography>
                {/* openingHours */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                    >
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                                color: '#05141F',
                                mb: '4px',
                            }}
                        >
                            <img
                                // src={EvStationIcon}
                                style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                            />
                            영업 요일
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ fontSize: '18px', fontWeight: 500, color: '#05141F', mb: '4px' }}
                    >
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                                color: '#05141F',
                                mb: '4px',
                            }}
                        >
                            <img
                                // src={EvStationIcon}
                                style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                            />
                            charger
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {data.chargers.map(({ id, speed, status }, index) => (
                            <Box key={index}>
                                <Typography>{id}</Typography>
                                <Typography>{status}</Typography>
                                <Typography>{speed}</Typography>
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
