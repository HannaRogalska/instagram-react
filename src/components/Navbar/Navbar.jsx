import React from 'react';
import style from './Navbar.module.css'
import UserBadge from '../UserBadge/UserBadge';

const Navbar = ({ nickName, avatarUrl, id }) => {
  return (
    <div className={style.navbarRoot}>
      <div className={style.navbarWrapper}>
        <span>Instgram</span>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </div>
  );
};

export default Navbar
