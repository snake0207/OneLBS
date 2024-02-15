import Dropdown from '#/components/common/button/Dropdown'
import { Box } from '@mui/material'

function ButtonPage() {
    const dropItems = [
        {
            key: 'item1',
            label: 'Item 1',
        },
        {
            key: 'item2',
            label: 'Item 2',
        },
        {
            key: 'item3',
            label: 'Item 3',
        },
    ]
    return (
        <Box>
            <h1>Buttons</h1>
            <h2>Dropdown</h2>
            <div>default</div>
            <Dropdown items={dropItems}>Dropdown</Dropdown>
            <div>disabled</div>
            <Dropdown items={dropItems} disabled>
                Dropdown
            </Dropdown>
            <div>selectable</div>
            <Dropdown items={dropItems} selectable>
                Dropdown
            </Dropdown>
        </Box>
    )
}

export default ButtonPage
