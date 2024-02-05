import React from "react";
import Fab from "@mui/material/Fab";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const UserPhotoChangeBtn = () => {
  return (
    <Fab size={"small"} component="label" aria-label="upload photo">
      <input hidden accept="image/*" type="file" />
      <AddAPhotoIcon fontSize={"small"} color={"disabled"} />
    </Fab>
  );
};
