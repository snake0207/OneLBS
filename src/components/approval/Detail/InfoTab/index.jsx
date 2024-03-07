import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import t from '#/common/libs/trans.js'

import style from './style.module'
import BasicInfo from '#/components/poiDetail/CategoryInfo/BasicInfo/index.jsx'

const InfoTab = ({ basicData, formik, isEditable }) => {
    const [tabSelected, setTabSelected] = useState('info')

    return (
        <Box>
            <Tabs
                value={tabSelected}
                onChange={(e, newValue) => setTabSelected(newValue)}
                sx={style.tabs}
            >
                <Tab label={t('info', 'gpss')} value="info" sx={style.tabMenu} />
                <Tab
                    label={t('last_modified_info', 'gpss')}
                    value="last-modified"
                    sx={style.tabMenu}
                />
            </Tabs>
            <BasicInfo
                formik={formik}
                poiData={basicData}
                tabSelected={tabSelected}
                isEditable={isEditable}
            />
        </Box>
    )
}

export default InfoTab
