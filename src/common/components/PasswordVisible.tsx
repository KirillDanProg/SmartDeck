import {VisibilityOn} from "../../assets/icons/VisibilityOn";
import {VisibilityOff} from "../../assets/icons/VisibilityOff";

export const PasswordVisibleIcon = (props: {
  isShown: boolean;
  setShown: (value: boolean) => void;
}) => {
  const onClickHandler = () => {
    props.setShown(!props.isShown);
  };

  return (
    <span
      onClick={onClickHandler}
      style={{cursor: "pointer", display: "flex", alignItems: "center"}}
    >
      {props.isShown ? <VisibilityOff /> : <VisibilityOn />}
    </span>
  );
};
