import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
function App() {
  const [value, setValue] = useState("ТЕКСТ");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScrpipt</strong>
          <div>JavaScrpipt - язык программирования</div>
        </div>
        <button className="post__btns">Удалить</button>
      </div>
    </div>
  );
}

export default App;
