import React, { Component } from "react"
import styled from "styled-components"
import star from "../images/star.svg"
import shapeServices from "../images/shape_services.svg"
import Button from "../components/Button"
import { Link } from "react-scroll"

const Wrapper = styled.div`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  position: relative;
  width: 100%;
  min-height: 100vh;
  ${({ theme }) => theme.media.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  ${({ theme }) => theme.media.large} {
    background-image: url(${shapeServices});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 0;
  ${({ theme }) => theme.media.medium} {
    flex-direction: row;
  }
  ${({ theme }) => theme.media.large} {
    flex-direction: row;
  }
  ${({ theme }) => theme.media.xlarge} {
    max-width: 1500px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    max-width: 2400px;
  }
`
const Title = styled.div`
  text-align: center;
  margin: 30px auto;

  h2 {
    font-weight: 800;
    display: inline-block;
  }
`
const Card = styled.div`
  position: relative;
  border: 2px solid #004e68;
  margin: 30px auto;
  padding: 20px;
  border-radius: 5px;
  width: ${({ special }) => (special ? "310px" : "310px")};
  height: ${({ special }) => (special ? "460px" : "460px")};
  background: ${({ special }) =>
    special
      ? "linear-gradient(#212C3D -50%, #004F69 60%)"
      : "linear-gradient(#e4e4e4, #d5d9db 15%)"};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${({ theme }) => theme.media.medium} {
    margin: 30px 10px;
  }
  ${({ theme }) => theme.media.xlarge} {
    margin: 30px 30px;
    width: ${({ special }) => (special ? "430px" : "430px")};
    height: ${({ special }) => (special ? "550px" : "550px")};
    border: 3px solid #004e68;
    padding: 25px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    margin: 30px 30px;
    width: ${({ special }) => (special ? "950px" : "950px")};
    height: ${({ special }) => (special ? "1100px" : "1100px")};
    border: 7px solid #004e68;
    border-radius: 7px;
    padding: 30px 65px;
  }
`

const CardTitle = styled.div`
  font-weight: 700;
  font-family: "Play", sans-serif;
  font-size: 35px;
  color: ${({ special }) => (special ? "#FCFCFC" : "#004e68")};
  text-align: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.media.xlarge} {
    font-size: 50px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: 100px;
  }
`

const CardDescription = styled.div`
  font-weight: 400;
  font-family: "Play", sans-serif;
  font-size: 14px;
  margin-bottom: 30px;
  color: ${({ special }) => (special ? "#FCFCFC" : "#004e68")};
  ${({ theme }) => theme.media.xlarge} {
    font-size: 16px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: 32px;
  }
`

const CardFeature = styled.div`
  margin-bottom: ${({ extramargin }) => (extramargin ? "30px" : "10px")};
  font-weight: 400;
  font-family: "Play", sans-serif;
  font-size: 14px;
  color: ${({ special }) => (special ? "#FCFCFC" : "#004e68")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.media.xlarge} {
    font-size: 16px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: 32px;
  }
`

const Description = styled.div``

const Value = styled.div``

const PriceTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`

const PriceDescription = styled.div`
  font-weight: 400;
  font-family: "Play", sans-serif;
  font-size: 14px;
  color: ${({ special }) => (special ? "#FCFCFC" : "#004e68")};
  ${({ theme }) => theme.media.xlarge} {
    font-size: 16px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: 32px;
  }
`

const PriceValue = styled.div`
  font-weight: 700;
  font-family: "Play", sans-serif;
  font-size: 34px;
  color: ${({ special }) => (special ? "#FCFCFC" : "#004e68")};
  ${({ theme }) => theme.media.xlarge} {
    font-size: 40px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: 80px;
  }
`

const PriceChange = styled(PriceValue)`
  font-size: 24px;
  transform: translateY(3px);
  ${({ theme }) => theme.media.xlarge} {
    font-size: 30px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: 60px;
  }
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Star = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(5px, -1px);
  ${({ theme }) => theme.media.xlarge} {
    transform: scale(1.4) translate(0px, 3px);
  }
  ${({ theme }) => theme.media.xxlarge} {
    transform: scale(3) translate(-7px, 9px);
  }
`

const Foot = styled.div`
  font-weight: 400;
  font-family: "Play", sans-serif;
  font-size: 14px;
  color: #004e68;
  text-align: center;
  margin: ${({ margin }) => margin};
  p:nth-child(1) {
    margin-bottom: 10px;
  }
`

const FootWrapper = styled.div``

class PreService extends Component {
  render() {
    return (
      <Wrapper id="service">
        <Title>
          <h2>Meet some of our plans</h2>
        </Title>
        <CardWrapper>
          <Card>
            <CardTitle>Individual</CardTitle>
            <CardDescription>Self-employed and LTD</CardDescription>
            <CardFeature>
              <Description>Number of employees</Description>
              <Value>1</Value>
            </CardFeature>
            <CardFeature>
              <Description>Bookkeeping</Description>
              <Value>monthly</Value>
            </CardFeature>
            <CardFeature extramargin>
              <Description>Filing documents</Description>
              <Value>yes</Value>
            </CardFeature>

            <PriceTag>
              <PriceDescription>Price from </PriceDescription>
              <PriceWrapper>
                <PriceValue>£30</PriceValue>
                <PriceChange>
                  <sup>.00</sup>
                </PriceChange>
              </PriceWrapper>
            </PriceTag>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
              style={{ textAlign: "center" }}
            >
              <Button>Ask for more</Button>
            </Link>
          </Card>

          <Card special>
            <Star src={star} />
            <CardTitle special>Small business</CardTitle>
            <CardDescription special>With employees</CardDescription>
            <CardFeature special>
              <Description>Number of employees</Description>
              <Value> up to 15</Value>
            </CardFeature>
            <CardFeature special>
              <Description>Bookkeeping</Description>
              <Value>monthly</Value>
            </CardFeature>
            <CardFeature special extramargin>
              <Description>Filing documents</Description>
              <Value>yes</Value>
            </CardFeature>

            <PriceTag>
              <PriceDescription special>Price from </PriceDescription>
              <PriceWrapper>
                <PriceValue special>£70</PriceValue>
                <PriceChange special>
                  <sup>.00</sup>
                </PriceChange>
              </PriceWrapper>
            </PriceTag>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
              style={{ textAlign: "center" }}
            >
              <Button special>Ask for more</Button>
            </Link>
          </Card>
        </CardWrapper>
        <FootWrapper>
          <Foot margin="50px auto 0 auto">
            <p>All prices are estimate and they may differ</p>
          </Foot>
          <Foot margin="0 auto 80px auto">
            <p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                <strong>Need more? Write to us!</strong>
              </Link>
            </p>
          </Foot>
        </FootWrapper>
      </Wrapper>
    )
  }
}

export default PreService
