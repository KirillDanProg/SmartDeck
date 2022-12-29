import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type PropsType = {
    question: string
    shots: number
}
export const QuestionComponent: FC<PropsType> = ({ question, shots }) => {
    return (
        <Box>
            <Typography component="h1" variant="h5">
                {`Question:${question}`}
            </Typography>
            <Typography component="p">
                {`Number of attempts: ${shots}`}
            </Typography>
        </Box>
    );
};

