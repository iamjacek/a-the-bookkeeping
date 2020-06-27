import React from "react"
import styled from "styled-components"
import linkedin from "../images/linkedin.svg"
import fb from "../images/fb.svg"
import chat from "../images/chat.svg"
import { Link } from "gatsby"
import { Link as LinkSmooth } from "react-scroll"
import { navigate } from "@reach/router"

const Wrapper = styled.footer`
  background-color: #d5d9da;
  padding: 1em;
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.base}*0.8);
  display: flex;
  flex-direction: row;
  min-height: 5vh;
  a:visited {
    color: #004f69;
  }
  a:hover {
    color: #004f69;
    text-decoration: underline;
  }
  ${({ theme }) => theme.media.large} {
    height: 10vh;
    flex-direction: row-reverse;
  }
  p {
    text-align: left;
    margin-bottom: 0.3em;
    a:visited {
      color: #004f69;
    }
    a:hover {
      color: #004f69;
      text-decoration: underline;
    }
  }
  h3 {
    font-size: calc(${({ theme }) => theme.font.base}*0.8);
    font-weight: 400;
    margin-bottom: 0;
    ${({ theme }) => theme.media.small} {
      font-size: calc(${({ theme }) => theme.font.base}*0.9);
    }

    ${({ theme }) => theme.media.xlarge} {
      font-size: calc(${({ theme }) => theme.font.base}*1.3);
    }
    ${({ theme }) => theme.media.xxlarge} {
      font-size: calc(${({ theme }) => theme.font.base}*2.3);
    }
  }
`

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  ${({ theme }) => theme.media.small} {
    flex-direction: row;
    align-items: stretch;
    p:nth-child(3) {
      transform: translateY(10px);
    }
  }
  span {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  ${({ theme }) => theme.media.large} {
    span {
      display: none;
    }
    width: 20%;
  }
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  ${({ theme }) => theme.media.small} {
    flex-direction: row;
  }
  p {
    margin: 0 0.5em;
  }
  ${({ theme }) => theme.media.large} {
    align-items: center;
    width: 80%;
    justify-content: space-around;
  }
  a {
    color: #004f69;
  }
  a:visited {
    color: #004f69;
  }
  a:hover {
    color: #004f69;
    text-decoration: underline;
  }
`

const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    width: 1.8em;
    margin: 0.3em;
    ${({ theme }) => theme.media.xlarge} {
      width: 2.2em;
    }
    ${({ theme }) => theme.media.xxlarge} {
      width: 3.8em;
      margin: 0.6em;
    }
  }
`

const Footer = () => (
  <Wrapper id="contact">
    <Left>
      <span>
        <h3>Let's colaborate</h3>
        <p>
          <strong>payrol112@payrol.co.uk</strong>
        </p>
      </span>
      <span>
        <h3>Phone</h3>
        <p>
          <strong>070072772</strong>
        </p>
      </span>

      <Social>
        <img alt="facebook" src={fb} />
        <img alt="linked in" src={linkedin} />
        <img alt="chat" src={chat} />
      </Social>
    </Left>
    <Right>
      <p>
        A Payroll & Bookkeeping © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.jacekwitucki.com">Jacek Witucki</a>
        {` `}
      </p>
      <p>
        <Link to="./privacy">Privacy Policy</Link> | <Link to="./FAQ">FAQ</Link>{" "}
        |{" "}
        <LinkSmooth
          to="service"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          <span
            onClick={() => {
              navigate("/#service")
            }}
          >
            Service
          </span>
        </LinkSmooth>{" "}
        | <Link to="./#contact">Contact</Link>
      </p>
    </Right>
  </Wrapper>
)

export default Footer
