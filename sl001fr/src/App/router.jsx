import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SLApp from './App.jsx';       // 同目录引入
import Home from '../Pages/Home.jsx';
import About from "../Pages/About.jsx";    // 额外路由页面

const router = createBrowserRouter([
    {
        path: '/',
        element: <SLApp />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: '/about',
        element: <About />,
        children: [
            {
                // index: true,
                // element: <Home />,
            },
        ],
    },
]);

export default router;