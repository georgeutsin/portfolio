import React from "react"
import './style.scss'
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import NoiseCanvas from "../components/NoiseCanvas";

export default () => <div>
    <NavBar isLanding={true}></NavBar>

    <div className="main">
        <NoiseCanvas></NoiseCanvas>
        <div className="navBarSpacer"></div>
        <div className="pageWrapper">
            <div className="landing">
                <Logo></Logo>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>;
