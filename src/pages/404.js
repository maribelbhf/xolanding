import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
const NotFoundPage = () => (
  <>
    <Helmet>
      <meta charset="UTF-8" />
      <title>404 NOT FOUND</title>
      <meta name="description" content="XÓ Juice 404 PAGE" />
      <meta name="keywords" content="xo, XO, Juice, XÓ JUICE" />
      <meta name="author" content="XÓ Juice" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <Layout></Layout>
  </>
)

export default NotFoundPage
