import React, {FC, useState} from "react";
import {Rating, TableCell, TableRow} from "@mui/material";
import {CardResponseType} from "features/cards/cardsApi/cardsSlice";
import {NavLink} from "react-router-dom";
import {
    RequestCreateNewCardT,
    useChangeCardNameMutation,
    useDeleteCardMutation
} from "features/cards/cardsApi/cardsApi";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useAppSelector} from "../../../hooks";
import {selectCurrentUser} from "features/auth/authSlice";
import {DeletePackModal} from "../../modal/deletePack/deletePackModal";
import {BasicModalPacksList} from "../../modal/BasicModal";
import {CreateNewCardModal} from "../../modal/CreateNewCardModal/CreateNewcardModal";

type PropsType = {
    cardData: CardResponseType
}

export const CardTableCell: FC<PropsType> = ({cardData}) => {
    const [deleteCard, {isLoading: isLoadingDelete}] = useDeleteCardMutation();
    const [changeCardName, {isLoading: isLoadingChangeCard}] = useChangeCardNameMutation();
//todo: if it works -> change naming and refactoring
    const [openDeletePackModal, setOpenDeletePackModal] = useState(false)
    const [openEditePackModal, setOpenEditePackModal] = useState(false)
    const toggleDeletePackModalHandler = () => {
        setOpenDeletePackModal(!openDeletePackModal)
    }

    const toggleEditePackModalHandler = () => {
        setOpenEditePackModal(!openEditePackModal)
    }

    const deleteCardHandler = async () => {
        await deleteCard(cardData._id);
    };
    const userId = useAppSelector(selectCurrentUser);

    const packOwner = userId === cardData.user_id;

    const editeNameChangeHandler = async (data: RequestCreateNewCardT) => {
        await changeCardName({
            _id: cardData._id,
            question: data.question,
            answer: data.answer
        });
        setOpenEditePackModal(false)
    };

    return (
        <TableRow
            key={cardData._id}
            sx={{
                "&:last-child td, &:last-child th": {border: 0},
                cursor: "pointer"
            }}>
            <TableCell align="left" style={{width: "30%"}}>
                <NavLink style={tableCellStyle}
                         to={"/"}>{cardData.question}</NavLink>
            </TableCell>
            <TableCell style={{width: "30%"}} align="center">
                <NavLink
                    to={"/"}>{cardData.answer}
                </NavLink>
            </TableCell>
            <TableCell style={{width: "20%"}} align="center"><NavLink
                style={tableCellStyle}
                to={"/"}>{cardData.updated}</NavLink></TableCell>
            <TableCell style={{width: "20%"}} align="right">
                <NavLink
                    style={tableCellStyle}
                    to={"/"}>
                </NavLink>
                <Rating name="size-large" defaultValue={2} size="large"/>
                {packOwner && <>
                    <ModeEditIcon onClick={toggleEditePackModalHandler}/>
                    <DeleteOutlineIcon onClick={toggleDeletePackModalHandler}/>
                </>}
            </TableCell>
            <BasicModalPacksList title={"Edite card"}
                                 open={openEditePackModal}
                                 closeModal={toggleEditePackModalHandler}>
                <CreateNewCardModal
                    cardData={cardData}
                    cb={editeNameChangeHandler}
                    disabled={isLoadingChangeCard}
                    closeModal={toggleEditePackModalHandler}
                />
            </BasicModalPacksList>

            <BasicModalPacksList title={"Delete card"}
                                 open={openDeletePackModal}
                                 closeModal={toggleDeletePackModalHandler}>
                <DeletePackModal disabled={isLoadingDelete}
                                 cb={deleteCardHandler}
                                 closeModal={toggleDeletePackModalHandler}
                                 title={cardData.question}
                />
            </BasicModalPacksList>
        </TableRow>
    );
};

const tableCellStyle = {textDecoration: "none", cursor: "pointer"};