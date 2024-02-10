import * as React from "react";
import {PATH} from "layout/AppRoutes/routes";
import {useRedirectTo} from "common/hooks";
import {Form} from "common/components/form/Form";
import {FlexContainer} from "common/components";
import {IRegisterRequest} from "../authModels";
import {useRegisterMutation} from "../authApi";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {SignupSkeleton} from "common/components/skeletons/SignUpSkeleton";

export const SignUpPage = () => {
  const [register, {isSuccess, isLoading}] = useRegisterMutation();

  //todo: types
  async function signUpHandler(data: IRegisterRequest) {
    await register(data).unwrap();
  }

  useRedirectTo(PATH.SIGN_IN, isSuccess, [isSuccess]);

  return (
    <>
      {isLoading ? (
        <SignupSkeleton />
      ) : (
        <FlexContainer>
          <Box sx={style}>
            <Avatar sx={{m: 1, bgcolor: "secondary.main"}} />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Form formType="sign-up" callback={signUpHandler} />
          </Box>
        </FlexContainer>
      )}
    </>
  );
};

const style = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
