import * as React from 'react';
import {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import checkEmail from '../../../assets/icons/checkEmail.png'
import Button from '@mui/material/Button';
import {PATH} from '../../../layout/AppRoutes/routes';
import {getFromLocalStorage} from '../../../app/utils/local-storage';
import {Link} from 'react-router-dom';
import {BasicModal} from '../../../common/components/ModalWindow';
import {useAppSelector} from "../../../app/hooks";
import {selectCurrentError} from "../../auth/authSlice";
import {CustomGridContainer} from "../../../common/components/CustomGridContainer";


export const CheckEmailPage = () => {
    //todo: fix error
    const error = useAppSelector(selectCurrentError)
    const [email, setEmail] = useState<string>('');
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
                        <Button
                            component={Link}
                            to={PATH.LOGIN}
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >Back to login</Button>
           </CustomGridContainer>
        </Grid>
    );
}