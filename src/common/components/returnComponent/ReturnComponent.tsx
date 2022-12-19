import s from '../../../features/profile/Profile.module.css';
import {PATH} from '../../../layout/AppRoutes/routes';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {NavLink} from 'react-router-dom';

export const ReturnComponent = () => {

  return (
    <div className={s.topText}>
      <ArrowBackIcon/>
      <NavLink to={PATH.PACK_LISTS} className={s.link}> Back to Packs List</NavLink>
    </div>
  );
};

