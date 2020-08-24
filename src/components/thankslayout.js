/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"

import styled from "styled-components"

import BackgroundSection from "./backgroundImage"

export default function ThanksLayout({ children }) {
  const Title = styled.p`
    font-size: 2.5em;
    font-family: Helvetica;
    color: white;
    line-height: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  return (
    <>
      <BackgroundSection>
        <Title>
          Thank you!
          <br /> Your form has been submited.
        </Title>
      </BackgroundSection>
    </>
  )
}
