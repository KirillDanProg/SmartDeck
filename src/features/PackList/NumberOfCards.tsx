import React, { FC, useEffect, useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import { IGetPacksResponse } from "../cards/packsSlice";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../common/utils/useDebounce";

type PropsType = {
  data: IGetPacksResponse
  isLoading: boolean
}
export const NumberOfCards: FC<PropsType> = ({ data }) => {

  const [params, setParams] = useSearchParams();

  const minCardsCount = data.minCardsCount;

  const maxCardsCount = data.maxCardsCount;

  let min = params.get("min");
  let max = params.get("max");

  const initRange = (!min && !max) ? [minCardsCount, maxCardsCount] : [min, max]

  const [range, setRange] = useState<any>(initRange);

  const handleChange = (event: Event, value: any) => {
    const newRange = value as number[];
    setRange(newRange);
    min = String(newRange[0]);
    max = String(newRange[1]);
    params.set("min", String(min));
    params.set("max", String(max));
  };

  const debouncedRange = useDebounce(range);


  useEffect(() => {
    setParams(params);
  }, [debouncedRange]);

  return (
    <Box>
      <Typography variant="h6">Number of cards</Typography>
      <Box sx={containerStyle}>
        <Box sx={style}>
          <Typography>{range[0]}</Typography>
        </Box>

        <Slider
          disabled={false}
          sx={{ width: "155px" }}
          getAriaLabel={() => "range"}
          value={range}
          onChange={handleChange}
          valueLabelDisplay="off"
          max={maxCardsCount}
        />
        <Box sx={style}>
          <Typography>{range[1]}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "36px",
  height: "36px",
  background: "#FFFFFF",
  border: "1px solid #D9D9D9",
  borderRadius: "2px",
  margin: "0 15px 0 0"
};
const containerStyle = {
  display: "flex",
  gap: "10px",
  flexDirection: "row",
  alignItems: "center"
};
