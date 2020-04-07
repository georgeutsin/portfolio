import React from "react"
import Img from "gatsby-image"

import './cardlist.scss'

export default (props: any) => {
    const list = props.list.slice(0, 5).map((e: any) => {
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
        {props.list.length > 5 &&
            <li className="cardWrapper" key="more">
                <a href="projects">
                    <div className="card">
                        <div className="more both-center">
                            + {props.list.length - 5} more
                            </div>
                    </div>
                </a>
            </li>
        }
    </ul>;
}
