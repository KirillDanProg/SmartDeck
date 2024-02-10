import {validationSchema} from "./yupValidation";
import {PasswordVisibleIcon} from "../PasswordVisible";
import {PATH} from "../../../layout/AppRoutes/routes";
import {FC, useState} from "react";
import {InputAdornment} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {ILoginRequest} from "features/auth/authModels";

type FormPropsType = {
  callback: (data: ILoginRequest) => void;
  formType?: string;
};
export const Form: FC<FormPropsType> = ({callback, formType}) => {
  const [isShown, setIsShown] = useState(false);

  const passwordType = isShown ? "text" : "password";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema,
    onSubmit: async (data) => {
      callback(data);
    }
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{mt: 1}}>
      <TextField
        margin="normal"
        required
        fullWidth
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        id="email"
        label="Email Address"
        {...formik.getFieldProps("email")}
      />
      <TextField
        required
        fullWidth
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        label="Password"
        type={passwordType}
        id="password"
        {...formik.getFieldProps("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PasswordVisibleIcon isShown={isShown} setShown={setIsShown} />
            </InputAdornment>
          )
        }}
      />
      {formType === "sign-up" && (
        <TextField
          margin="normal"
          required
          fullWidth
          error={
            formik.touched.passwordConfirm &&
            Boolean(formik.errors.passwordConfirm)
          }
          helperText={
            formik.touched.passwordConfirm && formik.errors.passwordConfirm
          }
          label="Confirm password"
          type={passwordType}
          id="passwordConfirm"
          {...formik.getFieldProps("passwordConfirm")}
        />
      )}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
        Sign In
      </Button>
      <Grid container>
        {formType === "sign-in" && (
          <Grid item xs>
            <Button component={Link} to={PATH.FORGOT_PASSWORD}>
              {" Forgot password?"}
            </Button>
          </Grid>
        )}
        <Grid item>
          <Button
            component={Link}
            to={formType === "sign-in" ? PATH.SIGN_UP : PATH.SIGN_IN}
          >
            {formType === "sign-in"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
