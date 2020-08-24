import React, { Component } from "react"
import styled from "styled-components"
import title from "../images/comingsoont.png"
import mtitle from "../images/coming-mobile.png"

const Form = () => {
  const Title = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 440px) {
      display: none;
    }
    @media only screen and (min-width: 900px) and (max-width: 1079px) {
      width: 50%;
    }
  `

  const MobileTitle = styled.img`
    display: none;
    margin-bottom: 0 !important;
    @media only screen and (max-width: 440px) {
      display: inline-block;
      z-index: 10;
    }
  `

  const Form = styled.form`
    height: 100vh;
    position: absolute;
    top: 0;

    @media only screen and (max-width: 4000px) {
      text-align: center;
      width: 100%;
    }
  `
  const Input = styled.input`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid white;
    height: 4em;
    color: white;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 1.4em;
    z-index: 1;
    @media only screen and (max-width: 800px) {
      width: 80%;
    }
  `
  const Submit = styled.input`
    background-color: #f3cece;
    color: #174342;
    border-radius: 40px;

    width: 30vw;
    height: 9vh;

    text-align: center;
    line-height: 0.3;
    margin: 0 auto;
    display: block;
    margin-top: 2em !important;
    font-size: 1.4em;
    font-family: Helvetica;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }

    @media only screen and (max-width: 440px) {
      font-size: 1.2em;
      width: 40%;
      height: 2.8em;
    }
  `
  const CenteredContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  return (
    <Form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      className="form"
      action="/thank-you"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <CenteredContainer>
        <Title src={title}></Title>
        <MobileTitle src={mtitle} />
        <Input placeholder="Your Email" type="email" name="email"></Input>
        <Submit type="submit" value="Sign Up"></Submit>
      </CenteredContainer>
    </Form>
  )
}
export default Form
