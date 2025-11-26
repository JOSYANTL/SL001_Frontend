import {RouterProvider} from "react-router-dom";
import router from "../router.jsx";

export default function SLRouterProvider() {
    return <RouterProvider router={router} />;
}