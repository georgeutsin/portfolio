import React from "react"
import './navbar.scss'

const collapseSVG = <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    viewBox="0 0 448 512"
    style={{width: 50, height: 50}}>
    <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 
        7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 
        16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 
        0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
</svg>;

class NavBar extends React.Component {
    render() {
        return <div>
            <div className="navBar">
                <div className="logo">
                    George Utsin
        </div>

                <div className="navItems" id="navItems">
                    <a href="/projects">Projects</a>
                    <a href="/photos">Photos</a>
                </div>

                <button className="collapseMenu">{collapseSVG}</button>
            </div>
            <div className="navSpace"></div>
        </div>;
    }
}

export default NavBar;