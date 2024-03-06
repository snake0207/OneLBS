import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import Typography from '@mui/material/Typography'
import EvStationIcon from '#/assets/evStationIcon.svg'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import t from '#/common/libs/trans.js'

const FuelInfo = ({ data, isEditable, formik }) => {
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
                    fuel
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <EditableTextColumn
                    value={data.brand}
                    name={'fuelInfo.brand'}
                    isEditable={isEditable}
                    formik={formik}
                />
                {/* 영업시간 */}
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
                            {t('commonInfo.weekday', 'approval')}
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
                {data.summary.map(({ type, price, priceUnit, currency }, index) => (
                    <Accordion key={index}>
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
                                    src={EvStationIcon}
                                    style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                />
                                {t(`fuelInfo.type.${type}`, 'approval')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {price}
                                {currency}(1{currency} / 1{priceUnit})
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </AccordionDetails>
        </Accordion>
    )
}
export default FuelInfo
