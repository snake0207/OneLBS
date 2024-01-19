import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function ArrowButton({ children, open, handleClick, ...props }) {
    return (
        <Button
            id="arrow-button"
            aria-controls={open ? 'arrow-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            {...props}
        >
            {children}
        </Button>
    )
}

export default ArrowButton
