import React from "react"
import Layout from "../components/Layout"
import Button from "../components/Button"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  min-height: 75vh;
  width: 100%;
  padding: 5vw;
`

const thanks = () => (
  <Layout>
    <SEO
      title="Thank You for submitting form!"
      keywords={[
        `bookkeeping questions`,
        `payroll questions`,
        `payroll for small business`,
        `A payroll and bookkeeping`,
      ]}
    />
    <Wrapper>
      <h1>Form submitted</h1>
      <h2>Thanks you for your message. We try to reply as soon as possible!</h2>
      <Link to="/">
        <Button>HOME</Button>
      </Link>
    </Wrapper>
  </Layout>
)
export default thanks
