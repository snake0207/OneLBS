export const textFieldProps = ({color, borderColor}) => {
  sx: {
    "& .MuiInputLabel-root": {
      color: `${color} !important`,
    },
    "& label.Mui-focused": {
      color: `${color} !important`,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: `${color} !important`,
        borderWidth: "2px",
      }
    }
  }
};