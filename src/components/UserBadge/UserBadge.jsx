import React from "react";
import style from "./UserBadge.module.css";
import { useNavigate } from "react-router-dom";

const UserBadge = ({ nickName, avatarUrl, id }) => {
    const navigate = useNavigate();
    const onUserBadgeClick = () => {
        navigate(`/${id}`)
    }
  return (
    <div className={style.userBadgeRoot} onClick={onUserBadgeClick}>
      {avatarUrl ? (
        <img src={avatarUrl} alt="avatar" className={style.userBadgeAvatar} />
      ) : (
        <div className={style.userBadgePlace}></div>
      )}
      <span className={style.userBadgeName}>{nickName}</span>
    </div>
  );
};

export default UserBadge;
