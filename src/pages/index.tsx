import React from "react"
import './style.scss'
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";

export default () => <div>
    <NavBar></NavBar>

    <div className="main">
        <div className="navBarSpacer"></div>
        <Logo fontSize={24}></Logo>
    </div>
</div>;
