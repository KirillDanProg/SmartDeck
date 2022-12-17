import React from 'react'
import Button from "@mui/material/Button";
import {useCreateNewPackMutation} from "../../../features/cards/api/packsApi";



export const AddNewPack = () => {
    // const [addPackModalOpen, setAddPackModalOpen] = useState(false)
    const [addNewPack, {}] = useCreateNewPackMutation()

    const addNewPackHandler = async () => {
        addNewPack( "Kirill, add new pack" )
    }

    // const closeModalAddPack = () => {
    //     setAddPackModalOpen(false)
    // }

    return (
        <Button
            disabled={false}
            onClick={addNewPackHandler}
        >
            Add new pack
        </Button>
    )
}