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

export default function ThanksLayout({ children }) {
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
    text-align: center;
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
    @media only screen and (min-width: 441px) and (max-width: 650px) {
      height: 90vh;
      left: -10em;
      right: -10em;
      width: 140%;
      overflow: hidden !important;
    }
    @media only screen and (min-width: 661px) and (max-width: 850px) {
      height: 90vh;
      left: -10em;
      right: -10em;
      width: 100%;
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

  const Title = styled.p`
    margin-top: 32vh;
    font-size: 2.5em;
    font-family: Helvetica;
    color: white;
    line-height: 1em;

    @media only screen and (max-width: 440px) {
      height: 7em;
      margin-top: 32vh;
      font-size: 1.5em;
    }
    @media only screen and (min-width: 441px) and (max-width: 799px) {
      height: 9em;
      margin-left: 0;
      margin-top: 40vh;
      font-size: 1.6em;
    }
    @media only screen and (min-width: 800px) and (max-width: 1290px) {
      margin-left: 0;
      height: 7em;
      line-height: 1em;
      margin-top: 45vh;
    }

    @media only screen and (min-width: 1291px) {
      margin-left: 0;
      height: 8em;
      margin-top: 45vh;
    }
    @media only screen and (min-width: 2500px) {
      height: 15em;
      margin-top: 45vh;
      font-size: 3em;
    }
  `

  return (
    <>
      <Page>
        <Leaves src={leaves}></Leaves>
        <Circle>
          <Title>
            Thank you!
            <br /> Your form has been submited.
          </Title>
        </Circle>
        <Floor />
      </Page>
    </>
  )
}
