import React from 'react'
import ReactDOM from 'react-dom/client'
import './App/App.css'                // 用你的 App.css
import { RouterProvider } from 'react-router-dom'
import router from './App/router.jsx'     // src/App/router.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)