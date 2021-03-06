import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import img from '../images/header_mobile.svg'
import Hamburger from '../components/Hamburger'
import MenuMobile from '../components/MenuMobile'
import MenuDesktop from '../components/MenuDesktop'

const LogoWrapper = styled.div`
	width: 130px;
	margin: 0px;
	${({ theme }) => theme.media.medium} {
		width: 130px;
		margin: 5px;
	}
	${({ theme }) => theme.media.large} {
		width: 140px;
		margin: 5px;
	}
	${({ theme }) => theme.media.xlarge} {
		width: 200px;
		margin: 16px 35px;
	}
	${({ theme }) => theme.media.xxlarge} {
		width: 350px;
		margin: 52px 100px;
	}
`

const HeaderWrapper = styled.header`
	margin: 0;
	z-index: 99;
	width: 100%;
	position: relative;
	background-color: #e4e4e4;
	min-height: 15vh;
	background: #e4e4e4;
	background-image: url(${img});
	background-image: url(${img}), linear-gradient(#d5d9da, #e4e4e4 50%);

	background-repeat: no-repeat;
	${({ theme }) => theme.media.large} {
		background-size: contain;
		min-height: unset;
		height: 15vh;
	}
`

const HeaderContent = styled.header`
	margin: 0 auto;
	width: 100%;
	height: 100%;
	padding: 1.45rem 2rem;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
`

const Header = ({ siteTitle }) => {
	//react hook to store and switch isOpen state of the menu
	const [ isMenuOpen, setMenuState ] = useState(false)

	const toggleMenu = () => {
		setMenuState(!isMenuOpen)
	}

	return (
		<HeaderWrapper>
			<HeaderContent>
				<Link
					to='/'
					style={{
						color: `white`,
						textDecoration: `none`
					}}
				>
					<LogoWrapper>
						<Logo />
					</LogoWrapper>
				</Link>
				<Hamburger onClick={toggleMenu} isOpen={isMenuOpen} />
				<MenuMobile isOpen={isMenuOpen} handleClick={toggleMenu}/>
				<MenuDesktop />
			</HeaderContent>
		</HeaderWrapper>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ``
}

export default Header
