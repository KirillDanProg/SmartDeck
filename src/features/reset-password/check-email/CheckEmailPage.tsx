import * as React from 'react';
import {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import checkEmail from '../../../assets/icons/checkEmail.png'
import {getFromLocalStorage} from '../../../app/utils/local-storage';
import {BasicModal} from '../../../common/components/ModalWindow';
import {useAppSelector} from "../../../app/hooks";
import {selectCurrentError} from "../../auth/authSlice";
import {CustomGridContainer} from "../../../common/components/CustomGridContainer";
import {getRefFromEmail} from "../../../app/utils/getRefFromEmail";
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import {NavLink} from "react-router-dom";
import s from "./CheckEmailPage.module.css"
import {useNavigate} from "react-router-dom";


export const CheckEmailPage = () => {
    const navigate = useNavigate()
    const error = useAppSelector(selectCurrentError)
    const [email, setEmail] = useState<string>('');

    const refToMail = getRefFromEmail(email)

    const redirectToLoginHandler = () => {
        navigate("/login")
    }

    useEffect(() => {
        let result = getFromLocalStorage('email');
        setEmail(String(result))
    }, [email])

    return (
        <Grid container component="main" sx={{height: '80vh'}}>
            {error && <BasicModal modalTitle="Something went wrong"
                                  modalText="Invalid email or password"
            />}
            <CssBaseline/>
            <CustomGridContainer>
                <Typography  variant="inherit" className={s.title}>
                    Check email
                </Typography>
                <img style={{maxWidth: '200px'}} src={checkEmail} alt=""/>
                <Typography  variant="inherit" className={s.text}>
                    We`ve sent an Email with instructions to
                </Typography>
                <Typography variant="inherit" className={s.text}>
                    {
                        email
                            ? <a style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}
                                 href={`mailto:${email}`}>{email}</a>
                            : "Something went wrong..."
                    }
                </Typography>
                <a
                    href={refToMail}
                    target="_blank"
                    onClick={redirectToLoginHandler}
                    className={s.link}
                    rel="noreferrer"
                >
                    <FollowTheSignsIcon fontSize={"small"}/>
                    Check your email</a>
            </CustomGridContainer>
        </Grid>
    );
}