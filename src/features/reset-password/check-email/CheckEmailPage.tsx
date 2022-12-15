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


export const CheckEmailPage = () => {
    //todo: fix error
    const error = useAppSelector(selectCurrentError)
    const [email, setEmail] = useState<string>('');

    const refToMail = getRefFromEmail(email)
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
                <NavLink
                    to={refToMail}
                    target="_blank"
                    className={s.link}
                >
                    <FollowTheSignsIcon fontSize={"small"}/>
                    Check your email</NavLink>
            </CustomGridContainer>
        </Grid>
    );
}