import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem.jsx";
import PostList from "./components/PostList";
import MyButton from "./components/button/MyButton";
import MyInput from "./components/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  return (
    <div className="App">
      <form>
          <MyInput type="text" placeholder="Название поста"/>
          <MyInput type="text" placeholder="Описание поста"/>
          <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
