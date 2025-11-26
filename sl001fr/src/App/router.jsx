import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SLApp from './App.jsx';       // 同目录引入
import Home from '../Pages/Home.jsx';    // 额外路由页面

const router = createBrowserRouter([
    {
        path: '/app',
        element: <SLApp />,
    },
    {
        path: '/',
        element: <Home />,
    },
]);

export default router;