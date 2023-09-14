import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


export const privateRouters = [
    { path: '/about', element: <About/>},
    { path: '/posts/:id', element: <PostIdPage/>},
    { path: '/posts', element: <Posts/>},
]


export const publicRoutes = [
    { path: '/login', element: <Login/>},

]