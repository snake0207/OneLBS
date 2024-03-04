import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import EvStationIcon from '#/assets/evStationIcon.svg'
import EvStationIconDark from '#/assets/evStationIconDark.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import { Fragment, useRef } from 'react'
import EditableSelectColumn from '#/components/approval/Detail/CategoryInfo/EditableSelectColumn/index.jsx'
import useLayoutStore from '#/store/useLayoutStore'
import style from './style.module'

const EvChargingInfo = ({ data, isEditable, formik }) => {
    const selectTypeItems = useRef([
        { key: 0, value: 0, label: '알수없음' },
        { key: 1, value: 1, label: 'ACtype1' },
        { key: 2, value: 2, label: 'ACtype2' },
        { key: 3, value: 3, label: 'Combo(AC+DC)' },
        { key: 4, value: 4, label: 'CHAdeMO' },
    ])
    const selectSpeedItems = useRef([
        { key: 0, value: 0, label: '알수없음' },
        { key: 1, value: 1, label: '완속' },
        { key: 2, value: 2, label: '급속' },
        { key: 3, value: 3, label: '초급속' },
    ])
    const { themeMode } = useLayoutStore()

    return (
        <Accordion sx={style.accordionBox}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={style.evChargingBox}>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, color: 'text.darkgray' }}>
                    {themeMode === 'light' ? (
                        <img
                            src={EvStationIcon}
                            style={{ verticalAlign: 'middle', marginRight: '4px' }}
                        />
                    ) : (
                        <img
                            src={EvStationIconDark}
                            style={{ verticalAlign: 'middle', marginRight: '4px' }}
                        />
                    )}
                    evCharging
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <EditableTextColumn
                    value={data.brand}
                    name={'evChargingInfo.brand'}
                    isEditable={isEditable}
                    formik={formik}
                />
                <EditableSelectColumn />
                <Typography>{data.maxWatt}</Typography>
                <Typography sx={{ color: '#0057BB', fontSize: '18px', fontWeight: 500 }}>
                    {data.status}
                </Typography>
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
                                style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                            />
                            영업 요일
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={style.evContentBox}>
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

                <Accordion sx={style.accordionBox}>
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
                            status
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={style.evContentBox}>
                        {data.summary.map((summary, index) => (
                            <Box key={index}>
                                <Typography>{summary.type}</Typography>
                                <Typography>{summary.speed}</Typography>
                                <Typography>{summary.possibleCount}</Typography>
                                <Typography>{summary.watt}</Typography>
                            </Box>
                        ))}
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={style.accordionBox}>
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
                    <AccordionDetails sx={style.evContentBox}>
                        {data.chargers.map((charger, index) => (
                            <Grid container key={index} gap={2} direction={'column'}>
                                <Typography>{charger.id || '-'}</Typography>
                                <EditableSelectColumn
                                    value={charger.speed}
                                    name={`evChargingInfo.chargers.${index}.speed`}
                                    items={selectSpeedItems.current}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                <EditableTextColumn
                                    value={charger.watt}
                                    name={`evChargingInfo.chargers.${index}.watt`}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                <Typography>{charger.status || '-'}</Typography>
                                <Typography>{charger.lastUsedTime || '-'}</Typography>
                                <EditableSelectColumn
                                    value={charger.type}
                                    name={`evChargingInfo.chargers.${index}.type`}
                                    items={selectTypeItems.current}
                                    isEditable={isEditable}
                                    formik={formik}
                                />
                                {charger.priceList?.map((price, index) => (
                                    <Fragment key={index}>
                                        <Typography>
                                            {price.price}
                                            {price.currency}(1{price.currency} / 1{price.priceUnit})
                                        </Typography>
                                        <Typography>{price.isFree}</Typography>
                                    </Fragment>
                                ))}
                            </Grid>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    )
}
export default EvChargingInfo
