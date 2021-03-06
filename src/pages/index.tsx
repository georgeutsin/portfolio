import React from "react"
import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import NoiseCanvas from "../components/NoiseCanvas";
import { graphql } from "gatsby"

import avatar from "../assets/images/avatar.jpg";
import resume from "../assets/GeorgeUtsin-Resume.pdf";
import "./style.scss";
import CardList from "../components/CardList";
import PhotoList from "../components/PhotoList";

export default (props: any) => {
  const projects = props.data.allMarkdownRemark.edges;
  const photos = props.data.allFlickrPhoto.edges;
  return <div>
    <SEO></SEO>
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
          <img className="avatar" src={avatar} alt="George"></img>
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

    <div className="showcase">
      <div className="pageWrapper">
        <h1>Projects</h1>
        <CardList list={projects.slice(0,5)} showMore={projects.length > 5}></CardList>
        <h1>Photos</h1>
        <PhotoList list={photos.slice(0,10)} showMore={photos.length > 10}></PhotoList>
      </div>
    </div>
    <Footer></Footer>
  </div>;
}

export const pageQuery = graphql`
  query Index {
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
    allFlickrPhoto (limit: 11) {
      edges {
        node {
          id
          url_n
          url_o
        }
      }
    }
  }
`