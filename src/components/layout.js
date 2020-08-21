/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Form from "./form"
import leaves from "../images/leaves.png"
import styled from "styled-components"
import logo from "../images/logo-desk.png"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    let loader = document.getElementsByClassName("loading")
    var arr = Array.from(loader)

    arr[0].addEventListener("animationend", function (event) {
      arr[0].style.display = "none"
    })
  }, [])

  const Page = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #f9cecc, #ffe0da);
    @media only screen and (max-width: 440px) {
      background: linear-gradient(to bottom, #f9cecc, #ffe0da);
      height: 100%;
      width: 100%;
      overflow: hidden !important;
    }
  `

  const Floor = styled.div`
    z-index: 0;
    height: 15vh;
    background-color: #fae9e2;
    position: absolute;
    bottom: 0;
    width: 100vw;
    @media only screen and (min-width: 1211px) {
      display: block;
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
    @media only screen and (max-width: 360px) {
      height: 28em !important;
    }
    @media only screen and (max-width: 440px) {
      height: 32em;
      left: -10em;
      right: -10em;
      width: 140%;
      overflow: hidden !important;
    }
    @media only screen and (min-width: 500px) and (max-width: 1210px) {
      height: 90vh;
      left: -10em;
      right: -10em;
      width: 140%;
      overflow: hidden !important;
    }
    @media only screen and (min-height: 800px) and (max-width: 430px) {
      height: 70vh;
      overflow: hidden !important;
    }
    @media only screen and (min-width: 1300px) {
      width: 70vw;
    }
  `

  const Leaves = styled.img`
    position: absolute;
    left: 0;
    top: -80;
    z-index: 10;
    width: 38%;
    @media only screen and (min-width: 200px) and (max-width: 1210px) {
      display: none;
    }
  `

  const Loading = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    background: #f2ced4;
    animation: color-me-out 8s 1;
    z-index: 100;

    @keyframes color-me-out {
      0% {
        background: #e75d58;
      }
      10% {
        background: #f9808b;
      }
      20% {
        background: #99d9be;
      }
      30% {
        background: #f6d635;
      }
      40% {
        background: #f2ced4;
      }
      50% {
        background: #e75d58;
      }
      60% {
        background: #e75d58;
      }
      70% {
        background: #f9808b;
      }
      80% {
        background: #99d9be;
      }
      82% {
        background: #f2ced4;
        opacity: 1;
      }
      100% {
        display: none;
        opacity: 0;
      }
    }
  `

  const Logo = styled.img`
    height: 8em;
    position: absolute;
    top: 45%;
    left: 45%;

    @media only screen and (max-width: 400px) {
      height: 6em;
      top: 40%;
      left: 30%;
    }
    @media only screen and (min-width: 401px) and (max-width: 590px) {
      height: 6em;
      top: 45%;
      left: 35%;
    }
  `

  return (
    <>
      <Loading className="loading">
        <Logo src={logo} />
      </Loading>
      <Page>
        <Leaves src={leaves}></Leaves>
        <Circle>
          <Form />
        </Circle>
        <Floor />
      </Page>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
