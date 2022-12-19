import { DarkModeSwitch } from "./DarkModeSwitch";
import s from "./Header.module.css";
import { ColorModelContex } from "./ColorModeContext";
import incubatorLogo from "../../assets/logo/incubatorLogo.png";
import { useLogoutMutation } from "../../features/auth/authApi";
import { PATH } from "../AppRoutes/routes";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import CardMedia from "@mui/material/CardMedia";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { NavLink, unstable_HistoryRouter } from "react-router-dom";
import { useContext, useState } from "react";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ChevronLeft } from "@mui/icons-material";
import { Divider, ListItem } from "@mui/material";

//todo: refactoring
export const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logout, {}] = useLogoutMutation();
  const [open, setOpen] = useState(false);


  const { mode, toggleColorMode } = useContext(ColorModelContex);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = async () => {
    await logout().unwrap();
  };
  //==============burger menu=========================
  const navigationLinks = [
    { name: "About developers", href: PATH.DEV_PAGE },
    { name: "About application", href: "" }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon  />
          </IconButton>
          <FormGroup sx={{ flexGrow: 1 }}>
            <DarkModeSwitch onClick={toggleColorMode} />
          </FormGroup>
          <NavLink to={PATH.LOGIN}>
            <CardMedia component="img" sx={{
              width: 209,
              height: 48
            }} src={incubatorLogo} />
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
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                // sx={{
                //     top: '55px',
                // }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink to={"/profile"} color={'inherite'} >
                    <TransgenderIcon fontSize={"small"} sx={{
                      paddingRight: 1
                    }} />
                    Profile
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={logOutHandler}>
                  <DirectionsRunIcon fontSize={"small"} sx={{
                    paddingRight: 1
                  }} />
                  Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
        <SwipeableDrawer open={open}
                         onOpen={() => setOpen(true)}
                         onClose={() => setOpen(false)}>
          <IconButton onClick={() => setOpen(false)} >
            <ChevronLeft />
          </IconButton>
          <Divider />
          <List>
            {navigationLinks.map((l, i) => (
                <ListItem key={l.name + i}>
                  <Link color={"textPrimary"}
                        variant={"button"}
                        className={s.burgerMenuLinks}
                        href={l.href}
                  >{l.name}</Link>
                </ListItem>
              )
            )}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </Box>
  );
};
