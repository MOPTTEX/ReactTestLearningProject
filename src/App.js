import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouters from "./components/AppRouters";
import { AuthContext } from "./context";
function App() {
  const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
    if(localStorage.getItem("auth")) {
        setIsAuth(true)
    }
    }, [])


  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouters />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
