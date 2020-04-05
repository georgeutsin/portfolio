import React from "react"
import './style.scss'
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default () => <div>
    <NavBar isLanding={true}></NavBar>

    <div className="main">
        <div className="navBarSpacer"></div>
        <div className="pageWrapper">
            <Logo fontSize={34}></Logo>
        </div>
    </div>
    <Footer></Footer>
</div>;
