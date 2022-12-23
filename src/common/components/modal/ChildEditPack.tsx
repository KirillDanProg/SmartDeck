import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const ChildEditPack = () => {
    return (
        <Box
            sx={mainContainerStyle}
        >
            <TextField
                autoFocus
                onChange={() => {
                }}
                value={"inputValue"}
                label="Name"
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
    );
};

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',
}

