import React from "react";
import Typography from "@mui/material/Typography";
import {Button, ButtonGroup} from "@mui/material";
import Box from "@mui/material/Box";
import {selectCurrentUser} from "features/auth/authSlice";
import {useQueryParams, useAppSelector} from "common/hooks";

export const ShowPacksCards = () => {
  const [searchParams, setParam, deleteParam] = useQueryParams();

  const user_id = useAppSelector(selectCurrentUser);

  const ownerFilter = searchParams.get("user_id");

  const onClickShowPacksHandler = (value: "All" | "My") => {
    if (user_id) {
      value === "My" ? setParam("user_id", user_id) : deleteParam("user_id");
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
