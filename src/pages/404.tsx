import React from "react"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NoiseCanvas from "../components/NoiseCanvas";

import "./style.scss";

export default () => {
    return <div>
        <NavBar isLanding={false}></NavBar>
        <div className="main">
            <NoiseCanvas></NoiseCanvas>
            <div className="navBarSpacer"></div>
            <div className="pageWrapper">
                <div className="landing">
                    <h2>404</h2>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>;
}