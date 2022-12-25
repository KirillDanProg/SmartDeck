import React from 'react'
import s from './Profile.module.css'
import {UserAvatar} from './User/UserAvatar/UserAvatar'
import {UserName} from './User/UserName/UserName'
import {LogoutBtn} from './Button/LogoutBtn'
import {useChangeNameMutation, useLogoutMutation} from '../auth/authApi';
import {CustomGridContainer} from "common/components";
import Typography from '@mui/material/Typography'
import {ReturnComponent} from 'common/components/returnComponent/ReturnComponent';
import Box from '@mui/material/Box'
import { useAppSelector } from "../../common/hooks";
import {ProfileSkeleton} from "../../common/components/Skeletons/ProfileSkeleton";


export const Profile = () => {
    const email = useAppSelector(state => state.auth.email)
    const [logout, {isLoading: isLoadingLogout}] = useLogoutMutation()
    const [changeName, {isLoading: isLoadingChangeName}] = useChangeNameMutation()

    const isLoading = isLoadingLogout || isLoadingChangeName

    const logoutHandler = async () => {
        await logout().unwrap()
    }

    const changeNameHandler = async (newName: string) => {
        await changeName(newName)
    }

    return (
        <>
            {isLoading ?
                <ProfileSkeleton/>
                :
                <>
                    <ReturnComponent/>
                    <CustomGridContainer>
                        <Typography className={s.title}>
                            Personal Information
                        </Typography>
                        <Box marginTop={2} marginBottom={2}>
                            <UserAvatar/>
                        </Box>
                        <UserName changeNameCB={changeNameHandler}/>
                        <Typography className={s.email}>
                            {email}
                        </Typography>
                        <br/>
                        <LogoutBtn callBack={logoutHandler}/>
                    </CustomGridContainer>
                </>
            }

        </>
    );
}
