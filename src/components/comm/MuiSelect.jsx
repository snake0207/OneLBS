import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MuiSelect = ({ name, label, value, onChange, data, width }) => {
  const selectedIdx =
    (data?.selectedIdx > 0 &&
      data?.selectedIdx < data?.items.length &&
      data?.selectedIdx) | 0;

  return (
    <FormControl
      fullWidth
      required
      sx={{
        // "& .MuiInputLabel-root": {
        //   color: `inherit`,
        // },
        width: width,
      }}
    >
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        defaultValue={data?.items[selectedIdx].k}
        labelId="select-label"
        variant="outlined" // filled, standard
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiSvgIcon-root ": {
            fill: "grey",
            mr: 0.5,
          },
        }}
      >
        {data?.items?.map((item) => (
          <MenuItem key={item.k} value={item.k}>
            {item.v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiSelect;
