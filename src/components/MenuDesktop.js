import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	position: absolute;
	margin: 0 auto;
	width: 60%;
	height: 100%;
	top: -10%;
	right: 0;
	left: 20%;
	display: none;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;
	${({ theme }) => theme.media.medium} {
		display: flex;
	}
	${({ theme }) => theme.media.large} {
	}
	${({ theme }) => theme.media.xlarge} {
	}
	${({ theme }) => theme.media.xxlarge} {
	}
    
`
const LinkMenu = styled.div`
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
	font-size: calc(${({ theme }) => theme.font.base}*1.125);
	color: #004f69;
	border: none;
	background-color: transparent;
	margin: 0 5px;
    cursor: pointer;
    :hover{
        color: #007ba3;
    }
	${({ theme }) => theme.media.large} {
		font-size: calc(${({ theme }) => theme.font.base}*1.25);
		margin: 0 10px;
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.7);
		margin: 0 15px;
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*2.8);
		margin: 0 20px;
	}
`

const MenuWrap = styled.div`
	display: flex;
	flex-direction: row;
`

const handleClick = () => {}

const MenuMobile = ({ isOpen, ...props }) => (
	<Wrapper isOpen={isOpen}>
		<MenuWrap>
			<LinkMenu isOpen={isOpen} href='#' onClick={handleClick}>
				Home
			</LinkMenu>
			<LinkMenu isOpen={isOpen} href='#' onClick={handleClick}>
				Service
			</LinkMenu>
			<LinkMenu isOpen={isOpen} href='#' onClick={handleClick}>
				About
			</LinkMenu>
			<LinkMenu isOpen={isOpen} href='#' onClick={handleClick}>
				Contact
			</LinkMenu>
		</MenuWrap>

		<MenuWrap>
			<LinkMenu isOpen={isOpen} href='#' onClick={handleClick}>
				Faq
			</LinkMenu>
			<LinkMenu isOpen={isOpen} href='#' onClick={handleClick}>
				Blog
			</LinkMenu>
		</MenuWrap>
	</Wrapper>
)

export default MenuMobile
