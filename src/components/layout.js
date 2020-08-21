/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Form from "./form"
import leaves from "../images/leaves.png"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const Page = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #f9cecc, #ffe0da);
    @media only screen and (max-width: 440px) {
      background: linear-gradient(to bottom, #fed5d4, #f6e0dd);
    }
  `

  const Floor = styled.div`
    z-index: 0;
    height: 15vh;
    background-color: #fae9e2;
    position: absolute;
    bottom: 0;
    width: 100vw;
    @media only screen and (max-width: 1910px) {
      display: none;
    }
  `
  const Circle = styled.div`
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1060;
    background-color: rgb(0, 65, 63);
    border-radius: 50%;
    height: 110%;
    z-index: 5;
    width: 80%;
    @media only screen and (max-width: 440px) {
      height: 80%;
      left: -10em;
      right: -10em;
      width: 140%;
    }
    @media only screen and (min-width: 500px) and (max-width: 1210px) {
      height: 90%;
      left: -10em;
      right: -10em;
      width: 140%;
    }
    @media only screen and (min-height: 800px) and (max-width: 430px) {
      height: 70%;
    }
    @media only screen and (min-width: 1300px) {
      width: 70%;
    }
  `

  return (
    <Page>
      <img
        src={leaves}
        style={{
          position: `absolute`,
          left: 0,
          top: -80,
          zIndex: 10,
          width: `38%`,
        }}
      ></img>
      <Circle>
        <Form />
      </Circle>
      <Floor />
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
