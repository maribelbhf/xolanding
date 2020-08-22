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
import Hlogo from "../images/hiddenlogo.png"

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
    let second = document.getElementsByClassName("hiddenLogo")
    var arrS = Array.from(second)
    let third = document.getElementsByClassName("hideCover")
    var arrt = Array.from(third)
    arr[0].addEventListener("animationend", function (event) {
      arr[0].style.display = "none"
      arrS[0].style.webkitAnimationPlayState = "running"
      arrt[0].style.webkitAnimationPlayState = "running"
    })
    arrS[0].addEventListener("animationend", function (event) {
      arrS[0].style.display = "none"
    })
    arrt[0].addEventListener("animationend", function (event) {
      arrt[0].style.display = "none"
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
    width: 60%;
    @media only screen and (max-width: 330px) {
      height: 25em !important;
      width: 120% !important;
    }
    @media only screen and (min-width: 331px) and (max-width: 390px) {
      height: 35em !important;
      width: 150% !important;
    }
    @media only screen and (max-width: 440px) {
      height: 32em;
      left: -10em;
      right: -10em;
      width: 130%;
      overflow: hidden !important;
    }
    @media only screen and (min-width: 441px) and (max-width: 850px) {
      height: 90vh;
      left: -10em;
      right: -10em;
      width: 140%;
      overflow: hidden !important;
    }
    @media only screen and (min-width: 851px) and (max-width: 1279px) {
      height: 120vh;
      left: -10em;
      right: -10em;
      width: 60%;
      overflow: hidden !important;
    }
    @media only screen and (max-height: 800px) and (max-width: 430px) {
      height: 70vh;
      overflow: hidden !important;
    }
    @media only screen and (min-width: 880px) and (min-height: 949px) {
      width: 72%;
    }
    @media only screen and (min-width: 1320px) and (max-height: 948px) {
      width: 60%;
    }
    @media only screen and (min-width: 1280px) and (min-height: 949px) {
      width: 72%;
    }
    @media only screen and (min-width: 1280px) and (max-height: 800px) {
      width: 60%;
    }
    @media only screen and (min-width: 800px) and (max-height: 600px) {
      width: 50%;
    }
    @media only screen and (min-width: 1300px) and (max-height: 700px) {
      width: 50%;
    }
    @media only screen and (min-width: 1500px) and (max-height: 499px) {
      width: 40%;
    }
    @media only screen and (min-width: 1500px) and (min-height: 500px) and (max-height: 700px) {
      width: 50%;
    }
    @media only screen and (min-width: 1800px) and (max-height: 900px) {
      width: 45%;
    }
    @media only screen and (min-width: 1600px) and (max-height: 900px) {
      width: 50%;
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
    @media only screen and (min-width: 851px) and (max-width: 1010px) {
      top: -120px;
    }

    @media only screen and (min-width: 1251px) and (max-width: 2000px) {
      top: -120px;
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
  const Hidden = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    background: #f2ced4;

    z-index: 90;
    animation: hide 2s;
    animation-play-state: paused;
    @keyframes hide {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    .hiddenLogo {
      animation: Grow 2s;
      animation-play-state: paused;
      @keyframes Grow {
        from {
          transform: scale(1);
          opacity: 1;
        }
        to {
          transform: scale(15);
          opacity: 0;
        }
      }
    }
  `

  const Logo = styled.img`
    height: 4em;
    position: absolute;
    top: 45%;
    left: 45%;

    @media only screen and (max-width: 400px) {
      height: 4em;
      top: 40%;
      left: 35%;
    }
    @media only screen and (min-width: 401px) and (max-width: 590px) {
      height: 4em;
      top: 45%;
      left: 35%;
    }
  `
  const HLogo = styled.img`
    height: 4em;
    position: absolute;
    top: 45%;
    left: 45%;

    @media only screen and (max-width: 400px) {
      height: 4em;
      top: 40%;
      left: 35%;
    }
    @media only screen and (min-width: 401px) and (max-width: 590px) {
      height: 4em;
      top: 45%;
      left: 35%;
    }
  `

  return (
    <>
      <Hidden className="hideCover">
        <Logo src={logo} className="hiddenLogo" />
      </Hidden>
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
