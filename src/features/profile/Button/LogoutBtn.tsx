import s from './LogoutBtn.module.css'
import React, {FC} from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout'

export const LogoutBtn: FC<LogoutBtnT> = ({callBack}) => {
  return (
    <Button className={s.main} onClick={() => callBack('')}>
      <LogoutIcon color={'action'} fontSize={'small'}/>
      <span className={s.text}>Log out</span>
    </Button>
  );
};

type LogoutBtnT = {
    callBack: (token: string) => void
}
