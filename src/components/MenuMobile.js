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
    justify-content: center;
    flex-direction: column;
   
`
const LinkMenu = styled.div`
    font-family: 'Play', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #004F69;
    border: none;
    background: #E4E4E4;
    border-radius: 5px;
    width: 220px;
    padding: 7px 20px;
    text-align: center;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(.7)')};
    transition: opacity .6s .3s ease-in, transform .3s .2s ease-in;
`

const LinkMenuSmallLeft = styled(LinkMenu)`
    font-size: 20px;
    margin: 0 5px;
    transform: translateX(${({ isOpen }) => isOpen ? ("0") : ("-100vw")});
    transition: transform .6s .1s ease-in;
`

const LinkMenuSmall = styled(LinkMenu)`
    font-size: 20px;
    margin: 0 5px;
    transform: translateX(${({ isOpen }) => isOpen ? ("0") : ("100vw")});
    transition: transform .6s .1s ease-in;
`

const MenuWrap = styled.div`
    width: 230px;
    height: ${({height}) => height};
    display: flex;
    flex-direction: ${({column}) => column ? 'column' : 'row'};
    align-items: center;
    justify-content: space-around;
`
const handleClick = () => {

}

const MenuMobile = ({ isOpen, ...props }) => (
    <Wrapper isOpen={isOpen}>
        <MenuWrap column height='250px'>
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
        </MenuWrap>


        <MenuWrap height='100px'>
            <LinkMenuSmallLeft
                isOpen={isOpen}
                href="#"
                onClick={handleClick}>
                Faq
        </LinkMenuSmallLeft>
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