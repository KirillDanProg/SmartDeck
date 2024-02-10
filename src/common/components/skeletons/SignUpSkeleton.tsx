import {Box, Skeleton} from "@mui/material";
import {FlexContainer} from "../FlexContainer";
import {HeaderSkeleton} from "./HeaderSkeleton";

export const SignupSkeleton = () => {
  return (
    <>
      <HeaderSkeleton />
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
          <Skeleton variant={"circular"} sx={{height: "75px", width: "75px"}} />
          <Skeleton
            variant={"rounded"}
            sx={{marginTop: "20px", height: "40px", width: "150px"}}
          />
          <Skeleton
            variant={"rectangular"}
            sx={{marginTop: "20px", height: "50px", width: "400px"}}
          />
          <Skeleton
            variant={"rectangular"}
            sx={{marginTop: "20px", height: "50px", width: "400px"}}
          />
          <Skeleton
            variant={"rectangular"}
            sx={{marginTop: "20px", height: "50px", width: "400px"}}
          />
          <Skeleton
            variant={"rounded"}
            sx={{marginTop: "50px", height: "50px", width: "400px"}}
          />
          <Skeleton
            variant={"rounded"}
            sx={{marginTop: "20px", height: "20px", width: "200px"}}
          />
          <Skeleton
            variant={"rounded"}
            sx={{marginTop: "20px", height: "40px", width: "150px"}}
          />
        </Box>
      </FlexContainer>
    </>
  );
};
