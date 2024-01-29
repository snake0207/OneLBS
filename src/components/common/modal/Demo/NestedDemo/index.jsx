import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const NestedDemoModal = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Nested Demo</DialogTitle>
            <DialogContent dividers>Nested Demo Contents</DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={onClose}>
                    Nested Demo Button
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NestedDemoModal
