import {useCreateNewPackMutation} from '../../../features/cards/packsApi';
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {BasicModalPacksList} from "../../../features/modal/BasicModal";
import {BtnForModal} from "../../../features/modal/BtnForModal";
import {ChildEditPack} from '../../../features/modal/ChildEditPack';


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