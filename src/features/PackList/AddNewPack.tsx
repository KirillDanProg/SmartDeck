import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";


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