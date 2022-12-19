import {VisibilityOn} from '../../assets/icons/VisibilityOn';
import {VisibilityOff} from '../../assets/icons/VisibilityOff';
import React from 'react';

export const PasswordVisibleIcon = (props: {isShown: boolean, setShown: (value: boolean) => void}) => {

  const onClickHandler = () => {
    props.setShown(!props.isShown)
  }

  return (
    <span onClick={onClickHandler} style={{'cursor': 'pointer'}}>
      {
        props.isShown
          ? <VisibilityOff/>
          : <VisibilityOn/>
      }

    </span>
  )
}