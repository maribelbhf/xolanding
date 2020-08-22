import React, { Component } from "react"
import styled from "styled-components"
import title from "../images/comingsoon.png"
import mtitle from "../images/coming-mobile.png"

const Form = () => {
  const Title = styled.img`
    height: 10em;
    margin-left: 14vw;
    margin-top: 32vh;

    @media only screen and (max-width: 440px) {
      display: none;
      height: 7em;
    }
    @media only screen and (min-width: 441px) and (max-width: 799px) {
      height: 9em;
      margin-left: 0;
    }
    @media only screen and (min-width: 800px) and (max-width: 1290px) {
      margin-left: 0;
      height: 7em;
    }

    @media only screen and (min-width: 1291px) {
      margin-left: 0;
      height: 8em;
    }
    @media only screen and (min-width: 2500px) {
      height: 15em;
    }
  `

  const MobileTitle = styled.img`
    display: none;
    @media only screen and (max-width: 440px) {
      display: inline-block;
      margin-bottom: 0;
      text-align: center;
      margin-top: 30%;
      z-index: 10;
    }
    @media only screen and (max-width: 360px) {
      height: 5.5em;
    }
    @media only screen and (min-height: 535px) and (max-height: 800) {
      margin-top: 27%;
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
    width: 65%;
    margin-left: 14vw;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid white;
    height: 4em;
    color: white;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 1.4em;
    z-index: 1;
    @media only screen and (max-width: 440px) {
      width: 65%;
      margin-left: 0;
      font-size: 1em;
      margin-top: -10%;
    }
    @media only screen and (min-width: 441px) and (max-width: 799px) {
      margin-left: 0;
      width: 58%;
    }
    @media only screen and (min-width: 500px) {
      margin-left: 0;
    }
  `
  const Submit = styled.input`
    background-color: #f3cece;
    color: #174342;
    border-radius: 40px;

    width: 30vw;
    height: 9vh;
    padding: 16px 32px;
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
    @media only screen and (min-width: 441px) and (max-width: 799px) {
      font-size: 1.2em;
      width: 20%;
      height: 2.8em;
    }
    @media only screen and (min-width: 800px) and (max-width: 1210px) {
      font-size: 1.5em;
      width: 20%;
      height: 2em;
    }
    @media only screen and (min-width: 1211px) and (max-width: 1800px) {
      font-size: 1.5em;
      width: 40%;
      height: 2.5em;
    }
  `

  return (
    <Form
      name="SignUpForm"
      method="POST"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      className="form"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Title src={title}></Title>
      <MobileTitle src={mtitle} />
      <Input placeholder="Your Email" type="email" name="email"></Input>
      <Submit type="submit" value="Sign Up"></Submit>
    </Form>
  )
}
export default Form
