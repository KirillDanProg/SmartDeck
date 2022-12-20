import React, { FC } from "react";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Box from "@mui/material/Box";
import s from "../../../../features/cards/CardsPage.module.css"


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
      <Box className={s.forIcons}>
        <FilterAltOffIcon onClick={resetFilters} />
      </Box>
    </Box>
  );
};

