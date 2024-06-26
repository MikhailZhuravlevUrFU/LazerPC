import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { loginRoutes, publicRoutes } from '../routes';
import {Context} from '../index'

const AppRouter = () => {
  const {user} = useContext(Context)

  console.log(user)
  return (
    <Routes>
      {user.isLogin && loginRoutes.map(({ path, Component }) => 
        <Route key={path} path={path} element={<Component />} />
      )}
      {publicRoutes.map(({ path, Component }) => 
        <Route key={path} path={path} element={<Component />} />
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
