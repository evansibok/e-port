import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import { skills } from "../components/skills/skills-utils"
import HTML5 from "../components/svgs/html5-component"
import CSS3 from "../components/svgs/css3-component"
import JS from "../components/svgs/js-component"
import SASS from "../components/svgs/sass-component"
import ReactJS from "../components/svgs/react-js-component"
import GraphQLIcon from "../components/svgs/graphql-component"
import Github from "../components/svgs/github-component"
import Trello from "../components/svgs/trello-component"
import NodeJS from "../components/svgs/node-js"
import ExpressJS from "../components/svgs/express-js"
import Redux from "../components/svgs/redux"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query aboutImages {
      evansImage: imageSharp(
        fluid: {
          src: {
            eq: "/static/7cbe57754e8d5673cb29cde51e6c93d4/b17c1/evans.jpg"
          }
        }
      ) {
        fluid {
          src
          originalName
        }
      }
    }
  `)

  const evansImage = data.evansImage.fluid.src
  const evansImageAlt = data.evansImage.fluid.originalName

  return (
    <Layout>
      <SEO title="About" />
      <PageLabel name="About Me" />
      <div className="aboutCon">
        <div className="leftCon">
          <p>Human <span role="img" aria-label="wink">😜</span></p>
          <p>
            I design and build websites using well crafted human-centered design
            approaches, modern tools and a combination of both sides of my
            brain.
          </p>
          <p>
            When I'm not designing beautiful user experiences or writing
            functional code for websites, I listen to music, watch fantasy
            shows, drink coffee, read a book or write a poem.
          </p>
          <p>I find that VR/AR & Machine Learning intrigue me.</p>
          <div className="skills">
            <p>My skills include:</p>
            <ul>
              {
                skills.map((skill, i) => {
                  return (
                      <li key={i}>
                        {skill}
                      </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="rightCon">
          <img src={evansImage} alt={evansImageAlt} />
        </div>
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default AboutPage
