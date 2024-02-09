import {Form} from "../../../common/components/form/Form";
import {ILoginRequest} from "../authModels";
import {useLoginMutation} from "../authApi";
import {CustomGridContainer} from "common/components";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {PATH} from "layout/AppRoutes/routes";
import {useNavigate} from "react-router-dom";

export const SignInPage = () => {
  const [login, {error, isSuccess}] = useLoginMutation();
  const navigate = useNavigate();

  if (isSuccess) {
    navigate(PATH.MAIN, {replace: true});
  }

  async function signInHandler(formData: ILoginRequest) {
    await login(formData);
  }

  return (
    <CustomGridContainer>
      <Box sx={style}>
        <Avatar sx={{m: 1, bgcolor: "secondary.main"}} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form formType="sign-in" callback={signInHandler} />
      </Box>
    </CustomGridContainer>
  );
};

const style = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
