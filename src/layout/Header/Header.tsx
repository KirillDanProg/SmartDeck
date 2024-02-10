import {DarkModeSwitch} from "./DarkModeSwitch";
import {ColorModelContext} from "./ColorModeContext";
import incubatorLogo from "../../assets/logo/incubatorLogo.png";
import {useLogoutMutation} from "../../features/auth/authApi";
import {PATH} from "../AppRoutes/routes";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  FormGroup,
  Menu,
  MenuItem,
  CardMedia,
  IconButton
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TransgenderIcon from "@mui/icons-material/Transgender";
import {NavLink, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "features/auth/authSlice";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const userId = useSelector(selectCurrentUser);

  const {toggleColorMode} = useContext(ColorModelContext);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    navigate(PATH.PROFILE);
    setAnchorEl(null);
  };

  const logOutHandler = async () => {
    await logout();
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to={PATH.MAIN}>
            <CardMedia
              component="img"
              sx={{
                width: 184,
                height: 42
              }}
              src={incubatorLogo}
            />
          </NavLink>

          <FormGroup sx={{flexGrow: 1}}>
            <DarkModeSwitch onClick={toggleColorMode} />
          </FormGroup>

          {userId && (
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
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <TransgenderIcon fontSize={"small"} />
                  Profile
                </MenuItem>
                <MenuItem onClick={logOutHandler}>
                  <DirectionsRunIcon fontSize={"small"} />
                  Log out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
