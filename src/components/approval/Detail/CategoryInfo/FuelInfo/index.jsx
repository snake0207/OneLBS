import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import Typography from '@mui/material/Typography'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import t from '#/common/libs/trans.js'
import FuelIcon from '#/assets/fuelIcon.svg'
import FuelIconDark from '#/assets/fuelIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'
import style from './style.module'

const FuelInfo = ({ data, isEditable, formik }) => {
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
                        <img src={FuelIcon} style={{ marginRight: '4px', marginTop: '4px' }} />
                    ) : (
                        <img src={FuelIconDark} style={{ marginRight: '4px', marginTop: '4px' }} />
                    )}
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
                <Accordion sx={style.accordionDepsBox}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            sx={{
                                fontSize: '18px',
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
                {data.summary.map(({ type, price, priceUnit, currency }, index) => (
                    <Accordion key={index} sx={style.accordionBox}>
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
                                {t(`fuelInfo.type.${type}`, 'approval')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={style.detailsBox}>
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
