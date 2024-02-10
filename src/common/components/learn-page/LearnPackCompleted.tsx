import React, {FC} from "react";
import {FlexContainer} from "../FlexContainer";
import completed from "assets/images/Checklist.jpg";
import {ButtonGroup, CardMedia, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {pathToSpecificPack} from "../../navigate-to-card-helper/pathToSpecificPack";

type PropsType = {
  packId: string;
  setNewAttempt: (value: boolean) => void;
  tryAgain: () => void;
};
export const LearnPackCompleted: FC<PropsType> = ({
  packId,
  setNewAttempt,
  tryAgain
}) => {
  const navigate = useNavigate();

  const tryAgainHandler = () => {
    tryAgain();
    setNewAttempt(true);
    navigate(pathToSpecificPack.learnPack(packId));
  };

  const backToCardsHandler = () => {
    navigate(pathToSpecificPack.pack(packId));
  };

  return (
    <FlexContainer>
      <CardMedia component="img" src={completed} sx={{height: "270px"}} />

      <Typography component={"h4"} variant={"h4"}>
        You are done !!!
      </Typography>

      <ButtonGroup>
        <Button onClick={tryAgainHandler}>try again</Button>

        <Button onClick={backToCardsHandler}>Back to cards</Button>
      </ButtonGroup>
    </FlexContainer>
  );
};
