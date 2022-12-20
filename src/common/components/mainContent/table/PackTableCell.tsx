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
import s from "../../../../features/cards/CardsPage.module.css"

type PropsType = {
    packData: PackResponseType
    disabled: boolean
}

export const PackTableCell: FC<PropsType> = ({packData, disabled}) => {
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
            <TableCell align="right">{packData.user_name}</TableCell>
            <TableCell align="right" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>

                {
                    packOwner
                        ? <>{
                        disabled ? <>
                                <SchoolOutlinedIcon className={s.forIconsDisabled} />
                                <ModeEditIcon className={s.forIconsDisabled}/>
                                <DeleteOutlineIcon className={s.forIconsDisabled}/>
                            </> :
                        <>
                            <SchoolOutlinedIcon className={s.forIcons}/>
                            <ModeEditIcon className={s.forIcons} onClick={editeNameChangeHandler}/>
                            <DeleteOutlineIcon className={s.forIcons} onClick={deletePackHandler}/>
                        </>
                    }
                        </>

                        : <>
                            { disabled ? <SchoolOutlinedIcon className={s.forIconsDisabled}/> :
                                <SchoolOutlinedIcon className={s.forIcons}/>}
                        </>
                }
            </TableCell>
        </TableRow>
    );
};

