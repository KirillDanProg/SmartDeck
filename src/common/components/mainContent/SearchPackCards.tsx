import React, { ChangeEvent, memo, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import { useDebounce } from "../../utils/useDebounce";
import { useSearchParams } from "react-router-dom";


export const SearchPacksCard = memo(() => {

  const [params, setParams] = useSearchParams();

  const searchPackName = params.get("packName") || "";
  // update UI with setValue but searchPackName
  // used instead of value
  const [value, setValue] = useState(searchPackName);

  const debouncedValue = useDebounce(searchPackName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    params.set("packName", event.target.value);
  };

  useEffect(() => {
    if (debouncedValue.trim()) {
      params.set("packName", debouncedValue);
    } else {
      params.delete("packName");
    }
    setParams(params);
  }, [debouncedValue]);

  return (
    <Box>
      <Typography variant="h6">Search</Typography>
      <TextField
        disabled={false}
        size={"small"}
        placeholder={"Provide your text"}
        value={searchPackName}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchSharpIcon />
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
});