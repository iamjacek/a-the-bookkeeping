import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Home from "../components/Home"
import PreService from "../components/PreService"
import Service from "../components/Service"
import About from "../components/About"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />
    <PreService />
    <Service />
    <About />
  </Layout>
);
export default IndexPage