import React from "react";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import Box from "@mui/material/Box";

export const EmptyList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        fontSize: "20px",
        gap: "10px"
      }}
    >
      <PlaylistRemoveIcon fontSize={"large"} />
      no matches found
    </Box>
  );
};
