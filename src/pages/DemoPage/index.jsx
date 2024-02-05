import TitleBar from '#/components/common/menu/TitleBar'
import { Box } from '@mui/material'

function DemoPage() {
    return (
        <Box>
            <TitleBar title="Component Demo Page" />
            <h1>Component Demo Page</h1>
            <ul>
                <li>
                    <a href="/components/layouts">Layouts</a>
                </li>
                <li>
                    <a href="/components/inputs">Inputs</a>
                </li>
                <li>
                    <a href="/components/buttons">Buttons</a>
                </li>
                <li>
                    <a href="/components/select">Select</a>
                </li>
                <li>
                    <a href="/components/maps">Maps</a>
                </li>
                <li>
                    <a href="/components/logins">Logins</a>
                </li>
                <li>
                    <a href="/components/modals">Modal</a>
                </li>
                <li>
                    <a href="/components/popup">Popup</a>
                </li>
                <li>
                    <a href="/components/tables">Tables</a>
                </li>
                <li>
                    <a href="/components/approval">Approval</a>
                </li>
                <li>
                    <a href="/components/users">User Management</a>
                </li>
            </ul>
        </Box>
    )
}

export default DemoPage
