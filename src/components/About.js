import React, { Component } from "react"
import styled from "styled-components"
import iconsAbout from "../images/icons_about.svg"
import shapeHome from "../images/shape_home.svg"
import shapeAbout from "../images/shape_about_tablet.svg"
import shapeAboutBig from "../images/shape_about_big.svg"
import Button from "../components/Button"

const Wrapper = styled.div`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${shapeHome});
  background-repeat: no-repeat;
  background-position-y: 100%;
  background-position-x: center;
  background-size: auto 70%;
  ${({ theme }) => theme.media.medium} {
    background-image: url(${shapeAbout});
    background-size: cover;
  }
  ${({ theme }) => theme.media.large} {
    background-image: url(${shapeAboutBig});
    background-size: cover;
    background-position-y: 10px;
    min-height: 80vh;
  }
  ${({ theme }) => theme.media.xlarge} {
    background-image: url(${shapeAboutBig});
    background-size: cover;
    background-position-y: 10px;
    min-height: 80vh;
  }
`

const Title = styled.div`
  text-align: center;
  width: 100%;
  margin: 30px auto;
  h2 {
    font-weight: 800;
    display: inline-block;
  }
  ${({ theme }) => theme.media.large} {
    margin-top: 50px;
  }
  ${({ theme }) => theme.media.xlarge} {
    margin-top: 100px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    margin-top: 250px;
  }
`

const Text = styled.div`
  width: 80%;
  margin: 10px auto;
  ${({ theme }) => theme.media.small} {
    width: 50%;
    margin: 0 auto;
  }
  ${({ theme }) => theme.media.medium} {
    width: 40%;
  }
`

const Newsletter = styled.div`
  width: 290px;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: calc(${({ theme }) => theme.font.header}*1.06);
  }
  p {
    width: 80%;
  }
  ${({ theme }) => theme.media.small} {
    h1 {
      font-size: calc(${({ theme }) => theme.font.header}*1.17);
    }
  }
  ${({ theme }) => theme.media.medium} {
    flex-direction: row;
    width: 70%;
    p {
      width: 100%;
    }
  }
  ${({ theme }) => theme.media.large} {
    flex-direction: column;
    width: 30%;
    h1 {
      font-size: calc(${({ theme }) => theme.font.header}*1.3);
    }
    h2 {
      font-size: calc(${({ theme }) => theme.font.header}*1.23);
    }
  }
  ${({ theme }) => theme.media.xlarge} {
    h1 {
      font-size: calc(${({ theme }) => theme.font.header}*1.9);
    }
    h2 {
      font-size: calc(${({ theme }) => theme.font.header}*1.8);
    }
  }
  ${({ theme }) => theme.media.xxlarge} {
    h1 {
      font-size: calc(${({ theme }) => theme.font.header}*3.65);
    }
    h2 {
      font-size: calc(${({ theme }) => theme.font.header}*3.4);
    }
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.media.medium} {
    width: 90%;
    margin: 0 auto;
  }
  ${({ theme }) => theme.media.medium} {
    width: 60%;
    margin: 0 auto;
  }
  ${({ theme }) => theme.media.xlarge} {
    width: 65%;
  }
`

const Email = styled.input`
  font-weight: 700;
  font-family: "Play", sans-serif;
  font-size: calc(${({ theme }) => theme.font.base}*1);
  background-color: transparent;
  border: 2px solid #004f68;
  color: #004e68;
  border-radius: 5px;
  width: 280px;
  height: 33px;
  margin-bottom: 20px;
  text-align: center;
  ::placeholder {
    color: #50707a;
  }
  ${({ theme }) => theme.media.medium} {
    width: 330px;
    height: 35px;
    margin: 0;
    margin-bottom: 1.2em;
  }
  ${({ theme }) => theme.media.large} {
    width: 330px;
    height: 35px;
    margin: 0;
    margin-bottom: 1.2em;
    font-size: calc(${({ theme }) => theme.font.base}*1.1);
  }
  ${({ theme }) => theme.media.xlarge} {
    width: 430px;
    height: 50px;
    margin: 0;
    margin-bottom: 1.2em;
    font-size: calc(${({ theme }) => theme.font.base}*1.5);
  }
  ${({ theme }) => theme.media.xxlarge} {
    width: 1050px;
    height: 100px;
    margin: 0;
    margin-bottom: 2em;
    border-radius: 7px;
    border: 5px solid #004e68;
    font-size: calc(${({ theme }) => theme.font.base}*3);
  }
  &:focus {
    border: 3px solid #004f68;
    ${({ theme }) => theme.media.xxlarge} {
      border: 8px solid #004e68;
    }
  }
`

const NewsletterText = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NewsletterCTA = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.large} {
    flex-direction: row;
  }
`

class About extends Component {
  render() {
    return (
      <Wrapper id="about">
        <Title>
          <h2>What we actually do</h2>
        </Title>
        <LayoutWrapper>
          <Text>
            <p>
              Established in 2018 in the city of Coventry. We are here to
              provide best service to our clients. Feel free to contact and ask
              questions. We're here to help!
            </p>
            <ImageWrapper>
              <img
                src={iconsAbout}
                alt="calculator clock credit card and calendar on A payroll and bookkeeping"
              />
            </ImageWrapper>
          </Text>
          <Newsletter>
            <NewsletterText>
              <h2>STAY UPDATED</h2>

              <h1>NEWSLETTER</h1>

              <p>
                We are trying to put an effort and get you to know of all
                important dates and changes! You will never forgot to upload
                your documents, submit your tax or get familiar with new
                regulations.
              </p>
            </NewsletterText>
            <NewsletterCTA>
              <Email placeholder="your@email.com" />
              <Button>START NOW</Button>
            </NewsletterCTA>
          </Newsletter>
        </LayoutWrapper>
      </Wrapper>
    )
  }
}

export default About
