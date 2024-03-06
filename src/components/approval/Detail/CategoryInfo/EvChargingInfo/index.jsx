import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import EvStationIcon from '#/assets/evStationIcon.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import { Fragment, useRef } from 'react'
import EditableSelectColumn from '#/components/approval/Detail/CategoryInfo/EditableSelectColumn/index.jsx'
import t from '#/common/libs/trans.js'

const EvChargingInfo = ({ data, isEditable, formik }) => {
    const selectTypeItems = useRef([
        { key: 0, value: 0, label: t('commonInfo.unknown', 'approval') },
        { key: 1, value: 1, label: 'ACtype1' },
        { key: 2, value: 2, label: 'ACtype2' },
        { key: 3, value: 3, label: 'Combo(AC+DC)' },
        { key: 4, value: 4, label: 'CHAdeMO' },
    ])
    const selectSpeedItems = useRef([
        { key: 0, value: 0, label: t('evChargingInfo.speed.0', 'approval') },
        { key: 1, value: 1, label: t('evChargingInfo.speed.1', 'approval') },
        { key: 2, value: 2, label: t('evChargingInfo.speed.2', 'approval') },
        { key: 3, value: 3, label: t('evChargingInfo.speed.3', 'approval') },
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
                <Typography>{data.maxWatt}kw</Typography>
                <Typography>{data.status}</Typography>
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
                        {data.openingHours?.length
                            ? data.openingHours.map((openingHour, index) => (
                                  <Box key={index}>
                                      <Typography component={'span'}>
                                          {openingHour.weekday}
                                      </Typography>
                                      <Typography component={'span'}>
                                          {openingHour.open || '-'}
                                          {' ~ '}
                                          {openingHour.close || '-'}
                                      </Typography>
                                  </Box>
                              ))
                            : '-'}
                    </AccordionDetails>
                </Accordion>

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
                            status
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {data.summary?.length
                            ? data.summary?.map((summary, index) => (
                                  <Box key={index}>
                                      <Typography>{summary.type}</Typography>
                                      <Typography>{summary.speed}</Typography>
                                      <Typography>{summary.possibleCount}</Typography>
                                      <Typography>{summary.watt}kw</Typography>
                                  </Box>
                              ))
                            : '-'}
                    </AccordionDetails>
                </Accordion>

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
                        {data.chargers?.length
                            ? data.chargers.map((charger, index) => (
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
                                          value={`${charger.watt}kw`}
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
                                                  {price.currency}(1{price.currency} / 1
                                                  {price.priceUnit})
                                              </Typography>
                                              <Typography>{price.isFree}</Typography>
                                          </Fragment>
                                      ))}
                                  </Grid>
                              ))
                            : '-'}
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    )
}
export default EvChargingInfo
