import s from "../../../features/profile/Profile.module.css";
import { PATH } from "../../../layout/AppRoutes/routes";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export const ReturnComponent = () => {

  return (
    <Box sx={boxStyle}>
      <ArrowBackIosIcon />
      <NavLink to={PATH.PACK_LISTS} className={s.link}>
        Back to Packs List
      </NavLink>
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