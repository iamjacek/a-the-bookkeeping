import React, { Component } from "react"
import styled from "styled-components"

import { Link } from "react-scroll"

import wallet from "../images/wallet.svg"
import img from "../images/bottom_home.svg"
import img2 from "../images/home_shape_bottom.svg"
import Button from "../components/Button"

const Outter = styled.div`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 10px;
  background-color: #e4e4e4;
  width: 100%;
  min-height: 85vh;

  ${({ theme }) => theme.media.medium} {
    background-image: url(${img2});

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Wrapper = styled.div`
  background-color: transparent;
  min-height: 520px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  height: 100%;
  ${({ theme }) => theme.media.small} {
    width: 325px;
  }
  ${({ theme }) => theme.media.medium} {
    flex-direction: row-reverse;
    width: 80%;
    transform: translateY(-12%);
  }
  ${({ theme }) => theme.media.large} {
  }
  ${({ theme }) => theme.media.xlarge} {
  }
  ${({ theme }) => theme.media.xxlarge} {
  }
`
const ImageWrapper = styled.div`
  width: 250px;
  margin: 0 auto;
  ${({ theme }) => theme.media.small} {
    width: 270px;
  }
  ${({ theme }) => theme.media.medium} {
    width: 55%;
  }
  ${({ theme }) => theme.media.large} {
    width: 40%;
  }
  ${({ theme }) => theme.media.xlarge} {
  }
  ${({ theme }) => theme.media.xxlarge} {
  }
`
const TextWrapper = styled.div`
  width: 290px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${({ theme }) => theme.media.small} {
    width: 325px;
  }
  ${({ theme }) => theme.media.medium} {
    width: 60%;
    p {
      width: 70%;
    }
  }
  ${({ theme }) => theme.media.large} {
    p {
      width: 50%;
    }
  }
  ${({ theme }) => theme.media.xlarge} {
  }
  ${({ theme }) => theme.media.xxlarge} {
  }
`

const Img = styled.img`
  width: 100%;
`

class Home extends Component {
  render() {
    return (
      <Outter id="home">
        <Wrapper>
          <ImageWrapper>
            <Img src={wallet} />
          </ImageWrapper>
          <TextWrapper>
            <h2>GET IT DONE WITH</h2>

            <h1>BOOKKEEPING</h1>

            <p>
              Bookkeeping is the start of an accounting process which allows you
              to produce useful accounting information about your sales,
              expenses, assets, liabilities and equity.
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              <Button>GET QUOTE</Button>
            </Link>
          </TextWrapper>
        </Wrapper>
      </Outter>
    )
  }
}

export default Home
