import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from 'styled-components'
import Logo from './Logo'
import img from '../images/header_mobile.svg'
import Hamburger from '../components/Hamburger'
import MenuMobile from '../components/MenuMobile'

const LogoWrapper = styled.div`
  width: 130px;
  height: 40px;
`

const HeaderWrapper = styled.header`
  margin: 0;
  z-index: 99;
  width: 100%;
  position: relative;
  background-color: #E4E4E4;
  min-height: 15vh;
  height: 100%;
`

const HeaderContent = styled.header`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 1.45rem 2rem;
  background-image:  url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
	align-items: center;
	justify-content: space-between;
`



const Header = ({ siteTitle }) => {
  //react hook to store and switch isOpen state of the menu
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
    console.log('change')
  }


  return (
    <HeaderWrapper>
      <HeaderContent>
        
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            
          </Link>
          <Hamburger onClick={toggleMenu} isOpen={isMenuOpen} />
          <MenuMobile isOpen={isMenuOpen}/>
      </HeaderContent>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
