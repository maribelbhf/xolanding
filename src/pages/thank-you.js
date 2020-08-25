import React from "react"
import ThanksLayout from "../components/thankslayout"
import { Helmet } from "react-helmet"
const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Thank you!</title>
        <meta
          name="description"
          content="XÓ Juice Thanks for submiting your form"
        />
        <meta name="keywords" content="xo, XO, Juice, XÓ JUICE" />
        <meta name="author" content="XÓ Juice" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ThanksLayout></ThanksLayout>
    </>
  )
}

export default ThankYouPage
