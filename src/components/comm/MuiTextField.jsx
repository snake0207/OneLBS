import TextField from "@mui/material/TextField";

const MuiTextField = (props) => {
  const {
    name,
    label,
    value,
    type,
    onBlur,
    onChange,
    formikTouch,
    formikError,
  } = props;

  return (
    <TextField
      fullWidth
      variant="filled" // outlined, filled, standard
      id={name}
      name={name}
      label={label}
      value={value}
      type={type ? type : "text"}
      onBlur={onBlur}
      onChange={onChange}
      error={formikTouch && Boolean(formikError)}
      helperText={formikTouch && formikError}
      margin="normal"
      sx={{
        "& .MuiInputLabel-root": {
          color: `primary.main !important`,
        },
        "& label.Mui-focused": {
          color: `secondary.main !important`,
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: `secondary.main !important`,
          },
        },
      }}
    />
  );
};

export default MuiTextField;
