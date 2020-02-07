import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import TagContainer from '../components/TagContainer'
import Button from '../components/Button'
import ButtonAlt from '../components/ButtonAlt'

import cal from '../images/calendar.svg'

const Wrapper = styled.div`
	width: 90%;
	margin: 2.5em 5%;
	margin-top: 1em;
	background-color: #d5d9db;
	overflow: hidden;
	border-radius: 5px;
	padding: .5em;
	${({ theme }) => theme.media.small} {
		width: 70%;
		margin: 2.5em 15%;
		margin-top: 1em;
		padding: 1em;
		padding-top: .5em;
	}
	${({ theme }) => theme.media.large} {
		width: 70%;
		margin: 4em 15%;
		padding: 3em;
		padding-top: 1em;
	}
	${({ theme }) => theme.media.xxlarge} {
		width: 60%;
		margin: 9em 20%;
		padding: 7em;
		padding-top: 2em;
	}
`

const Head = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 1em 0;
	${({ theme }) => theme.media.medium} {
		justify-content: flex-start;
		margin: 1em 1em;
	}
	${({ theme }) => theme.media.xlarge} {
		margin-bottom: 2em;
	}
	${({ theme }) => theme.media.xxlarge} {
		margin: 2em 1em;
		margin-bottom: 4em;
	}
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
	a:visited {
		color: #004f69;
	}
	${({ theme }) => theme.media.xlarge} {
		width: 60px;
		height: 65px;
		font-size: calc(${({ theme }) => theme.font.base}*1.3);
		padding-bottom: 4px;
	}
	${({ theme }) => theme.media.xxlarge} {
		width: 130px;
		height: 135px;
		font-size: calc(${({ theme }) => theme.font.base}*2.8);
	}
`

const Title = styled.div`
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.header}*0.55);
	width: calc(90% - (1em + 40px));
	text-align: center;
	transform: translateX(-.5em);
	text-transform: uppercase;
	a:visited {
		color: #004f69;
	}
	${({ theme }) => theme.media.medium} {
		text-align: left;
		transform: translateX(0);
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.header}*.8);
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.header}*1.6);
	}
`

const DateTag = styled.div`
	margin: 0;
	padding: 0;
	font-weight: 400;
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.base}*0.7);
	${({ theme }) => theme.media.large} {
		margin: 0 .5em;
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.1);
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*2.6);
	}
	span {
		color: #919191;
	}
`

const Description = styled.div`
	margin: 0.5em .5em;
	width: calc(100% - 1em);
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	${({ theme }) => theme.media.large} {
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}
	${({ theme }) => theme.media.xxlarge} {
		margin: 3em .5em;
	}
`

const Editor = styled.div`
	font-weight: 400;
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.base}*0.7);
	${({ theme }) => theme.media.large} {
		margin: 0 .5em;
		margin-left: 0;
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.1);
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*2.6);
	}
	span {
		color: #919191;
	}
`

const PictureContainer = styled.div`
	width: 100%;
	margin: 1em .5em;
	height: 150px;
	overflow: hidden;
	img {
		width: calc(100% - 1em);
		margin: -40% 0 0 0;
	}
	${({ theme }) => theme.media.large} {
		height: 250px;
	}
	${({ theme }) => theme.media.xlarge} {
		height: 300px;
	}
	${({ theme }) => theme.media.xxlarge} {
		height: 600px;
	}
`

const BodyText = styled.p`
	width: calc(100% - 1em);
	margin: 2em .5em;
	text-align: left;
`

const BottomNav = styled.div`
	cursor: pointer;
	width: 100%;
	margin: 2em 0;
	padding: 0 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-weight: 400;
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.base}*.8);
	span {
		padding: .8em;
	}
	${({ theme }) => theme.media.medium} {
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
		padding: 0;
		margin:3em 0 0 0;
		font-size: calc(${({ theme }) => theme.font.base}*.8);
	}

	a:visited {
		color: #004f69;
	}
`

const TagContainerWrap = styled.div`
	width: calc(100% - 1em);
	margin: 0 auto;
`

const Category = styled(Editor)`	${({ theme }) => theme.media.large} { margin: 0 .5em;}`

//get month and day from the publish date and change it dynamicaly inside of calendar icon
const getMonth = date => {
	switch (date.slice(5, 7)) {
		case '01':
			return 'Jan'
		case '02':
			return 'Feb'
		case '03':
			return 'Mar'
		case '04':
			return 'Apr'
		case '05':
			return 'May'
		case '06':
			return 'Jun'
		case '07':
			return 'Jul'
		case '08':
			return 'Aug'
		case '09':
			return 'Sep'
		case '10':
			return 'Oct'
		case '11':
			return 'Nov'
		case '12':
			return 'Dec'
	}
}

const getDay = date => {
	return date.slice(8, 10)
}

const scrollTop = () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

const BlogPost = ({ data }) => {
	const { title, body, image, tags, date } = data.contentfulBlogPost
	return (
		<Layout>
			<SEO title={title} />
			<Wrapper>
				<Head>
					<Calendar>
						{`
${getMonth(date)}
${getDay(date)}`}
					</Calendar>
					<Title>
						<h3>{title}</h3>
					</Title>
				</Head>

				<PictureContainer>
					<img alt='post' src={image.file.url} />
				</PictureContainer>

				<Description>
					<Editor>
						<span>By</span>
						{` Anna`}
					</Editor>
					<DateTag>
						<span>Posted</span>
						{` ${date.slice(0, 10)} ${date.slice(11, 16)}`}
					</DateTag>
					<Category>
						<span>in</span>
						{` Company`}
					</Category>
				</Description>

				<BodyText>{body.body}</BodyText>
				<TagContainerWrap>
					<TagContainer tags={tags} />
				</TagContainerWrap>

				<BottomNav>
					<span onClick={scrollTop}><ButtonAlt>Back to Top</ButtonAlt></span>
					<span>
						<Link to='/blogposts'>
							<Button>View more posts</Button>
						</Link>
					</span>

					<span>
						<Link to='/'>	<ButtonAlt>Back to Home	</ButtonAlt></Link>
					</span>
				</BottomNav>
			</Wrapper>
		</Layout>
	)
}
export default BlogPost

export const pageQuery = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
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
`
