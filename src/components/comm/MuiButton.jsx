import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import ListIcon from "@mui/icons-material/List";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const buttonUI = {
  create: {
    color: "primary",
    variant: "contained",
    icon: <CreateIcon aria-label="create" />,
  },
  list: {
    color: "secondary",
    variant: "outlined",
    icon: <ListIcon aria-label="list" />,
  },
  edit: {
    color: "secondary",
    variant: "outlined",
    icon: <EditIcon aria-label="edit" />,
  },
  delete: {
    color: "error",
    variant: "outlined",
    icon: <DeleteIcon aria-label="delete" color="error" />,
  },
  save: {
    color: "primary",
    variant: "contained",
    icon: <SendIcon aria-label="save" />,
  },
};

export const MuiMainButton = ({ name, title, href, onClick }) => {
  const _name = name.toLowerCase();

  return (
    <Button
      disableElevation
      fullWidth
      color={buttonUI[_name].color}
      href={href || null}
      variant={buttonUI[_name].variant}
      startIcon={
        buttonUI[_name].icon ? (
          buttonUI[_name].icon
        ) : (
          <AnnouncementIcon aria-label="default Icon" />
        )
      }
      onClick={onClick}
      sx={{
        m: "4px",
        borderRadius: "24px",
        fontSize: "16px",
        fontWeight: "600",
      }}
    >
      {title ? title : name}
    </Button>
  );
};

export const MuiSubButton = ({
  name,
  title,
  medium,
  outlined,
  href,
  onClick,
}) => {
  const _name = name.toLowerCase();

  return (
    <Button
      disableElevation
      fullWidth
      size={medium ? "medium" : "small"}
      color={buttonUI[_name].color}
      href={href || null}
      variant={outlined ? "outlined" : "contained"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
