import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import Typography from '@mui/material/Typography'
import EvStationIcon from '#/assets/evStationIcon.svg'
import { useRef } from 'react'
import EditableSelectColumn from '#/components/approval/Detail/CategoryInfo/EditableSelectColumn/index.jsx'

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
                    dealerPoi
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
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
