import React from "react"
import './cardlist.scss'

class CardList extends React.Component<any, any> {
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
        return <ul className="cardList">
        {/* Use gatsby images https://www.gatsbyjs.org/packages/gatsby-image/ */}
        <li className="cardWrapper">
            <div className="card">
                <h2>TagBull</h2>
                Crowd consensus for high quality datasets.
                <div className="links">
                    <a href="https://tagbull.com/">Site</a>|
                    <a href="https://github.com/georgeutsin/tagbull">Source</a> 
                </div>
            </div>
        </li>
        <li className="cardWrapper">
            <div className="card">
                <h2>Psycho Taxi</h2>
                Yet another infinite runner for iOS and Android.
                <div className="links">
                    <a href="https://psychotaxi.com/">Site</a>|
                    <a href="https://github.com/georgeutsin/psychotaxi">Source</a> 
                </div>
            </div>
        </li>
        <li className="cardWrapper">
            <div className="card">
                <h2>Portfolio</h2>
                You're looking at it.
                <div className="links">
                    <a href="https://github.com/georgeutsin/portfolio">Source</a>
                </div>
            </div>
        </li>
    </ul>;
    }
}

export default CardList;