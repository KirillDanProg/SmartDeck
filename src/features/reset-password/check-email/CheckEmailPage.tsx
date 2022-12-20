import s from "./CheckEmailPage.module.css";
import checkEmail from "../../../assets/icons/checkEmail.png";
import { getFromLocalStorage } from "../../../common/utils/local-storage";
import { CustomGridContainer } from "../../../common/components/CustomGridContainer";
import { getRefFromEmail } from "../../../common/utils/getRefFromEmail";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import * as React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useNavigate } from "react-router-dom";

export const CheckEmailPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const refToMail = getRefFromEmail(email);

  const redirectHandler = () => {
    navigate("/login");
  };

  useEffect(() => {
    let result = getFromLocalStorage("email");
    setEmail(String(result));
  }, [email]);

  return (
    <Grid container component="main" sx={{ height: "80vh" }}>
      <CssBaseline />
      <CustomGridContainer>
        <Typography variant="inherit" className={s.title}>
          Check email
        </Typography>
        <img style={{ maxWidth: "200px" }} src={checkEmail} alt="" />
        <Typography variant="inherit" className={s.text}>
          We`ve sent an Email with instructions to
        </Typography>
        <Typography variant="inherit" className={s.text}>
          {
            email
              ? <a style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
                   href={`mailto:${email}`}>{email}</a>
              : "Something went wrong..."
          }
        </Typography>
        <a
          href={refToMail}
          target="_blank"
          className={s.link}
          rel="noreferrer"
          onClick={redirectHandler}
        >
          <AlternateEmailIcon fontSize={"small"} />
          Check your email
        </a>
      </CustomGridContainer>
    </Grid>
  );
};