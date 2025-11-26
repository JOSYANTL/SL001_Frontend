import React from 'react'
import ReactDOM from 'react-dom/client'
import SLRouterProvider from "./App/providers/RouterProvider.jsx";
import StoreProvider from "./App/providers/StoreProvider.jsx";
import './scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StoreProvider>
            <SLRouterProvider />
        </StoreProvider>
    </React.StrictMode>,
)