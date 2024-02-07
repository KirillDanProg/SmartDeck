import * as React from "react";
import {FC, ReactNode} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

type BasicModalType = {
  title: string;
  children?: ReactNode;
  open: boolean;
  closeModal: (e: boolean) => void;
};

export const BasicModalPacksList: FC<BasicModalType> = ({
  title,
  children,
  open,
  closeModal
}) => {
  const closeModalHandler = () => closeModal(false);

  return (
    <Modal open={open} onClose={closeModalHandler}>
      <Box sx={style}>
        <Box sx={styleSecBox}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <CloseIcon sx={closeIconStyle} onClick={closeModalHandler} />
        </Box>
        <hr style={{margin: "0 -32px 25px"}} />
        <Box sx={styleBoxCoverChild}>{children}</Box>
      </Box>
    </Modal>
  );
};

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  borderRadius: "20px"
};

const styleSecBox = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px"
};

const styleBoxCoverChild = {
  display: "flex",
  flexDirection: "column",
  gap: "35px"
};

const closeIconStyle = {
  // position: "absolute",
  // top: '-74px',
  // left: '367px',
  // color: 'white',
  // width: '50px',
  // height: '50px',
  cursor: "pointer"
};
