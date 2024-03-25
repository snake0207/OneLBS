import PropTypes from 'prop-types'
import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarFilterButton,
} from '@mui/x-data-grid'
import { Grid } from '@mui/material'

const CustomToolbar = ({ children, tools }) => {
    return (
        <GridToolbarContainer sx={{ mb: 1 }}>
            <Grid container display="flex" justifyContent="flex-end" rowSpacing={1}>
                {children && (
                    <Grid item sm={12} md={8.2} textAlign="left">
                        {children}
                    </Grid>
                )}
                {tools && (
                    <Grid item sm={12} md={3.4} textAlign="right">
                        {tools.includes('column') && <GridToolbarColumnsButton />}
                        {tools.includes('filter') && <GridToolbarFilterButton />}
                        {tools.includes('export') && (
                            <GridToolbarExport
                                printOptions={{ disableToolbarButton: true }}
                                csvOptions={{ utf8WithBom: true }}
                            />
                        )}
                    </Grid>
                )}
            </Grid>
        </GridToolbarContainer>
    )
}

CustomToolbar.propTypes = {
    children: PropTypes.node,
    tools: PropTypes.arrayOf(PropTypes.string), // ["column", "filter", "export"]
}

export default CustomToolbar
