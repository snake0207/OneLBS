import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import ListIcon from '@mui/icons-material/List'
import EditIcon from '@mui/icons-material/Edit'
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined'
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const buttonUI = {
    create: {
        color: 'primary',
        variant: 'contained',
        icon: <SaveOutlinedIcon aria-label="create" />,
    },
    list: {
        color: 'error',
        variant: 'outlined',
        icon: <ListIcon aria-label="list" />,
    },
    edit: {
        color: 'info',
        variant: 'outlined',
        icon: <EditIcon aria-label="edit" />,
    },
    add: {
        color: 'secondary',
        variant: 'contained',
        icon: <PlaylistAddOutlinedIcon aria-label="Add" />,
    },
    delete: {
        color: 'error',
        variant: 'contained',
        icon: <DeleteIcon aria-label="delete" />,
    },
    cancel: {
        color: 'warning',
        variant: 'outlined',
        icon: <NotInterestedOutlinedIcon aria-label="cancel" />,
    },
    search: {
        color: 'primary',
        variant: 'outlined',
        icon: <SearchIcon aria-label="search" />,
    },
}

export const MuiMainButton = ({ disabled, name, title, onClick }) => {
    const _name = name.toLowerCase()

    return (
        <Button
            disabled={disabled}
            disableElevation
            color={buttonUI[_name].color || undefined}
            variant={buttonUI[_name].variant}
            onClick={onClick}
            startIcon={
                buttonUI[_name].icon ? (
                    buttonUI[_name].icon
                ) : (
                    <AnnouncementIcon aria-label="default Icon" />
                )
            }
            sx={{
                m: '4px',
                width: '160px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: '500',
            }}
        >
            {title ? title : name}
        </Button>
    )
}

export const MuiSubButton = ({
    disabled = false,
    name,
    title,
    size = 'medium',
    variant = 'outlined',
    onClick,
}) => {
    const _name = name.toLowerCase()

    return (
        <Button
            disabled={disabled}
            disableElevation
            size={size}
            color={buttonUI[_name].color}
            variant={variant}
            onClick={onClick}
            startIcon={_name === 'search' && buttonUI[_name].icon}
            sx={{ width: '100px' }}
        >
            {title}
        </Button>
    )
}
