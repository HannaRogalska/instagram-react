import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar';



const Layout = ({nickName, avatarUrl, id}) => {
  return (
    <div className={style.layoutRoot}>
      <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id} />
      <div className={style.layoutBody}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Layout
