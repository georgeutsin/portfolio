import React from "react"
import './navbar.scss'

// FontAwesome bars icon: https://fontawesome.com/icons/bars
const collapseSVG = <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    viewBox="0 0 448 512"
    className="collapseIcon">
    <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 
        7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 
        16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 
        0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
</svg>;

class NavBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuOpen: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    public toggleMenu() {
        this.setState({ menuOpen: !(this.state.menuOpen) });
    }

    render() {
        return <div>
            <div className="navBar">
                <div className="logo">George Utsin</div>

                <button className="collapseMenu" onClick={this.toggleMenu}>{collapseSVG}</button>

                <div className={this.state.menuOpen ? "navItems open" : "navItems"} id="navItems">
                    <div className="link"><a href="/projects">Projects</a></div>
                    <div className="link"><a href="/photos">Photos</a></div>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
            <div className="navSpace"></div>
        </div>;
    }
}

export default NavBar;