import React from "react"
import styled from "styled-components"
import Layout from "../components/layoutService"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  overflow: auto;
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
    ${({ theme }) => theme.media.medium} {
      transform: translateY(-1.5em);
    }
    ${({ theme }) => theme.media.large} {
      font-size: calc(${({ theme }) => theme.font.header}*1.1);
      transform: translateY(0);
    }
    ${({ theme }) => theme.media.xlarge} {
      font-size: calc(${({ theme }) => theme.font.header}*1.5);
    }
    ${({ theme }) => theme.media.xxlarge} {
      font-size: calc(${({ theme }) => theme.font.header}*3.2);
    }
  }
  h2 {
    font-size: calc(${({ theme }) => theme.font.base}*1.6);
    margin: 1em 0;
    text-align: left;
    background-color: transparent;
    padding: 0;
  }
  ul {
    color: #004f69;
    text-align: left;
    padding: 0;
    margin-bottom: 3em;
    li {
      text-align: left;
      text-decoration: none;
      list-style-type: none;
    }
  }
  ${({ theme }) => theme.media.large} {
    min-height: unset;
    height: 75vh;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2em;
  ${({ theme }) => theme.media.small} {
    width: 40%;
  }
  ${({ theme }) => theme.media.medium} {
    width: 35%;
    margin: 5%;
  }
  ${({ theme }) => theme.media.large} {
    width: 45%;
    margin: 0;
    margin-left: 5%;
  }
`

const Outter = styled.div`
  margin: 0 10%;
  height: 100%;
  ${({ theme }) => theme.media.medium} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`

const QuestionWrap = styled.div`
  ${({ theme }) => theme.media.medium} {
    width: 30%;
  }
  font-size: calc(${({ theme }) => theme.font.base}*1);
  margin-top: 0;
  text-align: center;
  font-weight: 400;
  margin-bottom: 40px;
  ${({ theme }) => theme.media.small} {
    font-size: calc(${({ theme }) => theme.font.base}*1.1);
  }
  ${({ theme }) => theme.media.medium} {
  }
  ${({ theme }) => theme.media.large} {
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*1.5);
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*2.5);
  }
`

const Main = styled.div`
  ${({ theme }) => theme.media.small} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    p {
      width: 60%;
    }
  }

  ${({ theme }) => theme.media.medium} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    p {
      width: 60%;
    }
  }
  ${({ theme }) => theme.media.large} {
    flex-direction: row-reverse;
    p {
      width: 50%;
    }
  }
`

const Payroll = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <h1>PAYROLL</h1>
        <Outter>
          <Main>
            <ImageWrapper>
              <Img
                title="people"
                alt="group of people"
                fluid={data.file.childImageSharp.fluid}
              />
            </ImageWrapper>

            <p>
              Along with the amounts that each employee should receive for time
              worked or tasks performed, payroll can also refer to a company's
              records of payments that were previously made to employees,
              including salaries and wages, bonuses, and withheld taxes, or the
              company's department that calculates and pays out these amounts
            </p>
          </Main>

          <QuestionWrap>
            <h2>Check them all</h2>
            <ul>
              <li>salaries</li>
              <li>wages</li>
              <li>bonuses</li>
              <li>withheld taxes</li>
            </ul>
          </QuestionWrap>
        </Outter>
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
