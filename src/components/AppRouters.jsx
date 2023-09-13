import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './../pages/About';
import Posts from './../pages/Posts';
import Error from './../pages/Error';
import PostIdPage from './../pages/PostIdPage';




export default function AppRouters() {
  return (
    <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/path/:id" element={<PostIdPage/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  )
}
