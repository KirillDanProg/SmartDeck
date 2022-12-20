import React, { FC } from "react";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Box from "@mui/material/Box";


type PropsType = {
  params: URLSearchParams
  setParams: (value: URLSearchParams) => void
}
export const FiltersReset: FC<PropsType> = ({ setParams, params }) => {

  const resetFilters = () => {
    const keys = Array.from(params.keys());
    keys.forEach(key => params.delete(key));
    setParams(params);
  };

  return (
    <Box sx={{ alignSelf: "flex-end", marginBottom: "2px" }}>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.2)",
            transition: "0.4s"
          }
        }}
      >
        <FilterAltOffIcon onClick={resetFilters} />
      </Box>
    </Box>
  );
};

