import {useCreateNewPackMutation} from '../../../features/cards/packsApi';
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {BasicModalPacksList} from "../modal/BasicModal";
import {BtnForModal} from "../modal/BtnForModal";
import {ChildEditPack} from '../modal/ChildEditPack';


export const AddNewPack = () => {
    const [addPackModalOpen, setAddPackModalOpen] = useState(false)
    const [addNewPack, {}] = useCreateNewPackMutation()

    const addNewPackHandler = async () => {
        addNewPack('Kirill, add new pack')
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
            <BasicModalPacksList title={"Edit pack"} open={addPackModalOpen} closeModal={closeModalAddPack}>
                <ChildEditPack cb={addNewPackHandler}/>

                <BtnForModal closeModal={closeModalAddPack} cb={addNewPackHandler}/>
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