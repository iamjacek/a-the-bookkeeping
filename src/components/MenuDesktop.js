import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";
import { Link as Linka } from "gatsby"
import { navigate } from '@reach/router';

const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	position: absolute;
	margin: 0 auto;
	width: 60%;
	height: 100%;
	top: -5%;
	right: 0;
	left: 20%;
	display: none;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;
	${({ theme }) => theme.media.medium} {
		display: flex;
		width: 50%;
		left: 30%;
	}
	${({ theme }) => theme.media.large} {
		width: 60%;
		left: 20%;
		top: 0;
	}
	${({ theme }) => theme.media.xlarge} {
	}
	${({ theme }) => theme.media.xxlarge} {
	}
`
const LinkMenu = styled.div`
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
	font-size: calc(${({ theme }) => theme.font.base}*1.065);
	color: #004f69;
	border: none;
	background-color: transparent;
	margin: 0 5px;
	cursor: pointer;
	:hover {
		color: #007ba3;
	}
	${({ theme }) => theme.media.large} {
		font-size: calc(${({ theme }) => theme.font.base}*1);
		margin: 0 10px;
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.45);
		margin: 0 15px;
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*2.995);
		margin: 0 20px;
	}
`

const MenuWrap = styled.div`
	display: flex;
	flex-direction: row;
`

const handleClick = () => {}

const MenuDesktop = () => (
	<Wrapper>
		<MenuWrap>
			<Link to='home'
				spy={true}
				smooth={false}
				offset={-150}
				duration={400}
			>
				<LinkMenu onClick={() => {
					navigate('/')
				}}> Home</LinkMenu>
			</Link>
			<Link to='service'
				spy={true}
				smooth={true}
				offset={0}
				duration={400}
			>
				<LinkMenu onClick={() => {
					navigate('/#service')
				}}>Service</LinkMenu>
			</Link>
			<Link to='about'
				spy={true}
				smooth={true}
				offset={-40}
				duration={400}
			>
				<LinkMenu onClick={() => {
					navigate('/#about')
				}}>About</LinkMenu>
			</Link>

			<Link to='/'
				spy={true}
				smooth={true}
				offset={0}
				duration={400}
			>
				<LinkMenu onClick={() => {
					navigate('/#contact')
				}}>Contact</LinkMenu>
			</Link>
		</MenuWrap>

		<MenuWrap>
			<LinkMenu onClick={handleClick}>
				Faq
			</LinkMenu>
			<Linka to='/blogposts'>
				<LinkMenu>Blog</LinkMenu>
			</Linka>
		</MenuWrap>
	</Wrapper>
)

export default MenuDesktop
