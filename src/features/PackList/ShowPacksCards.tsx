import React from "react";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup } from "@mui/material";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../common/hooks";
import { selectCurrentUser } from "../auth/authSlice";
import { useSearchParams } from "react-router-dom";

export const ShowPacksCards = () => {

  const [params, setParams] = useSearchParams();

  const user_id = useAppSelector(selectCurrentUser);

  const ownerFilter = params.get("user_id");

  const onClickShowPacksHandler = (value: "All" | "My") => {
    if (user_id) {
      value === "My"
        ? params.set("user_id", user_id)
        : params.delete("user_id");

      setParams(params)
    }
  };

  return (
    <Box>
      <Typography variant="h6">Show packs cards</Typography>
      <ButtonGroup
        sx={btnStyle}
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button
          disabled={false}
          onClick={() => onClickShowPacksHandler("My")}
          sx={btnStyle}
          variant={ownerFilter ? "contained" : "outlined"}
        >
          My
        </Button>
        <Button
          disabled={false}
          onClick={() => onClickShowPacksHandler("All")}
          sx={btnStyle}
          variant={ownerFilter ? "outlined" : "contained"}
        >
          All
        </Button>
      </ButtonGroup>
    </Box>
  );
};

const btnStyle = {
  width: "196px",
  height: "39px"
};
