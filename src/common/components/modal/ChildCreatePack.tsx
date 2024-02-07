import React, {ChangeEvent, FC, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {CreateNewPackRequestType} from "../../../features/packs-cards/packs/packsApi";

type ChildEditPack = {
  cb: (e: CreateNewPackRequestType) => void;
  closeModal: (e: boolean) => void;
  inputValueStart?: string;
  disabled?: boolean;
};

export const ChildCreatePack: FC<ChildEditPack> = ({
  closeModal,
  cb,
  inputValueStart = "",
  disabled = false
}) => {
  const [inputValue, setInputValue] = useState(inputValueStart);
  const [inputChecked, setInputChecked] = useState(false);

  const changeInputValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.currentTarget.value);
  };

  const clickSaveHandler = () => {
    if (inputValue.trim().length)
      cb({name: inputValue, privateValue: inputChecked});
  };
  const closeModalHandler = () => closeModal(false);

  const onChangeInputCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputChecked(e.currentTarget.checked);
  };

  return (
    <>
      <Box sx={mainContainerStyle}>
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
                onChange={onChangeInputCheckedHandler}
                checked={inputChecked}
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
          onClick={clickSaveHandler}
          sx={styleRightBtn}
          variant="contained"
          disabled={disabled}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

const mainContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "space-between"
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
