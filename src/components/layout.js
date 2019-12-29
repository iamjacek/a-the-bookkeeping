import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './Header'
import { theme } from './theme'

//everything used here will affect every component including pages as well, Try to keep it tidy and all body and html amendmends put here
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Play:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Ubuntu:500&display=swap');

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
     h2, h1, p{
        font-family: 'Play', sans-serif;
        color: #004F69;
    }
    h1{
        margin-top: -7px;
        margin-bottom: 20px;
        font-size: calc(${({ theme }) => theme.font.header}*1.22);
        font-weight: 800;
        background: #D5D9DA;
        padding: 0.2em;
        border-radius: 5px;
       ${({ theme }) => theme.media.small} {
          font-size: calc(${({ theme }) => theme.font.header}*1.22*1.1);
	      }
        ${({ theme }) => theme.media.medium} {
         
	      }
        ${({ theme }) => theme.media.large} {
         
	      }
        ${({ theme }) => theme.media.xlarge} {
         font-size: calc(${({ theme }) => theme.font.header}*1.22*1.5);
	      }
        ${({ theme }) => theme.media.xxlarge} {
          font-size: calc(${({ theme }) => theme.font.header}*1.22*3.4);
	      }
    }
    h2{
        margin-bottom: 0;
        font-size: calc(${({ theme }) => theme.font.header}*1);
        font-weight: 400;
        background: #D5D9DA;
        padding: 0.2em;
        border-radius: 5px;
         ${({ theme }) => theme.media.small} {
          font-size: calc(${({ theme }) => theme.font.header}*1.1);
	      }
        ${({ theme }) => theme.media.medium} {
         
	      }
        ${({ theme }) => theme.media.large} {
         
	      }
        ${({ theme }) => theme.media.xlarge} {
         font-size: calc(${({ theme }) => theme.font.header}*1.5);
	      }
        ${({ theme }) => theme.media.xxlarge} {
          font-size: calc(${({ theme }) => theme.font.header}*3.4);
	      }
       
    }
    p{
        font-size: calc(${({ theme }) => theme.font.base}*1);
        margin-top: 0;
        text-align: center;
        font-weight: 400;
        margin-bottom: 40px;
        ${({ theme }) => theme.media.small} {
          font-size: calc(${({ theme }) => theme.font.base}*1.1);
	      }
        ${({ theme }) => theme.media.medium} {
       
	      }
        ${({ theme }) => theme.media.large} {
         
	      }
        ${({ theme }) => theme.media.xlarge} {
          font-size: calc(${({ theme }) => theme.font.base}*1.5);
	      }
        ${({ theme }) => theme.media.xxlarge} {
          font-size: calc(${({ theme }) => theme.font.base}*2.5);
	      }
         
    }
`

const Wrapper = styled.div`background-color: #e4e4e4;`

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
		<ThemeProvider theme={theme}>
			<Wrapper>
				<Header siteTitle={data.site.siteMetadata.title} />

				<GlobalStyle />
				<main>{children}</main>
				<footer style={{ background: `gold` }}>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href='https://www.gatsbyjs.org'>Gatsby</a>
				</footer>
			</Wrapper>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
