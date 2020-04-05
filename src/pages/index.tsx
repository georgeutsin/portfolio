import React from "react"
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import NoiseCanvas from "../components/NoiseCanvas";

import avatar from "../assets/avatar.jpg";
import resume from "../assets/GeorgeUtsin-Resume.pdf";
import "./style.scss";

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

    <div className="bio">
        <div className="pageWrapper">
            <div className="thirds">
                <img className="avatar" src={avatar}></img>
            </div>
            <div className="thirds">
                Hi my name is George. <br></br>
                I'm a coder by day and <br></br>
                not coding by night.
            </div>

            <div className="thirds">
                <a href={resume}>Resume</a><br></br>
                <a href="https://github.com/georgeutsin">GitHub</a> <br></br>
                <a href="https://www.linkedin.com/in/georgeutsin">LinkedIn</a> <br></br>
            </div>

        </div>
    </div>

    <div className="page">
        <div className="pageWrapper">
            <h1>Projects</h1>
            <h1>Photos</h1>
        </div>
    </div>
    <Footer></Footer>
</div>;
