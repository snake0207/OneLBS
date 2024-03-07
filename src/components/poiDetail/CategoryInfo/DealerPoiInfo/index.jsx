import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import Typography from '@mui/material/Typography'
import { useRef } from 'react'
import EditableSelectColumn from '#/components/poiDetail/CategoryInfo/EditableSelectColumn/index.jsx'
import DealerPoiIcon from '#/assets/dealerPoiIcon.svg'
import DealerPoiIconDark from '#/assets/dealerPoiIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'
import style from './style.module'

const DealerPoiInfo = ({ data, isEditable, formik }) => {
    const selectTypeItems = useRef([
        { key: 0, value: '7538', label: 'Auto Dealerships' },
        { key: 1, value: '5511', label: 'Auto Service & Maintenance' },
    ])
    const selectManufacturerItems = useRef([
        { key: 0, value: 'ALL', label: 'All' },
        { key: 1, value: 'H', label: 'Hyundai' },
        { key: 2, value: 'K', label: 'Kia' },
        { key: 3, value: 'Genesis', label: 'Genesis' },
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
                        <img src={DealerPoiIcon} style={{ marginRight: '4px', marginTop: '4px' }} />
                    ) : (
                        <img
                            src={DealerPoiIconDark}
                            style={{ marginRight: '4px', marginTop: '4px' }}
                        />
                    )}
                    dealerPoi
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={style.detailsBox}>
                <EditableSelectColumn
                    value={data.type}
                    name={`dealerPoiInfo.type`}
                    items={selectTypeItems.current}
                    isEditable={isEditable}
                    formik={formik}
                />
                <EditableSelectColumn
                    value={data.manufacturer}
                    name={`dealerPoiInfo.manufacturer`}
                    items={selectManufacturerItems.current}
                    isEditable={isEditable}
                    formik={formik}
                />
            </AccordionDetails>
        </Accordion>
    )
}
export default DealerPoiInfo
