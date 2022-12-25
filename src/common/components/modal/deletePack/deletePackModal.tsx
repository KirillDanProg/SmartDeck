import React, { FC} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type DeletePackModalType = {
    title: string
    closeModal: (e: boolean)=> void
    cb: () => void
    disabled?: boolean
}

export const DeletePackModal: FC<DeletePackModalType>= ({title, closeModal, cb, disabled= false}) => {

    const closeModalHandler = () => closeModal(false)

    return (
        <>
            <Box
                sx={mainContainerStyle}
            >
                <Typography sx={textStyle}>
                    Do you really want to remove `<span style={{fontWeight: '700'}}>{title}</span>` ?
                    All cards will be deleted.
                </Typography>
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
                    onClick={() => cb()}
                    sx={styleRightBtn}
                    variant="contained"
                    disabled={disabled}
                >
                    Delete
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

const styleBtnContainer = {display: 'flex', gap: '40px'}

const styleLeftBtn = {
    borderRadius: '30px',
    color: 'black',
    background: 'white',
    width: '127px',
}

const styleRightBtn = {
    borderRadius: '30px',
    width: '127px',
}

const textStyle = {
    weight: 600,
    size: '14px',
    lineHeight: '24px',
}