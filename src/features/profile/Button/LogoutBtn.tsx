import React from 'react';
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout'
import s from "./LogoutBtn.module.css"

export const LogoutBtn = () => {
    return (
        <Button  className={s.main}>
            <LogoutIcon color={"action"} fontSize={"small"}/>
            <span className={s.text}>Log out</span>
        </Button>
    );
};
