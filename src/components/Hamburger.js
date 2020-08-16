import React from "react"
import styled from "styled-components"

const Wrapper = styled.button`
  padding: 16px 12px;
  border: none;
  background: none;
  position: relative;
  margin: ${({ isOpen }) => (isOpen ? "14px 10px" : "0")};
  z-index: 99;
  cursor: pointer;
  ${({ theme }) => theme.media.medium} {
    display: none;
  }
`

const InnerHamburger = styled.div`
  width: 27px;
  height: 3px;
  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "#004F69")};
  transition: ${({ isOpen }) =>
    isOpen
      ? "background-color .2s ease-out"
      : "background-color .2s .2s ease-out"};
  position: ${({ isOpen }) => (isOpen ? "fixed" : "relative")};
  right: ${({ isOpen }) => (isOpen ? "calc(2rem + 10px)" : "0")};
  border-radius: 50px;
  margin: 0;

  ::after,
  ::before {
    content: "";
    position: absolute;
    height: 3px;
    background-color: ${({ isOpen }) => (isOpen ? "#FCFCFC" : "#004F69")};
    border-radius: 50px;
  }
  ::before {
    top: -8px;
    transform: translateY(${({ isOpen }) => (isOpen ? "8px" : "0px")})
      rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0deg")});
    transition: transform 0.2s 0.2s ease-out, width 0.2s ease-out;
    border-radius: 9px;
    width: ${({ isOpen }) => (isOpen ? "30px" : "23px")};
    right: 0px;
  }
  ::after {
    top: 8px;
    transform: translateY(${({ isOpen }) => (isOpen ? "-8px" : "0px")})
      rotate(${({ isOpen }) => (isOpen ? "45deg" : "0deg")});
    transition: transform 0.2s 0.2s ease-out;
    width: 30px;
    right: 0px;
  }
`

const Hamburger = ({ isOpen, ...props }) => (
  <Wrapper {...props}>
    <InnerHamburger isOpen={isOpen} />
  </Wrapper>
)

export default Hamburger
