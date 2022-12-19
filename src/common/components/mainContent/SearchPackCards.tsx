import React, { ChangeEvent, FC, memo, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import { useDebounce } from "../../utils/useDebounce";
import { useSearchParams } from "react-router-dom";


export const SearchPacksCard = memo(() => {

  const [params, setParams] = useSearchParams();

  const searchValue = params.get("packName") || "";

  const [value, setValue] = useState(searchValue);

  const debouncedValue = useDebounce(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue.trim()) {
      params.set("packName",  debouncedValue )
    } else {
      params.delete("packName")
      setValue("")
    }
    setParams(params)
  }, [debouncedValue])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px"
      }}
    >
      <Typography variant="h6">Search</Typography>
      <TextField
        disabled={false}
        size={"small"}
        placeholder={"Provide your text"}
        value={value}
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