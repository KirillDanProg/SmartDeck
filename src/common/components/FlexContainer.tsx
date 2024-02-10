import React, {FC} from "react";
import {Stack, Container, Paper} from "@mui/material";

type FlexContainerType = {
  children: React.ReactNode;
};

export const FlexContainer: FC<FlexContainerType> = ({children}) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
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
          height: 500
        }}
      >
        <Stack sx={{alignItems: "center", justifyContent: "center"}}>
          {children}
        </Stack>
      </Paper>
    </Container>
  );
};
