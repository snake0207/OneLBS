import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

const MuiSearch = ({
  startIcon,
  endIcon,
  enableIconClick = false,
  callback,
}) => {
  const [value, setValue] = useState("");

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-search-words">검색어</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search-words"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => value && callback(value)}
        startAdornment={
          startIcon ? (
            <InputAdornment position="start">
              <IconButton
                onClick={() => enableIconClick && callback(value)}
                sx={{ color: "secondary.main" }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endIcon ? (
            <InputAdornment position="end">
              <IconButton
                onClick={() => enableIconClick && callback(value)}
                sx={{ color: "secondary.main" }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
    </FormControl>
  );
};

export default MuiSearch;
