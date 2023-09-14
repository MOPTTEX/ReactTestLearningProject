import React from "react";
import MyInput from "../components/input/MyInput";
import MyButton from "../components/button/MyButton";

export default function Login() {
  return (
    <div>
      <h1> Страница для логина</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин" /> 
        <MyInput type="password" placeholder="Введите пароль" /> 
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}
