import React, {FC, useState} from 'react';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
    CreateNewPackRequestType,
    useDeletePackMutation
} from "../../../features/cards/packsApi";
import {ChildCreatePack} from "./ChildCreatePack";
import {BasicModalPacksList} from "./BasicModal";

type ModalForMyPackType = {
    packId: string
    packName: string
    cb: (e: CreateNewPackRequestType) => void
    isLoading: boolean
}

export const ModalForMyPack: FC<ModalForMyPackType> = ({isLoading,cb,packId, packName}) => {
    const [deletePack] = useDeletePackMutation()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const [openEditePackModal, setOpenEditePackModal] = useState(false)
    const toggleEditePackModalHandler = () => {
        setOpenEditePackModal(!openEditePackModal);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteHandler = async () => {
        await deletePack(packId)
        window.history.back()
    }

    const editeHandler = async(e: CreateNewPackRequestType) => {
        await cb(e)
        setOpenEditePackModal(!openEditePackModal);
    }

    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{
                    marginTop: '30px'
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                }}>
                    <SchoolOutlinedIcon sx={forIcons}/>
                    Learn
                </MenuItem>
                <MenuItem onClick={toggleEditePackModalHandler}>
                    <ModeEditIcon sx={forIcons} onClick={toggleEditePackModalHandler}/>
                    Edit </MenuItem>
            <MenuItem onClick={deleteHandler}>
                <DeleteOutlineIcon sx={forIcons} onClick={deleteHandler}/>
                    Delete </MenuItem>
            </Menu>
            <BasicModalPacksList title={"Edite pack"} open={openEditePackModal} closeModal={toggleEditePackModalHandler}>
                <ChildCreatePack disabled={isLoading} inputValueStart={packName} closeModal={toggleEditePackModalHandler} cb={editeHandler}/>
            </BasicModalPacksList>
        </div>
    );
};

const forIcons = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    padding: '5px'
}