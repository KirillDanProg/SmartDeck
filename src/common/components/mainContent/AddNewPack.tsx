import {CreateNewPackRequestType, useCreateNewPackMutation} from '../../../features/cards/packsApi';
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {BasicModalPacksList} from "../modal/BasicModal";
import {BtnForModal} from "../modal/BtnForModal";
import {ChildCreatePack} from '../modal/ChildCreatePack';


export const AddNewPack = () => {
    const [addPackModalOpen, setAddPackModalOpen] = useState(false)
    const [addNewPack, {}] = useCreateNewPackMutation()

    const addNewPackHandler = async (e: CreateNewPackRequestType) => {
        addNewPack({
            name: e.name,
            privateValue: e.privateValue
        })
        setAddPackModalOpen(false)
    }

    const openModalAddPack = () => {
        setAddPackModalOpen(true)
    }
    const closeModalAddPack = (e: boolean) => {
        setAddPackModalOpen(e)
    }

    return (
        <>
            <BasicModalPacksList title={"Add new pack"} open={addPackModalOpen} closeModal={closeModalAddPack}>
                <ChildCreatePack closeModal={closeModalAddPack} cb={addNewPackHandler}/>
            </BasicModalPacksList>
            <Button
                disabled={false}
                onClick={openModalAddPack}
                variant={'contained'}
            >
                Add new pack
            </Button>
        </>

    )
}