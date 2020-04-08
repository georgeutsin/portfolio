import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardList from "../components/CardList";

import "./style.scss";

export default (props: any) => {
    return <div>
        <SEO title="George Utsin - Projects"></SEO>
        <NavBar isLanding={false}></NavBar>
        <div className="showcase">
            <div className="navBarSpacer"></div>
            <div className="pageWrapper">
                <h1>Projects</h1>
                <CardList list={props.data.allMarkdownRemark.edges} showMore={false}></CardList>
            </div>
        </div>
        <Footer></Footer>
    </div>;
}

export const pageQuery = graphql`
  query Projects {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            short_desc
            site
            source
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`