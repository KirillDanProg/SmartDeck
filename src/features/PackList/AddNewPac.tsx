import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import { AddEditPackModal } from './modal/AddEditPackModal'
import imageNotFound from './../../assets/notImage.jpg'
import {Button} from "@mui/material";

export const AddNewPack = () => {
    const [addPackModalOpen, setAddPackModalOpen] = useState(false)


    const addNewPackHandler = () => {
        setAddPackModalOpen(true)
    }

    const closeModalAddPack = () => {
        setAddPackModalOpen(false)
    }

    return (
        <>
            {/*<AddEditPackModal
                image={imageNotFound}
                name=""
                title="Add new pack"
                open={addPackModalOpen}
                closeModal={closeModalAddPack}
            />*/}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    Packs list
                </Typography>
                <Button
                    disabled={false}
                    onClick={addNewPackHandler}
                >
                    Add new pack
                </Button>
            </Box>
        </>
    )
}