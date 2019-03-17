import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "../scss/dev.scss"
import gatsbyLogo from "../images/gatsby.svg"

export default ({data}) => {
  console.log(data)
  return (
    <div>
      <div id="bg" />

      <header id="header">
        <nav>
          <span class="logo">
            <img src={gatsbyLogo} />
            {/* <Img fixed={data.gatsbyIcon.childImageSharp.fixed} /> */}
          </span>
          <div class="nav-menu">
            <ul>
              <li>Home</li>
              <li>About me</li>
              <li>Contact</li>
            </ul>
          </div>
          <span class="right-header" />
        </nav>
      </header>

      <section id="head">
        <div id="logo">
          <Img fixed={data.trash.childImageSharp.fixed} />
          {/* <Image name="logo.png" maxWidth={300} /> */}
          {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
        </div>
        <div id="header-content">
          <h1>Start your journey!</h1>
          <h2>and prepare yourself!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </p>
          <a href="#">learn more</a>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query {

    gatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    trash: file(relativePath: { eq: "trash.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }

  }
`