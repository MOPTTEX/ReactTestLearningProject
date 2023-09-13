import React from "react";
import { useParams } from "react-router-dom";

export default function PostidPage() {
  const params = useParams()
  return (
    <div>
      <h1>Вы попали на страницу поста </h1>
    </div>
  );
}
