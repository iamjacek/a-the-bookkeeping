import React from "react"
import Layout from "../components/Layout"
import Home from "../components/Home"
import PreService from "../components/PreService"
import Service from "../components/Service"
import About from "../components/About"
import Contact from "../components/Contact"
import CookieConsent from "react-cookie-consent";

import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CookieConsent
      acceptOnScroll={true}
      style={{ background: "#004e68" }}
      buttonStyle={{ color: "#004e68", background: "#FCFCFC", borderRadius: "5px", fontWeight: "700", fontFamily: "Play", textTransform: "uppercase" }}
      contentStyle={{ color: "#FCFCFC" }}
  >
    This website uses cookies to enhance the user experience. Just scroll to accept.
</CookieConsent>
    <Home />
    <PreService />
    <Service />
    <About />
    <Contact />
  </Layout>
);
export default IndexPage