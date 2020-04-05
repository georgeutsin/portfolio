import React from "react"
import Logo from "./Logo";
import './navbar.scss'

const collapseSVG = <svg viewBox="0 0 448 512" className="collapse icon"><path></path></svg>;

class NavBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuOpen: false,
            hasScrolled: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    public componentDidMount() {
        window.addEventListener("scroll", () => {
            this.setState({ hasScrolled: window.scrollY > 0 });
        });
    }

    public toggleMenu() {
        this.setState({ menuOpen: !(this.state.menuOpen) });
    }

    render() {
        return <div>
            <div className={this.state.hasScrolled || !this.props.isLanding ? "navBar scrolled" : "navBar"}>
                <div className="pageWrapper">
                    <a href="/"
                        className={this.state.hasScrolled || !this.props.isLanding ? "navLogo scrolled" : "navLogo"}>
                        <Logo />
                    </a>

                    <button className="collapseMenu" onClick={this.toggleMenu}>{collapseSVG}</button>

                    <div className={this.state.menuOpen ? "navItems open" : "navItems"} id="navItems">
                        <div className="link"><a href="/projects">Projects</a></div>
                        <div className="link"><a href="/photos">Photos</a></div>
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
            </div>
        </div>;
    }
}

export default NavBar;