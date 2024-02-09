import {selectCurrentUser} from "features/auth/authSlice";
import {
  CreateNewPackRequestType,
  useChangeNamePackMutation,
  useDeletePackMutation
} from "features/packs-cards/packs/packsApi";
import {PackResponseType} from "features/packs-cards/packs/packsSlice";
import s from "features/packs-cards/cards/CardsPage.module.css";

import React, {FC, useState} from "react";
import {TableCell, TableRow} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "layout/AppRoutes/routes";
import {convertedDate} from "../../utils";
import {useAppSelector} from "../../hooks";
import {BasicModalPacksList} from "../modal/BasicModal";
import {ChildCreatePack} from "../modal/ChildCreatePack";
import {DeletePackModal} from "../modal/deletePack/deletePackModal";
import {pathToSpecificPack} from "../../navigate-to-card-helper/pathToSpecificPack";

type PropsType = {
  packData: PackResponseType;
  disabled: boolean;
};

export const PackTableCell: FC<PropsType> = ({packData}) => {
  const [deletePack] = useDeletePackMutation();
  const [changeName, {isLoading}] = useChangeNamePackMutation();
  const navigate = useNavigate();
  const [openDeletePackModal, setOpenDeletePackModal] = useState(false);
  const [openEditePackModal, setOpenEditePackModal] = useState(false);

  const userId = useAppSelector(selectCurrentUser);

  const packOwner = userId === packData.user_id;

  const deletePackHandler = async () => {
    await deletePack(packData._id);
    setOpenDeletePackModal(false);
  };

  const editeNameChangeHandler = async (e: CreateNewPackRequestType) => {
    await changeName({
      name: e.name,
      _id: packData._id
    });
  };
  const toggleDeletePackModalHandler = () => {
    setOpenDeletePackModal(!openDeletePackModal);
  };
  const toggleEditePackModalHandler = () => {
    setOpenEditePackModal(!openEditePackModal);
  };

  const learnPackHandler = () => {
    if (packData.cardsCount) {
      navigate(pathToSpecificPack.learnPack(packData._id));
    }
  };

  return (
    <TableRow>
      <TableCell>
        <NavLink
          style={nameLinkStyle}
          to={`${PATH.CARDS}?cardsPack_id=${packData._id}`}
        >
          {packData.name}
        </NavLink>
      </TableCell>

      <TableCell align="center">{packData.cardsCount}</TableCell>
      <TableCell align="center">{convertedDate(packData.updated)}</TableCell>
      <TableCell align="right">{packData.user_name}</TableCell>
      <TableCell align="right" sx={actionsIconsStyle}>
        {packOwner ? (
          <>
            <SchoolOutlinedIcon
              onClick={learnPackHandler}
              className={packData.cardsCount ? s.forIcons : s.forIconsDisabled}
            />
            <ModeEditIcon
              className={s.forIcons}
              onClick={toggleEditePackModalHandler}
            />
            <DeleteOutlineIcon
              className={s.forIcons}
              onClick={toggleDeletePackModalHandler}
            />
          </>
        ) : (
          <SchoolOutlinedIcon
            onClick={learnPackHandler}
            className={packData.cardsCount ? s.forIcons : s.forIconsDisabled}
          />
        )}
      </TableCell>

      <BasicModalPacksList
        title={"Edite pack"}
        open={openEditePackModal}
        closeModal={toggleEditePackModalHandler}
      >
        <ChildCreatePack
          disabled={isLoading}
          inputValueStart={packData.name}
          closeModal={toggleEditePackModalHandler}
          cb={editeNameChangeHandler}
        />
      </BasicModalPacksList>
      <BasicModalPacksList
        title={"Delete pack"}
        open={openDeletePackModal}
        closeModal={toggleDeletePackModalHandler}
      >
        <DeletePackModal
          cb={deletePackHandler}
          closeModal={toggleDeletePackModalHandler}
          title={packData.name}
        />
      </BasicModalPacksList>
    </TableRow>
  );
};

const nameLinkStyle = {
  textOverflow: "ellipsis"
};
const actionsIconsStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  gap: "5px"
};
