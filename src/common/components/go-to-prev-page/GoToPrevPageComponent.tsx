import s from "../../../features/profile/Profile.module.css";
import {PATH} from "../../../layout/AppRoutes/routes";
import React from "react";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {Button} from "@mui/material";

export const GoToPrevPageComponent = () => {
  const navigate = useNavigate();
  const onGoToPrevPage = () => {
    navigate(-1);
  };
  return (
    <Box sx={boxStyle}>
      <Button onClick={onGoToPrevPage}>
        <ArrowBackIosIcon />
      </Button>
    </Box>
  );
};

const boxStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  bottom: "20px",
  right: "50px",
  marginBottom: "40px"
};
