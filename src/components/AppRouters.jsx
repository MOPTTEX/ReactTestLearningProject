import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./../pages/Posts";
import { privateRouters, publicRoutes, routes } from "../router";
import Login from "../pages/Login";
import { AuthContext } from './../context/index';

export default function AppRouters() {
const {isAuth} = useContext(AuthContext)

  return isAuth ? (
    <Routes>
      {privateRouters.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}

      <Route path="*" element={<Login />} />

    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
