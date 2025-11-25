import React from "react";
import Top from "../Components/Top.jsx";
import NavBar from "../Components/NavBar.jsx";
// function top(){
//     <Top></Top>
// }
function Sidebar(){

}

function Footer(){

}

export default function Home(){
    return (
        <div>
            <NavBar home={"Welcome"}/>
            <h1>Home Page</h1>
            <Top></Top>
        </div>
    );
}

