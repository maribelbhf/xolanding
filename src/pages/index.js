import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Coming Soon</title>
        <meta name="description" content="XÓ Juice Coming Soon " />
        <meta name="keywords" content="xo, XO, Juice, XÓ JUICE" />
        <meta name="author" content="XÓ JUICE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Layout></Layout>
    </>
  )
}

export default IndexPage
