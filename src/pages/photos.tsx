import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PhotoList from "../components/PhotoList";

import "./style.scss";

export default (props: any) => {
    return <div>
        <SEO title="George Utsin - Photos"></SEO>
        <NavBar isLanding={false}></NavBar>
        <div className="showcase">
            <div className="navBarSpacer"></div>
            <div className="pageWrapper">
                <h1>Photos</h1>
                <PhotoList list={props.data.allFlickrPhoto.edges}></PhotoList>
            </div>
        </div>
        <Footer></Footer>
    </div>;
}

export const pageQuery = graphql`
  query Photos {
    allFlickrPhoto {
      edges {
        node {
          id
          url_n
        }
      }
    }
  }
`