import React from 'react';
import s from "../../../features/profile/Profile.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ReturnComponent = () => {
    return (
        <div className={s.topText}>
            <ArrowBackIcon/>
            <span> Back to Packs List</span>
        </div>
    );
};

