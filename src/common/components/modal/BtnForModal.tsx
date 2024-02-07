import React, {FC} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export type closeModalT = {
  closeModal: (e: boolean) => void;
  cb: () => void;
};

export const BtnForModal: FC<closeModalT> = ({closeModal, cb}) => {
  const closeModalHandler = () => closeModal(false);
  return (
    <Box sx={styleBtnContainer}>
      <Button sx={styleLeftBtn} variant="contained" onClick={closeModalHandler}>
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
  );
};

const styleBtnContainer = {display: "flex", gap: "40px"};

const styleLeftBtn = {
  borderRadius: "30px",
  color: "black",
  background: "white",
  width: "127px"
};

const styleRightBtn = {
  borderRadius: "30px",
  width: "127px"
};
