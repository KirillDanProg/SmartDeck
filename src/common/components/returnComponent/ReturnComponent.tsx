import React from 'react';
import s from "../../../features/profile/Profile.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../layout/AppRoutes/routes";

export const ReturnComponent = () => {

    return (
        <div className={s.topText}>
            <ArrowBackIcon/>
            <NavLink to={PATH.PACK_LISTS}> Back to Packs List</NavLink>
        </div>
    );
};

