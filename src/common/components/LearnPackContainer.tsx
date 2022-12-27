import React, { FC } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type GridContainerT = {
    children: React.ReactNode
    packName: string
}

export const LearnPackContainer: FC<GridContainerT> = ({ children, packName }) => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "50px 0",
                textAlign: "center"
            }}
        >
            <Typography  sx={{
                padding: "30px",
                textAlign: "center"
            }}
                component={"h3"}
                        variant={"h4"}>
                {`Learn "${packName}"`}
            </Typography>

            <Paper
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: 550,
                    padding: "30px"
                }}
            >
                <Stack sx={{ alignItems: "justify", justifyContent: "space-around", gap: "15px" }}>
                    {children}
                </Stack>
            </Paper>
        </Container>
    );
};

