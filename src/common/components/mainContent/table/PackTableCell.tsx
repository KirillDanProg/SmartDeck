import {useAppSelector} from '../../../hooks';
import {selectCurrentUser} from '../../../../features/auth/authSlice';
import {
    CreateNewPackRequestType,
    useChangeNamePackMutation,
    useDeletePackMutation
} from '../../../../features/cards/packsApi';
import {PackResponseType} from '../../../../features/cards/packsSlice';
import React, {FC, useState} from 'react';
import {TableCell, TableRow} from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../../../layout/AppRoutes/routes';
import {convertedDate} from "../../../utils/convertedDate";
import s from "../../../../features/cards/CardsPage.module.css"
import {BasicModalPacksList} from "../../modal/BasicModal";
import {DeletePackModal} from "../../modal/deletePack/deletePackModal";
import {ChildCreatePack} from "../../modal/ChildCreatePack";

type PropsType = {
    packData: PackResponseType
    disabled: boolean
}

export const PackTableCell: FC<PropsType> = ({packData, disabled}) => {
    const [deletePack] = useDeletePackMutation()
    const [changeName, {isLoading}] = useChangeNamePackMutation()
    const navigate = useNavigate()
    const [openDeletePackModal, setOpenDeletePackModal] = useState(false)
    const [openEditePackModal, setOpenEditePackModal] = useState(false)

    const userId = useAppSelector(selectCurrentUser)
    const packOwner = userId === packData.user_id

    const deletePackHandler = async () => {
        await deletePack(packData._id)
        setOpenDeletePackModal(false)
    }

    const editeNameChangeHandler = async (e: CreateNewPackRequestType) => {
        await changeName({
            name: e.name,
            _id: packData._id
        })
    }

    const redirectToPackCardHandle = () => {
        navigate(`${PATH.CARDS}?cardsPack_id=${packData._id}`)
    }

    const toggleDeletePackModalHandler = () => {
        setOpenDeletePackModal(!openDeletePackModal)
    }
    const toggleEditePackModalHandler = () => {
        setOpenEditePackModal(!openEditePackModal)
    }

    return (
        <TableRow
            key={packData._id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell onClick={redirectToPackCardHandle} align="left"
                       style={{cursor: 'pointer'}}>
                {packData.name}
            </TableCell>
            <TableCell align="center">{packData.cardsCount}</TableCell>
            <TableCell align="center">{convertedDate(packData.updated)}</TableCell>
            <TableCell align="right">{packData.user_name}</TableCell>
            <TableCell align="right" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>

                {
                    packOwner
                        ? <>{
                            disabled ? <>
                                    <SchoolOutlinedIcon className={s.forIconsDisabled}/>
                                    <ModeEditIcon className={s.forIconsDisabled}/>
                                    <DeleteOutlineIcon className={s.forIconsDisabled}/>
                                </> :
                                <>
                                    {packData.cardsCount ? <SchoolOutlinedIcon className={s.forIcons}/> :
                                        <SchoolOutlinedIcon className={s.forIconsDisabled}/>}
                                    <ModeEditIcon className={s.forIcons} onClick={toggleEditePackModalHandler}/>
                                    <DeleteOutlineIcon className={s.forIcons} onClick={toggleDeletePackModalHandler}/>
                                </>
                        }
                        </>
                        : <>
                            {disabled ? <SchoolOutlinedIcon className={s.forIconsDisabled}/>
                                : <> {packData.cardsCount ? <SchoolOutlinedIcon className={s.forIcons}/>
                                    : <SchoolOutlinedIcon className={s.forIconsDisabled}/>
                                }
                                </>
                            }
                        </>
                }
            </TableCell>
            <BasicModalPacksList title={"Edite pack"} open={openEditePackModal} closeModal={toggleEditePackModalHandler}>
                <ChildCreatePack disabled={isLoading} inputValueStart={packData.name} closeModal={toggleEditePackModalHandler} cb={editeNameChangeHandler}/>
            </BasicModalPacksList>
            <BasicModalPacksList title={"Delete pack"} open={openDeletePackModal}
                                 closeModal={toggleDeletePackModalHandler}>
                <DeletePackModal cb={deletePackHandler} closeModal={toggleDeletePackModalHandler}
                                 title={packData.name}/>
            </BasicModalPacksList>
        </TableRow>
    );
};

