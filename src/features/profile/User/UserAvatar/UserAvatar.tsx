import {UserPhotoChangeBtn} from '../UserPhotoChangeBtn/UserPhotoCahngeBtn';
import {useAppSelector} from '../../../../common/hooks';
import defaultImage from '../../../../assets/user/userImg.png'
import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

export const UserAvatar = () => {
  const avatar = useAppSelector(state => state.auth.avatar)

  const useAvatar = avatar ? avatar : defaultImage

  return (
    <Badge
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
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

