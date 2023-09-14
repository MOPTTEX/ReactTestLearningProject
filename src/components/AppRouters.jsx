import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./../pages/Posts";
import { privateRouters, publicRoutes, routes } from "../router";
import Login from "../pages/Login";

export default function AppRouters() {
  const isAuth = false;

  return isAuth ? (
    <Routes>
      {privateRouters.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<Login />} />

    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
