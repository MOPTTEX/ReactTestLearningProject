import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./../pages/Posts";
import { routes } from "../router";


export default function AppRouters() {
  return (
    <Routes>
      {routes.map((route) => 
        <Route
          path={route.path}
          element={route.element}
        />
      )}
      <Route path="*" element={<Posts />} />
    </Routes>

  );
}
