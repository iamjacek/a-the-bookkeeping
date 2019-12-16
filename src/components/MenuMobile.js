import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #004F69;
    transform: translate(${({ isOpen }) => (isOpen ? '0% ,0%' : '100%, -100%')});
    transition: transform .2s ease-out;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`
const LinkMenu = styled.div`
    font-family: 'Play', sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: #FCFCFC;
`

const LinkMenuSmall = styled(LinkMenu)`
    font-size: 22px;
`

const MenuWrap = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
const handleClick = () => {

}

const MenuMobile = ({ isOpen, ...props }) => (
    <Wrapper isOpen={isOpen}>
        <LinkMenu
            isOpen={isOpen}
            href="#"
            onClick={handleClick}>
            Home
        </LinkMenu>
        <LinkMenu
            isOpen={isOpen}
            href="#"
            onClick={handleClick}>
            Service
        </LinkMenu>
        <LinkMenu
            isOpen={isOpen}
            href="#"
            onClick={handleClick}>
            About
        </LinkMenu>
        <LinkMenu
            isOpen={isOpen}
            href="#"
            onClick={handleClick}>
            Contact
        </LinkMenu>

        <MenuWrap>
            <LinkMenuSmall
                isOpen={isOpen}
                href="#"
                onClick={handleClick}>
                Faq
        </LinkMenuSmall>
            <LinkMenuSmall
                isOpen={isOpen}
                href="#"
                onClick={handleClick}>
                Blog
        </LinkMenuSmall>
        </MenuWrap>
    </Wrapper>
)

export default MenuMobile 