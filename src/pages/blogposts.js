import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import cal from '../images/calendar.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'

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

const Title = styled.div`
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.header}*0.55);
	width: calc(100% - (1em + 40px));
`

const Body = styled.p`
	text-align: left;
	margin: 1em 0;
`

const ReadMore = styled.p`
	font-weight: 700;
	color: #004f69;
	text-align: left;
	margin: 1em 0;
`

const Card = styled.div`
	width: 85%;
	padding: 1.5em;
	background-color: #d5d9db;
	border-radius: 5px;
	margin: 1em auto;
`

const Calendar = styled.div`
	margin-right: 1em;
	background-image: url(${cal});
	background-size: cover;
	width: 40px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: pre-line;
	text-align: center;
	padding-bottom: 4px;
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.base}*0.8);
	line-height: calc(${({ theme }) => theme.font.base}*0.9);
	font-weight: 800;
	transform: translateY(-5px);
`

const Head = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: 0 0.2em;
	transform: translateY(-0.5em);
`

const TagContainer = styled.span`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

const TagElement = styled.div`
	background-color: #004f69;
	padding: 0.25em 0.5em;
	margin: 0.2em;
	border-radius: 2px;
	font-weight: 400;
	color: #e4e4e4;
	text-transform: uppercase;
	font-size: calc(${({ theme }) => theme.font.base}*0.7);
`

const Date = styled.div`
	margin-top: 0.4em;
	margin-bottom: -0.6em;
	padding: 0;
	font-weight: 400;
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.base}*0.7);
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
	span{
		padding: 1em;
	}
`

const scrollTop = () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}


//get month and day from the publish date and change it dynamicaly inside of calendar icon
const getMonth = (date) => {
	switch (date.slice(5, 7)) {
		case '01': return 'Jan';
		case '02': return 'Feb';
		case '03': return 'Mar';
		case '04': return 'Apr';
		case '05': return 'May';
		case '06': return 'Jun';
		case '07': return 'Jul';
		case '08': return 'Aug';
		case '09': return 'Sep';
		case '10': return 'Oct';
		case '11': return 'Nov';
		case '12': return 'Dec';
	}
}

const getDay = (date) => {
	return date.slice(8, 10)
	}


const BlogPosts = ({ data }) => {
	const blogPosts = data.allContentfulBlogPost.edges

	return (
		<Layout>
			<Wrapper>
				<SEO title='Blog posts' />
				<h1>{'Blogposts'}</h1>
				<div>
					{blogPosts.map(({ node: post }) => (
						<Card key={post.id}>
							<Link to={`/blogpost/${post.slug}`}>
								<Head>
									<Calendar>{`
${getMonth(post.date)}
${getDay(post.date)}`}</Calendar>
									<Title>
										<h3>{post.title.toUpperCase()}</h3>
									</Title>
								</Head>
								<Date>{`${post.date.slice(0, 10)} ${post.date.slice(11, 16)}`}</Date>
								<Body>{post.body.body.slice(0, 140)}</Body>
								<ReadMore>Read more...</ReadMore>
								<TagContainer>
									{post.tags.map(tag => (
										<TagElement key={Math.random().toString(36).substr(2, 11)}>{tag}</TagElement>
									))}
								</TagContainer>
							</Link>
						</Card>
					))}
				</div>
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

export const query = graphql`
	query BlogPostsPageQuery {
		allContentfulBlogPost(limit: 1000) {
			edges {
				node {
					id
					title
					slug
					date
					body {
						body
					}
					image {
						file {
							url
						}
					}
					tags
				}
			}
		}
	}
`
