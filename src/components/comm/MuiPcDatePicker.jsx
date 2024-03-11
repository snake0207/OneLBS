import { DesktopDatePicker } from "@mui/x-date-pickers";

const MuiPcDatePicker = (props) => {
  const { name, label, value, onChange } = props;

  return (
    <DesktopDatePicker
      id={name}
      name={name}
      label={label}
      format="YYYY-MM-DD"
      value={value}
      onChange={onChange}
      slotProps={{
        switchViewIcon: {
          sx: { color: "secondary.main", fontSize: "1.5rem" },
        },
        leftArrowIcon: {
          sx: { color: "secondary.main", fontSize: "1.5rem" },
        },
        rightArrowIcon: {
          sx: { color: "secondary.main", fontSize: "1.5rem" },
        },
        // toolbar: { color: "secondary" },
        openPickerButton: { color: "secondary" },
        textField: {
          // sx: {
          //   "& .MuiInputLabel-root": {
          //     color: `"secondary.dark" !important`,
          //   },
          //   "& label.Mui-focused": {
          //     color: `secondary.main !important`,
          //   },
          //   "& .MuiOutlinedInput-root": {
          //     "&.Mui-focused fieldset": {
          //       borderColor: `primary.main !important`,
          //       borderWidth: "1px",
          //     },
          //   },
          // },
        },
      }}
    />
  );
};

export default MuiPcDatePicker;
