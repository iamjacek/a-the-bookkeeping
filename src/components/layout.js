/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'
import Header from "./Header"
import { gold } from "color-name"


//everything used here will affect every component including pages as well, Try to keep it tidy and all body and html amendmends put here
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Play:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Ubuntu:500&display=swap');
//font-family: 'Play', sans-serif;
//font-family: 'Ubuntu', sans-serif;

  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: sans-serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    border: 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;


const Wrapper = styled.div`
  background-color: #E4E4E4;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title}/>

        <GlobalStyle />
        <main>{children}</main>
        <footer style={{background: `gold`}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
