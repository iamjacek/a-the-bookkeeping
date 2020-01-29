import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardWrapper from '../components/CardWrapper'



const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	background-color: #e4e4e4;
	overflow: auto;
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${({ theme }) => theme.media.large} {
		min-height: 75vh;
	}
	h1 {
		margin: .3em 0 .8em 0;
	}
`


const BottomNav = styled.div`
	width: 100%;
	margin: 1.2em 0;
	padding: 0 5%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-weight: 400;
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.base}*.8);
	span {
		padding: 1em;
		cursor: pointer;
	}
	${({ theme }) => theme.media.medium} {
		font-size: calc(${({ theme }) => theme.font.base}*1);
	}
	${({ theme }) => theme.media.large} {
		display: none;
	}
	a:visited{
		color: #004f69;
	}
`

const BlogPosts = ({ data }) => {
	const scrollTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}


	return (
		<Layout>
			<Wrapper>
				<SEO title='Blog posts' />
				<h1>{'Blogposts'}</h1>
				<CardWrapper /> 
					
				
				<BottomNav>
					<span onClick={scrollTop}>Back to Top</span>
					<span>
						<Link to='/'>Back to Homepage</Link>
					</span>
				</BottomNav>
			</Wrapper>
		</Layout>
	)
}

export default BlogPosts



