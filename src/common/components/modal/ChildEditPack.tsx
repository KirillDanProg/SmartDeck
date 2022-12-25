import React, {ChangeEvent, FC, useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

type ChildEditPack = {
    cb: (e: string) => void
}

export const ChildEditPack: FC<ChildEditPack> = ({cb}) => {
    const [inputValue, setInputValue] = useState('')

    const changeInputValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value)
        if (inputValue.trim().length) cb(inputValue)
    }

    return (
        <>
            <Box
                sx={mainContainerStyle}
            >
                <TextField
                    autoFocus
                    onChange={changeInputValue}
                    value={inputValue}
                    label="Name pack"
                    variant="standard"
                />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => {
                                }}
                                checked={true}
                            />
                        }
                        label="Private pack"
                    />
                </FormGroup>
            </Box>
            <Box sx={styleBtnContainer}>
                <Button
                    sx={styleLeftBtn}
                    variant="contained"
                    onClick={closeModalHandler}
                >
                    Cancel
                </Button>
                <Button
                    onClick={cb}
                    sx={styleRightBtn}
                    variant="contained"
                    disabled={false}
                >
                    Save
                </Button>
            </Box>
        </>
    );
};

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',
}

