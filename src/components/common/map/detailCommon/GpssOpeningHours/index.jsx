import { Box, Table, TableHead, Typography } from '@mui/material'
import OpeningHour from '#/components/common/map/detailCommon/GpssOpeningHours/OpeningHour/index.jsx'
import t from '#/common/libs/trans.js'

/**
 * dataType: 날짜 데이터 표시 분류 evCharging, h2Charging, parking ...
 * openingHoursData: 운영일자 데이터 array
 */
const GpssOpeningHours = ({ dataType, openingHoursData, formik }) => {
    return (
        <Box>
            <Typography>{t('opening_hours', 'gpss')}</Typography>
            <Table
                sx={{
                    th: {
                        width: '130px',
                        color: '#444444',
                        fontWeight: 500,
                        pt: '6px',
                        pb: '6px',
                        backgroundColor: '#e2e2e2',
                        borderTop: '1px solid #d1d1d1',
                        borderBottom: '1px solid #d1d1d1',
                        textAlign: 'center',
                    },
                    td: {
                        color: '#444444',
                        fontWeight: 400,
                        p: '6px 0px 6px 10px',
                        textAlign: 'left',
                        borderTop: '1px solid #d1d1d1',
                    },
                }}
            >
                <TableHead>
                    {openingHoursData.map((hour, idx) => (
                        <OpeningHour
                            formik={formik}
                            hour={hour}
                            index={idx}
                            dataType={dataType}
                            key={idx}
                        />
                    ))}
                </TableHead>
            </Table>
        </Box>
    )
}

export default GpssOpeningHours
