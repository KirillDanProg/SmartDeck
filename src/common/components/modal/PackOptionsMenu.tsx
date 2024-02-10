import React, {FC, useState} from "react";
import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {EditPackModal} from "./EditPackModal";
import {BasicModalPacksList} from "./BasicModal";
import {
  CreateNewPackRequestType,
  useDeletePackMutation
} from "features/packs-cards/packs/packsApi";
import {useNavigate} from "react-router-dom";
import {pathToSpecificPack} from "../../navigate-to-card-helper/pathToSpecificPack";

type PackOptionsMenuType = {
  packId: string;
  packName: string;
  cb: (e: CreateNewPackRequestType) => void;
  isOwner: boolean;
};

export const PackOptionsMenu: FC<PackOptionsMenuType> = ({
  cb,
  packId,
  packName,
  isOwner
}) => {
  const navigate = useNavigate();
  const [deletePack] = useDeletePackMutation();
  const [openEditePackModal, setOpenEditePackModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleEditePackModalHandler = () => {
    setOpenEditePackModal(!openEditePackModal);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteHandler = async () => {
    await deletePack(packId);
  };
  const editeHandler = async (e: CreateNewPackRequestType) => {
    cb(e);
    setOpenEditePackModal(!openEditePackModal);
  };
  const learnPackHandler = () => {
    console.log(pathToSpecificPack.learnPack(packId));

    navigate(pathToSpecificPack.learnPack(packId));
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isOwner ? (
          <>
            <MenuItem onClick={learnPackHandler}>
              <SchoolOutlinedIcon sx={forIcons} />
              Learn
            </MenuItem>
            <MenuItem onClick={toggleEditePackModalHandler}>
              <ModeEditIcon sx={forIcons} />
              Edit
            </MenuItem>
            <MenuItem onClick={deleteHandler}>
              <DeleteOutlineIcon sx={forIcons} />
              Delete
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={learnPackHandler}>
            <SchoolOutlinedIcon sx={forIcons} />
            Learn
          </MenuItem>
        )}
      </Menu>

      <BasicModalPacksList
        title={"Edite pack"}
        open={openEditePackModal}
        closeModal={toggleEditePackModalHandler}
      >
        <EditPackModal
          initialValue={packName}
          closeModal={toggleEditePackModalHandler}
          cb={editeHandler}
        />
      </BasicModalPacksList>
    </>
  );
};

const forIcons = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20px",
  height: "20px",
  cursor: "pointer",
  padding: "5px"
};
