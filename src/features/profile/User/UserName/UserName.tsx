import {useAppSelector} from "../../../../common/hooks";
import React, {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Box from "@mui/material/Box";

type UserNameT = {
  changeNameCB: (newName: string) => void;
};

export const UserName: FC<UserNameT> = ({changeNameCB}) => {
  const profileUserName = useAppSelector((state) => state.auth.userName);

  const [userName, setUserName] = useState(profileUserName);
  const [isEditing, setIsEditing] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const saveName = async () => {
    await changeNameCB(userName);
    setIsEditing(!isEditing);
  };

  const changeEditeMode = () => {
    setIsEditing(!isEditing);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") changeEditeMode();
    if (e.key === "Enter") saveName();
  };

  const error = userName.trim().length < 1;
  return (
    <Box sx={{mb: 1, display: "flex", alignItems: "center"}}>
      {!isEditing ? (
        <>
          <Typography fontWeight={"bold"} variant="body1">
            {userName}
          </Typography>
          <IconButton
            size={"small"}
            color={"default"}
            aria-label={"change name"}
            onClick={changeEditeMode}
          >
            <BorderColorIcon fontSize={"small"} />
          </IconButton>
        </>
      ) : (
        <>
          <TextField
            size={"small"}
            variant={"standard"}
            InputProps={{style: {font: "inherit"}}}
            value={userName}
            autoFocus
            helperText={error && "Input text required"}
            error={error}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            //todo: when onBlur change Name doesnt work
            // onBlur={changeEditeMode}
            //todo: ask Valera 'why its not working'
            // onDoubleClick={changeEditeMode}
          />
          <IconButton
            color="default"
            size={"small"}
            aria-label="save changed name"
            onClick={saveName}
          >
            save
          </IconButton>
        </>
      )}
    </Box>
  );
};
