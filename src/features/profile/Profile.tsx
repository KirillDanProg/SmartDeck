import React from "react"
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import s from "./Profile.module.css"
import {UserAvatar} from "./User/UserAvatar/UserAvatar"
import {UserName} from "./User/UserName/UserName"
import {LogoutBtn} from "./Button/LogoutBtn"
import {useRedirectTo} from "../../app/hooks/useRedirectTo";
import {PATH} from "../../layout/AppRoutes/routes";
import {useAppSelector} from "../../app/hooks";
import {ReturnComponent} from "../../common/components/returnComponent/ReturnComponent";
import {useChangeNameMutation, useLogoutMutation} from "../auth/authApi";


export const Profile = () => {
    const email = useAppSelector(state => state.profile.email)
    const [logout, {isSuccess, isLoading}] = useLogoutMutation()
    const [changeName, {}] = useChangeNameMutation()

    const logoutHandler = async (token: string) => {
        await logout(token).unwrap()
    }

    const changeNameHandler = async (newName: string) => {
       await changeName(newName)
    }

    useRedirectTo(`/${PATH.LOGIN}`, isSuccess, [isLoading])
    return (
        <>
           <ReturnComponent/>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    height: '100vh',
                    justifyContent: 'center',
                }}
            >
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 7,
                        p: 3,
                        width: 400,
                        height: 350,
                    }}
                >
                    <Stack sx={{alignItems: 'center'}}>
                        <Typography className={s.title}>
                            Personal Information
                        </Typography>
                        <Box marginTop={2} marginBottom={2}>
                            <UserAvatar />
                        </Box>
                        <UserName changeNameCB={changeNameHandler}/>
                        <Typography className={s.email}>
                            {email}
                        </Typography>
                        <br/>
                        <LogoutBtn callBack={logoutHandler}/>
                    </Stack>
                </Paper>
            </Container>
        </>
    );
}
