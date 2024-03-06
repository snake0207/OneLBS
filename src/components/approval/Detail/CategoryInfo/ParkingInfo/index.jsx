import { Accordion, AccordionDetails, AccordionSummary, Box, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import Typography from '@mui/material/Typography'
import EditableTextColumn from '#/components/approval/Detail/CategoryInfo/EditableTextColumn/index.jsx'
import { useRef } from 'react'
import EditableSelectColumn from '#/components/approval/Detail/CategoryInfo/EditableSelectColumn/index.jsx'
import t from '#/common/libs/trans.js'
import ParkingIcon from '#/assets/parkingIcon.svg'
import ParkingIconDark from '#/assets/parkingIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'
import style from './style.module'

const ParkingInfo = ({ data, isEditable, formik }) => {
    const selectTypeItems = useRef([
        { key: 0, value: '0', label: 'UNKNOWN' },
        { key: 1, value: '1', label: 'MULTISTOREY' },
        { key: 2, value: '2', label: 'NOTCOVERED' },
        { key: 3, value: '3', label: 'COVERED' },
        { key: 4, value: '4', label: 'UNDERGROUND' },
        { key: 5, value: '5', label: 'PARTIALLY COVERED' },
        { key: 6, value: '6', label: 'MECHANICAL' },
    ])

    const { themeMode } = useLayoutStore()

    return (
        <Accordion sx={style.accordionBox}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={style.summaryBox}>
                <Typography
                    sx={{
                        display: 'flex',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: 'text.darkgray',
                        mb: '4px',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={ParkingIcon} style={{ marginRight: '4px', marginTop: '4px' }} />
                    ) : (
                        <img
                            src={ParkingIconDark}
                            style={{ marginRight: '4px', marginTop: '4px' }}
                        />
                    )}
                    parking
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <EditableTextColumn
                    value={data.brand}
                    name={'parkingInfo.brand'}
                    isEditable={isEditable}
                    formik={formik}
                />
                <Typography>{data.congestion}</Typography>
                <EditableSelectColumn
                    value={data.type}
                    name={`parkingInfo.type`}
                    items={selectTypeItems.current}
                    isEditable={isEditable}
                    formik={formik}
                />
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
                                style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                            />
                            {t('parkingInfo.price', 'approval')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={style.detailsBox}>
                        {data.priceList.map(({ price, priceNote, priceUnit, currency }, index) => (
                            <Stack key={index} direction={'row'}>
                                <Typography>
                                    {price}
                                    {currency} ({priceUnit})
                                </Typography>
                                <Typography>{priceNote}</Typography>
                            </Stack>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    )
}
export default ParkingInfo
