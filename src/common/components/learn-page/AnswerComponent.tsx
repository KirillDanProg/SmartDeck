import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { GradeCardRadioButtons } from "../radio-group/GrageCardRadio";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type PropsType = {
    answer: string
    grade: number
    setGrade: (value: number) => void
    goToNextCardHandler: () => void
}
export const AnswerComponent: FC<PropsType> = ({answer, grade, setGrade, goToNextCardHandler}) => {
    return (
        <Box>
            <Typography component="p" variant="h5">
                {`Answer: ${answer}`}
            </Typography>

            <GradeCardRadioButtons value={grade} setValue={setGrade} />

            <Button onClick={goToNextCardHandler}>
                next
            </Button>
        </Box>
    );
};

