/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Form from "./form"
import leaves from "../images/leaves.png"
import styled from "styled-components"
import logo from "../images/logo-desk.png"
import Hlogo from "../images/hiddenpinklogo.png"
import BackgroundSection from "./backgroundImage"

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
    })
    arrS[0].addEventListener("animationend", function (event) {
      arrS[0].style.display = "none"
      arrt[0].style.webkitAnimationPlayState = "running"
    })
    arrt[0].addEventListener("animationend", function (event) {
      arrt[0].style.display = "none"
    })
  }, [])

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
      96% {
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

    }

    .hideCover {
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
    }
  `

  const Logo = styled.img`
    height: 4em;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  const Overlay = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 100;
    .hiddenLogo {
      z-index: 110;
      animation: Grow 2s;
      animation-play-state: paused;
      position: relative;
      top: 0 !important;
      left: 0 !important;
      transform: none;
      @media only screen and (max-width: 420px) {
        animation: GrowMobile 2s;
        animation-play-state: paused;
      }
      @keyframes Grow {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(8);
        }
      }
      @keyframes GrowMobile {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(4);
        }
      }
    }
  `

  return (
    <>
      <Hidden className="hideCover">
        <Overlay>
          <Logo src={Hlogo} className="hiddenLogo" />
        </Overlay>
      </Hidden>
      <Loading className="loading">
        <Logo src={logo} />
      </Loading>
      <BackgroundSection>
        <Form />
      </BackgroundSection>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
