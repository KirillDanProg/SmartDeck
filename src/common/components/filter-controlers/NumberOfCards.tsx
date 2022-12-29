import React, { FC, memo, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import { IGetPacksResponse } from "features/packs-cards/packs/packsSlice";
import { useQueryParams } from "../../hooks";

type PropsType = {
  data: IGetPacksResponse
}

export const NumberOfCards: FC<PropsType> = memo(({ data }) => {

  const [searchParams, setParam] = useQueryParams();

  const minCardsCount = data.minCardsCount;

  const maxCardsCount = data.maxCardsCount;

  let min = searchParams.get("min") || minCardsCount;
  let max = searchParams.get("max") || maxCardsCount;

  const [range, setRange] = useState([+min, +max]);

  const handleChange = (event: Event, value: number | number[]) => {
    const newRange = value as number[];
    //update UI
    setRange(newRange);

    if (+min !== newRange[0]) {
      min = String(newRange[0]);
      setParam("min", String(min));
    } else {
      max = String(newRange[1]);
      setParam("max", String(max));
    }
  };

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
});

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
