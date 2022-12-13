import React from "react"
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import s from "./Profile.module.css"
import {UserAvatar} from "./User/UserAvatar/UserAvatar"
import avatar from "../../assets/user/userImg.png"
import {UserName} from "./User/UserName/UserName"
import {LogoutBtn} from "./Button/LogoutBtn"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRedirectTo} from "../../app/hooks/useRedirectTo";
import {PATH} from "../../layout/AppRoutes/routes";
import {useLogoutMutation} from "../auth/authAPI";


export const Profile = () => {
    const email = "incubator@mail.ru" // come from server
    const [logout, {isSuccess, isLoading}] = useLogoutMutation()

    const logoutHandler = async(token: string) => {
        await logout(token).unwrap()

    }
    useRedirectTo(`/${PATH.LOGIN}`, isSuccess, [isLoading])
    return (
        <>
            <div className={s.topText}>
                <ArrowBackIcon/>
                <span className={s.topText}> Back to Packs List</span>
            </div>
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
                            <UserAvatar
                                src={avatar}
                            />
                        </Box>
                        <UserName/>
                        <Typography className={s.email}>
                            {email}
                        </Typography>
                        <br/>
                        {/*<button onClick={() =>logoutHandler("")}>log out</button>*/}
                        <LogoutBtn callBack={logoutHandler}/>
                    </Stack>
                </Paper>
            </Container>
        </>
    );
}
