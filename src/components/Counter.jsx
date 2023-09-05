import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function likeDecrement() {
    setCount(count - 1);
  }

  function LikeIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={likeDecrement}> Like -</button>
      <button onClick={LikeIncrement}> Like +</button>
    </div>
  );
};

export default Counter;
