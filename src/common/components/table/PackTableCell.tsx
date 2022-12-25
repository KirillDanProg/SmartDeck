import { selectCurrentUser } from "features/auth/authSlice";
import { useChangeNamePackMutation, useDeletePackMutation } from "features/cards/packsApi";
import { PackResponseType } from "features/cards/packsSlice";
import s from "features/cards/CardsPage.module.css";

import React, { FC } from "react";
import { TableCell, TableRow } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink, useNavigate } from "react-router-dom";
import { PATH } from "layout/AppRoutes/routes";
import { convertedDate } from "../../utils";
import { useAppSelector } from "../../hooks";

type PropsType = {
  packData: PackResponseType
  disabled:boolean
}

export const PackTableCell: FC<PropsType> = ({ packData }) => {
  const [deletePack] = useDeletePackMutation();
  const [changeName] = useChangeNamePackMutation();

  const navigate = useNavigate();

  const userId = useAppSelector(selectCurrentUser);
  const packOwner = userId === packData.user_id;

  const deletePackHandler = async () => {
    await deletePack(packData._id);
  };

  const editeNameChangeHandler = async () => {
    await changeName({
      name: "Pack's name changed",
      _id: packData._id
    });
  };

  const learnPackHandler = () => {
    if (packData.cardsCount) {
      navigate(`${PATH.LEARN_PACK}?cardsPack_id=${packData._id}`);
    }
  };

  return (
    <TableRow>

      <TableCell>
        <NavLink style={nameLinkStyle} to={`${PATH.CARDS}?cardsPack_id=${packData._id}`}>
          {packData.name}
        </NavLink>
      </TableCell>

      <TableCell align="center">{packData.cardsCount}</TableCell>
      <TableCell align="center">{convertedDate(packData.updated)}</TableCell>
      <TableCell align="right">{packData.user_name}</TableCell>
      <TableCell align="right" sx={actionsIconsStyle}>

        {
          packOwner
            ? <>
              <SchoolOutlinedIcon onClick={learnPackHandler} className={
                packData.cardsCount ? s.forIcons : s.forIconsDisabled}
              />
              <ModeEditIcon className={s.forIcons} onClick={editeNameChangeHandler}
              />
              <DeleteOutlineIcon className={s.forIcons} onClick={deletePackHandler}
              />
            </>

            : <SchoolOutlinedIcon onClick={learnPackHandler}
                                  className={packData.cardsCount ? s.forIcons : s.forIconsDisabled}
            />
        }
      </TableCell>
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