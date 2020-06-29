import React from "react"
import Layout from "../components/Layout"
import Home from "../components/Home"
import PreService from "../components/PreService"
import Service from "../components/Service"
import About from "../components/About"
import Contact from "../components/Contact"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"

const Anchor = styled.div`
  display: inline-block;
  a {
    color: yellow;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `bookkeeping`,
        `payroll`,
        `payroll for small business`,
        `A payroll and bookkeeping`,
      ]}
    />
    <CookieConsent
      acceptOnScroll={true}
      style={{ background: "#004e68" }}
      buttonStyle={{
        color: "#004e68",
        background: "#FCFCFC",
        borderRadius: "5px",
        fontWeight: "700",
        fontFamily: "Play",
        textTransform: "uppercase",
      }}
      contentStyle={{ color: "#FCFCFC" }}
    >
      This website uses cookies to enhance the user experience. Scroll to
      accept. Read more about privacy{` `}
      <Anchor>
        <Link to="./privacy">here</Link>.
      </Anchor>
    </CookieConsent>
    <Home />
    <PreService />
    <Service />
    <About />
    <Contact />
  </Layout>
)
export default IndexPage
