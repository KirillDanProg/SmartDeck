import React, {FC} from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import {UserPhotoChangeBtn} from "../UserPhotoChangeBtn/UserPhotoCahngeBtn";
import {useAppSelector} from "../../../../app/hooks";
import defaultImage from "../../../../assets/user/userImg.png"

export const UserAvatar = () => {
    const avatar = useAppSelector(state => state.profile.avatar)
    const useAvatar = avatar ? avatar : defaultImage
    return (
        <Badge
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            overlap="circular"
            badgeContent={<UserPhotoChangeBtn  />}
        >
            <Avatar sx={{ width: 96, height: 96 }} alt="user avatar"
                    src={useAvatar}
            />
        </Badge>
    );
};

type UserAvatarT = {
    src: string
}