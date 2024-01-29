import { useModalActions } from '#/store/useModalStore'
import { Button, DialogActions, DialogContent } from '@mui/material'
import { useState } from 'react'
import NestedDemoModal from '#/components/common/modal/Demo/NestedDemo'

const DemoModal = () => {
    const { closeModal } = useModalActions()
    const [isNestedModalOpen, setIsNestedModalOpen] = useState(false)
    return (
        <>
            <DialogContent dividers>Demo Contents</DialogContent>
            <DialogActions>
                <Button onClick={closeModal} variant="contained">
                    Demo Button
                </Button>
                <Button onClick={() => setIsNestedModalOpen(true)} variant="contained">
                    Nested Demo Modal
                </Button>
            </DialogActions>
            <NestedDemoModal
                isOpen={isNestedModalOpen}
                onClose={() => setIsNestedModalOpen(false)}
            />
        </>
    )
}

export default DemoModal
