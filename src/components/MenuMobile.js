import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
	background-color: #004f69;
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
	color: #004f69;
	border: none;
	background: #e4e4e4;
	border-radius: 5px;
	width: 220px;
	padding: 7px 20px;
	text-align: center;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(.7)')};
	transition: opacity .6s .3s ease-in, transform .3s .2s ease-in;
    a:visited{
        color: #004f69;
    }
`

const LinkMenuSmallLeft = styled(LinkMenu)`
    font-size: 20px;
    margin: 0 5px;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100vw')});
    transition: transform .6s .1s ease-in;
`

const LinkMenuSmall = styled(LinkMenu)`
    font-size: 20px;
    margin: 0 5px;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100vw')});
    transition: transform .6s .1s ease-in;
`

const MenuWrap = styled.div`
	width: 230px;
	height: ${({ height }) => height};
	display: flex;
	flex-direction: ${({ column }) => (column ? 'column' : 'row')};
	align-items: center;
	justify-content: space-around;
`
const handleClick = () => {

}

const MenuMobile = ({ isOpen, ...props }) => (
	<Wrapper isOpen={isOpen}>
		<MenuWrap column height='250px'>
			<Link to='/'>
				<LinkMenu isOpen={isOpen} href='#' onClick={props.handleClick}>
					Home
				</LinkMenu>
			</Link>
			<Link to='/#service'>
                <LinkMenu isOpen={isOpen} href='#' onClick={props.handleClick}>
					Service
				</LinkMenu>
			</Link>
			<Link to='/#about'>
                <LinkMenu isOpen={isOpen} href='#' onClick={props.handleClick}>
					About
				</LinkMenu>
			</Link>
			<Link to='/#contact'>
				<LinkMenu isOpen={isOpen} href='#' onClick={props.handleClick}>
					Contact
				</LinkMenu>
			</Link>
		</MenuWrap>

		<MenuWrap height='100px'>
			
            <LinkMenuSmallLeft isOpen={isOpen} href='#' onClick={props.handleClick}>
                <Link to='/FAQ'>	Faq</Link>
				</LinkMenuSmallLeft>
			
		
            <LinkMenuSmall isOpen={isOpen} href='#' onClick={props.handleClick}>
                <Link to='/blogposts'>Blog	</Link>
				</LinkMenuSmall>
		
		</MenuWrap>
	</Wrapper>
)

export default MenuMobile
