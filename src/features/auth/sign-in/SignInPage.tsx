import {Form} from "../../../common/components/form/Form";
import {ILoginRequest} from "../authModels";
import {useLoginMutation} from "../authApi";
import {FlexContainer} from "common/components";
import {Typography, Box, Avatar} from "@mui/material";
import {PATH} from "layout/AppRoutes/routes";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const SignInPage = () => {
  const [login, {isSuccess, data}] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state.from.path || PATH.MAIN;

  useEffect(() => {
    if (isSuccess) {
      navigate(fromPage);
    }
  }, [isSuccess]);

  async function signInHandler(formData: ILoginRequest) {
    await login(formData);
  }

  return (
    <FlexContainer>
      <Box sx={style}>
        <Avatar sx={{m: 1, bgcolor: "secondary.main"}} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form formType="sign-in" callback={signInHandler} />
      </Box>
    </FlexContainer>
  );
};

const style = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
