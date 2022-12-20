import React, {FC} from 'react';
import {Rating, TableCell, TableRow} from '@mui/material';
import {CardResponseType} from '../../../../features/cards/api/cardsSlice';
import {NavLink} from 'react-router-dom';
import {useChangeCardNameMutation, useDeleteCardMutation} from '../../../../features/cards/api/cardsApi';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useAppSelector} from '../../../hooks';
import {selectCurrentUser} from '../../../../features/auth/authSlice';

type PropsType = {
    cardData: CardResponseType
}

export const CardTableCell: FC<PropsType> = ({cardData}) => {
    const [deleteCard, {}] = useDeleteCardMutation();
    const [changeCardName, {}] = useChangeCardNameMutation();
    const deleteCardHandler = async () => {
        await deleteCard(cardData._id)
    }
    const userId = useAppSelector(selectCurrentUser)
    const packOwner = userId === cardData.user_id
    const editeNameChangeHandler = async () => {
        await changeCardName({
            _id: cardData._id,
            question: 'What?????'
        })
    }
    return (
        <TableRow
            key={cardData._id}
            sx={{
                '&:last-child td, &:last-child th': {border: 0},
                cursor: 'pointer',
            }}>
            <TableCell align="left" style={{width: '30%'}}>
                <NavLink style={{textDecoration: 'none', cursor: 'pointer'}}
                         to={'/'}>{cardData.question}</NavLink>
            </TableCell>
            <TableCell style={{width: '30%'}} align="center"> <NavLink
                style={{textDecoration: 'none', cursor: 'pointer'}}
                to={'/'}>{cardData.answer}</NavLink></TableCell>
            <TableCell style={{width: '20%'}} align="center"><NavLink
                style={{textDecoration: 'none', cursor: 'pointer'}}
                to={'/'}>{cardData.updated}</NavLink></TableCell>
            <TableCell style={{width: '20%'}} align="right"> <NavLink
                style={{textDecoration: 'none', cursor: 'pointer'}}
                to={'/'}></NavLink>
                <Rating name="size-large" defaultValue={2} size="large"/>
                {packOwner && <>
                    <ModeEditIcon onClick={editeNameChangeHandler}/>
                    <DeleteOutlineIcon onClick={deleteCardHandler}/>
                </>}
            </TableCell>
        </TableRow>
    );
};

