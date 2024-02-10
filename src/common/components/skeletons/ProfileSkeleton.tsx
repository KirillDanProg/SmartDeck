import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import {FlexContainer} from "../FlexContainer";

export const ProfileSkeleton = () => {
  return (
    <>
      <FlexContainer>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Skeleton
            variant={"rounded"}
            sx={{marginTop: "20px", height: "40px", width: "150px"}}
          />
          <Skeleton
            variant={"circular"}
            sx={{marginTop: "20px", height: "150px", width: "150px"}}
          />
          <Skeleton
            variant={"rounded"}
            sx={{marginTop: "20px", height: "50px", width: "400px"}}
          />
          <Skeleton
            variant={"rectangular"}
            sx={{marginTop: "15px", height: "25px", width: "300px"}}
          />
          <Skeleton
            variant={"rectangular"}
            sx={{marginTop: "40px", height: "50px", width: "200px"}}
          />
        </Box>
      </FlexContainer>
    </>
  );
};
