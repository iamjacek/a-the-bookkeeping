import React from "react"
import styled from "styled-components"
import Layout from "../components/LayoutService"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ReactTooltip from "react-tooltip"

const Wrapper = styled.div`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: calc(${({ theme }) => theme.font.header}*1);
    margin: 1em auto;
    text-align: center;
    background-color: transparent;

    ${({ theme }) => theme.media.large} {
      margin-bottom: 70px;
    }
    ${({ theme }) => theme.media.xlarge} {
      font-size: calc(${({ theme }) => theme.font.header}*1.3);
      margin-top: 0;
    }
    ${({ theme }) => theme.media.xxlarge} {
      font-size: calc(${({ theme }) => theme.font.header}*2.7);
      margin: -3em auto 3em auto;
    }
  }
  h2 {
    font-size: calc(${({ theme }) => theme.font.base}*1.6);
    margin: 1em 0;
    text-align: left;
    background-color: transparent;
    padding: 0;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2em;

  ${({ theme }) => theme.media.small} {
    width: 80%;
    margin: 0 auto;
  }
  ${({ theme }) => theme.media.medium} {
    width: 100%;
    margin: 0 auto;
  }
`

const ContentWrap = styled.div`
  display: relative;
  margin: 0 10%;
  height: 100%;
  ${({ theme }) => theme.media.large} {
    display: flex;
  }
`

const Side = styled.div`
  position: relative;
  width: 100%;
  font-size: calc(${({ theme }) => theme.font.base}*1);
  margin-top: 0;
  text-align: center;
  font-weight: 400;
  margin-bottom: 40px;
  ${({ theme }) => theme.media.small} {
    margin-bottom: 70px;
  }
  ${({ theme }) => theme.media.medium} {
    width: 60%;
    margin: 0 auto 70px auto;
  }
  ${({ theme }) => theme.media.large} {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Main = styled.div`
  width: 100%;
  ${({ theme }) => theme.media.small} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }
  ${({ theme }) => theme.media.large} {
    width: 60%;
  }
`

const Card = styled.div`
  cursor: pointer;
  background: #e4e4e4;
  font-family: "Play", sans-serif;
  color: #004f69;
  width: 80vw;
  max-width: 256px;
  height: 80vw;
  max-height: 170px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${({ theme }) => theme.font.header}*.65);
  font-weight: 400;
  margin-bottom: 30px;
  transition: box-shadow 0.2s ease-out;

  ${({ theme }) => theme.media.small} {
    margin: 0 10px 30px 10px;
  }
  ${({ theme }) => theme.media.large} {
  }
`

const Payroll = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <ReactTooltipStyled
          multiline={true}
          backgroundColor="#004F69"
          effect="solid"
        />

        <SEO title="Payroll" />
        <h1>PAYROLL</h1>
        <ContentWrap>
          <Side>
            <ImageWrapper>
              <Img
                title="people"
                alt="group of people"
                fluid={data.file.childImageSharp.fluid}
              />
            </ImageWrapper>
          </Side>
          <Main>
            <Card
              data-tip="Filling of statutory payments each month<br />
            Payroll monthly/weekly<br /> Payroll support<br /> Pensions<br />"
            >
              Payroll Processing
            </Card>
            <Card data-tip="Payslips to be generated and uploaded into a Portal">
              Payslip Options
            </Card>
            <Card data-tip="Monthly reports<br />G2N">
              Payroll and HR Reports
            </Card>
            <Card data-tip="P60, P11D, P45, etc...">PAYE Forms</Card>
            <Card data-tip="Paper work<br />Dealing with the new and leaving employees<br />HR advice">
              HR Matters
            </Card>
            <Card data-tip="RTI submission">RTI (Real Time Info)</Card>
          </Main>
        </ContentWrap>
      </Wrapper>
    </Layout>
  )
}

export default Payroll

export const query = graphql`
  query {
    file(relativePath: { eq: "group_of_people.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const ReactTooltipStyled = styled(ReactTooltip)`
  ${({ theme }) => theme.media.large} {
    font-size: 14px !important;
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: 22px !important;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: 35px !important;
    padding: 12px 30px;
  }
`
