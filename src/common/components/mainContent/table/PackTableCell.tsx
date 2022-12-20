import {useAppSelector} from '../../../hooks';
import {selectCurrentUser} from '../../../../features/auth/authSlice';
import {useChangeNamePackMutation, useDeletePackMutation} from '../../../../features/cards/packsApi';
import {PackResponseType} from '../../../../features/cards/packsSlice';
import React, {FC} from 'react';
import {TableCell, TableRow} from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../../layout/AppRoutes/routes';
import {convertedDate} from "../../../utils/convertedDate";

type PropsType = {
    packData: PackResponseType
}

export const PackTableCell: FC<PropsType> = ({packData}) => {
    const [deletePack] = useDeletePackMutation()
    const [changeName] = useChangeNamePackMutation()

    const userId = useAppSelector(selectCurrentUser)
    const packOwner = userId === packData.user_id

    const deletePackHandler = async () => {
        await deletePack(packData._id)
    }

    const editeNameChangeHandler = async () => {
        await changeName({
            name: 'Pack\'s name changed',
            _id: packData._id
        })
    }

    return (
        <TableRow
            key={packData._id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <NavLink to={`${PATH.PACK_LISTS}/${packData._id}`}><TableCell align="left" style={{cursor: 'pointer'}}>
                {packData.name}
            </TableCell></NavLink>
            <TableCell align="center">{packData.cardsCount}</TableCell>
            <TableCell align="center">{convertedDate(packData.updated)}</TableCell>
            <TableCell align="right">{packData.created}</TableCell>
            <TableCell align="right" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>

                {
                    packOwner
                        ? <>
                            <SchoolOutlinedIcon/>
                            <ModeEditIcon onClick={editeNameChangeHandler}/>
                            <DeleteOutlineIcon onClick={deletePackHandler}/>
                        </>

                        : <SchoolOutlinedIcon/>
                }
            </TableCell>
        </TableRow>
    );
};

