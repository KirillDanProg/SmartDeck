import {Form} from '../../../common/components/form/Form';
import {useRedirectTo} from '../../../common/hooks/useRedirectTo';
import {PATH} from '../../../layout/AppRoutes/routes';
import {useAppSelector} from '../../../common/hooks';
import {selectCurrentUser} from '../authSlice';
import {ILoginRequest} from '../authModels';
import {useLoginMutation} from '../authApi';
import {CustomGridContainer} from '../../../common/components/CustomGridContainer';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';

export const SignInPage = () => {
  const [login, {isSuccess}] = useLoginMutation();

  const userId = useAppSelector(selectCurrentUser)

  async function signInHandler(formData: ILoginRequest) {
    await login(formData).unwrap()
  }

  useRedirectTo(`/${PATH.PROFILE}`, !!userId, [isSuccess]);

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
                    Sign in
        </Typography>
        <Form formType="sign-in" callback={signInHandler}/>
      </Box>
    </CustomGridContainer>
  );
}