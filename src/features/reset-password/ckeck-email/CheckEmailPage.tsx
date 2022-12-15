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
                <Typography component="h1" variant="h3">
                    Check email
                </Typography>
                <img style={{maxWidth: '200px'}} src={checkEmail} alt=""/>
                <Typography component="h3" variant="h5">
                    We`ve sent an Email with instructions to
                </Typography>
                <Typography component="h3" variant="h5">
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
                >Check your email</a>
            </CustomGridContainer>
        </Grid>
    );
}