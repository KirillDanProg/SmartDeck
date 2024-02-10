import s from "./Profile.module.css";
import {UserAvatar} from "./User/UserAvatar/UserAvatar";
import {UserName} from "./User/UserName/UserName";
import {LogoutBtn} from "./Button/LogoutBtn";
import {useChangeNameMutation, useLogoutMutation} from "../auth/authApi";
import {FlexContainer} from "common/components";
import {Typography, Box} from "@mui/material";
import {GoToPrevPageComponent} from "common/components/go-to-prev-page/GoToPrevPageComponent";
import {useAppSelector} from "../../common/hooks";
import {ProfileSkeleton} from "../../common/components/skeletons/ProfileSkeleton";

export const Profile = () => {
  const email = useAppSelector((state) => state.auth.email);
  const [logout, {isLoading: isLoadingLogout}] = useLogoutMutation();
  const [changeName, {isLoading: isLoadingChangeName}] =
    useChangeNameMutation();

  const isLoading = isLoadingLogout || isLoadingChangeName;

  const logoutHandler = async () => {
    await logout().unwrap();
  };

  const changeNameHandler = async (newName: string) => {
    await changeName(newName);
  };

  return (
    <>
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <>
          <GoToPrevPageComponent />

          <FlexContainer>
            <Typography className={s.title}>Personal Information</Typography>
            <Box marginTop={2} marginBottom={2}>
              <UserAvatar />
            </Box>
            <UserName changeNameCB={changeNameHandler} />
            <Typography className={s.email}>{email}</Typography>
            <br />
            <LogoutBtn callBack={logoutHandler} />
          </FlexContainer>
        </>
      )}
    </>
  );
};
