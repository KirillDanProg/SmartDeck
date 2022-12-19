import {useCreateNewPackMutation} from '../../../features/cards/packsApi';
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {BasicModalPacksList} from "../../../features/modal/BasicModal";
import {ChildEditPack} from "../../../features/modal/ChildEditPack";
import {BtnForModal} from "../../../features/modal/BtnForModal";


export const AddNewPack = () => {
    const [addPackModalOpen, setAddPackModalOpen] = useState(false)
    const [addNewPack, {}] = useCreateNewPackMutation()

    const addNewPackHandler = async () => {
        addNewPack('Kirill, add new pack')
    }

    const openModalAddPack = () => {
        setAddPackModalOpen(true)
    }
    const closeModalAddPack = (e: boolean) => {
        setAddPackModalOpen(e)
    }

    return (
        <>
            <BasicModalPacksList title={"Edit pack"} open={addPackModalOpen} closeModal={closeModalAddPack}>
                <ChildEditPack/>
                <BtnForModal closeModal={closeModalAddPack}/>
            </BasicModalPacksList>
            <Button
                disabled={false}
                onClick={openModalAddPack}
            >
                Add new pack
            </Button>
        </>

    )
}