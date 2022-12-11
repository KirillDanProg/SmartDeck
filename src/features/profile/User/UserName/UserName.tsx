import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DoneIcon from '@mui/icons-material/Done'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import Box from '@mui/material/Box'
import {Button} from "@mui/material";



export const UserName = () => {

    const profileUserName = "Ivan" // come from server


    const [userName, setUserName] = useState(profileUserName)
    const [isEditing, setIsEditing] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const changeEditeMode = () => setIsEditing(!isEditing)

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Escape') changeEditeMode()
    }

    const error = userName.trim().length < 1

    return (
        <Box sx={{ mb: 1, display: 'inline-flex', alignItems: 'center' }}>
            {!isEditing ? (
                <>
                    <Typography fontWeight={'bold'} variant="body1">
                        {userName}
                    </Typography>
                    <IconButton size={"small"} color={"default"} aria-label={"change name"} onClick={changeEditeMode}>
                        <BorderColorIcon fontSize={'small'} />
                    </IconButton>
                </>

            ) : (
                <div onClick={changeEditeMode}>
                    <TextField
                        size={'small'}
                        variant={'standard'}
                        InputProps={{ style: { font: 'inherit' } }}
                        value={userName}
                        autoFocus
                        helperText={error && 'Input text required'}
                        error={error}
                        onChange={onChangeHandler}
                        onKeyDown={onKeyDownHandler}
                        onBlur={changeEditeMode}
                        onDoubleClick={changeEditeMode} // no working
                    />
                    <IconButton color="default" aria-label="save changed name" onClick={changeEditeMode} >
                        <Button size={"small"} >save</Button>
                    </IconButton>
                </div>
            )}
        </Box>
    )
}


