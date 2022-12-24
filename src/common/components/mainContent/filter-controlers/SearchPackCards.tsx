import React, { ChangeEvent, memo, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import { useQueryParams } from "common/hooks";


export const SearchPacksCard = memo(() => {

  const [searchParams, setParam, deleteParam] = useQueryParams()

  const searchPackName = searchParams.get("packName") || "";

  const [value, setValue] = useState(searchPackName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(!event.target.value.trim()) {
      deleteParam("packName")
    } else {
      setValue(event.target.value);
      setParam("packName", event.target.value);
    }
  };

  return (
    <Box>
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