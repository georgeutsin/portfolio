import React from "react"
import Img from "gatsby-image"

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
        const list = this.props.list.map((e: any) => {
            const project = e.node.frontmatter;
            return <li className="cardWrapper" key={project.title}>
                <div className="card">
                    {project.image && <Img fluid={project.image.childImageSharp.fluid} />}
                    <h2>{project.title}</h2>
                    {project.short_desc}
                    <div className="links">
                        {project.site !== "" && <a href={project.site}>Site</a>}
                        {project.source !== "" && <a href={project.source}>Source</a>}
                    </div>
                </div>
            </li>;
        });
        return <ul className="cardList">
            {list}
        </ul>;
    }
}

export default CardList;