import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardWrapper from '../components/CardWrapper'
import { Link } from 'gatsby'

const Wrapper = styled.div`
	width: 100%;
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
		margin: 1em 0;
	}
`

const BlogSugestion = styled.div`
	margin: 1em auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Shortcuts = styled.div`
	a:visited {
		color: #004f69;
	}
	p:first-of-type{
		font-weight: 700;
		margin: 1em 0 1em 0;
	}
	p:nth-child(2){
		margin: 1em 0 .5em 0;
	}
	p:nth-child(3){
		margin: .5em 0 3em 0;
	}
`

const handleGoBack = () => {
	window.history.back()
}

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<Wrapper>
			<h1>NOT FOUND</h1>
			<p>The page you are looking does't exist... Use one of the following: </p>
			<BlogSugestion>
				<p>Read new post on our Blog</p>
				<CardWrapper lastPosts />
			</BlogSugestion>
			<Shortcuts>
				<p>Or use one of the following links below: </p>
				<p>
					<Link to='/'>Back to Homepage</Link>
				</p>
				<p>
					<a href='#' onClick={handleGoBack}>
						Just go back
					</a>
				</p>
			</Shortcuts>
		</Wrapper>
	</Layout>
)

export default NotFoundPage
