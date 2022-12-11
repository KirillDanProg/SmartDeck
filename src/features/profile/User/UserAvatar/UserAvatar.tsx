import React, {FC} from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import {UserPhotoChangeBtn} from "../UserPhotoChangeBtn/UserPhotoCahngeBtn";

export const UserAvatar: FC<UserAvatarT> = ({src}) => {
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
                    src={src}
            />
        </Badge>
    );
};

type UserAvatarT = {
    src: string
}