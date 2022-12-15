import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CardMedia from '@mui/material/CardMedia';
import {DarkModeSwitch} from "./DarkModeSwitch";
import {PaletteMode} from "@mui/material";
import incubatorLogo from '../../assets/logo/incubatorLogo.png'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TransgenderIcon from '@mui/icons-material/Transgender';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {useLogoutMutation} from "../../features/auth/authApi";
import {PATH} from "../AppRoutes/routes";
import {useContext} from "react";
import {ColorModelContex} from "./ColorModeContext";

export const Header = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [logout, {}] = useLogoutMutation()

    const {mode, toggleColorMode} = useContext(ColorModelContex)
    console.log(mode)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutHandler = async () => {
        debugger
        await logout().unwrap()
    }


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <FormGroup sx={{flexGrow: 1}}>
                        <DarkModeSwitch onClick={toggleColorMode} />
                    </FormGroup>
                    <NavLink to={PATH.LOGIN}>
                        <CardMedia component="img" sx={{
                            width: 209,
                            height: 48,
                        }} src={incubatorLogo}/>
                    </NavLink>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <NavLink to={"/profile"} className={s.link}>
                                        <TransgenderIcon fontSize={"small"} sx={{
                                            paddingRight: 1
                                        }}/>
                                        Profile
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={logOutHandler}>
                                    <DirectionsRunIcon fontSize={"small"} sx={{
                                        paddingRight: 1

                                    }}/>
                                    Log out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
