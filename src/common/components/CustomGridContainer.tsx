import React, {FC} from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

type GridContainerT = {
  children: React.ReactNode;
};

export const CustomGridContainer: FC<GridContainerT> = ({children}) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        minHeight: "90vh",
        justifyContent: "center"
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 7,
          p: 3,
          width: 450,
          height: 700
        }}
      >
        <Stack sx={{alignItems: "center", justifyContent: "space-around"}}>
          {children}
        </Stack>
      </Paper>
    </Container>
  );
};
