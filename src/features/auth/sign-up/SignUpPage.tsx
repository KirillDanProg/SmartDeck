import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {PATH} from '../../../layout/AppRoutes/routes';
import {useRedirectTo} from '../../../app/hooks/useRedirectTo';
import {Form} from '../../../common/components/form/Form';
import {IRegisterRequest} from "../authModels";
import {useRegisterMutation} from "../authApi";
import {CustomGridContainer} from "../../../common/components/CustomGridContainer";


export const SignUpPage = () => {

    const [register, {isSuccess}] = useRegisterMutation()

    //todo: types
    async function signUpHandler(data: IRegisterRequest) {
        await register(data).unwrap()
    }

    useRedirectTo(`/${PATH.LOGIN}`, isSuccess, [isSuccess])

    return (
        <CustomGridContainer>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}/>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Form formType="sign-up" callback={signUpHandler}/>
                </Box>
        </CustomGridContainer>
    );
}