import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
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

`

const BottomNav = styled.div`
	width: 100%;
	margin: 1.2em 0;
	padding: 0 5%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	color: #004f69;
	font-size: calc(${({ theme }) => theme.font.base}*.8);
	span {
		padding: 1em;
		cursor: pointer;
		text-align: center;
	}
	${({ theme }) => theme.media.medium} {
		font-size: calc(${({ theme }) => theme.font.base}*1);
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.4);
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*2.2);
	}
	a:visited {
		color: #004f69;
	}
`

const Card = styled.div`
	width: 90%;
	overflow: hidden;
	word-break: break-word;
`

const Header = styled.h1`
	margin-bottom: -1px;
	font-family: 'Ubuntu', sans-serif;
	border: 2px #707070 solid;
	font-size: calc(${({ theme }) => theme.font.header}*0.8);
	font-weight: 400;
	padding: .2em;
	margin-top: unset;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	${({ theme }) => theme.media.small} {
		font-size: calc(${({ theme }) => theme.font.header}*0.8*1.1);
	}
	${({ theme }) => theme.media.medium} {
	}
	${({ theme }) => theme.media.large} {
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.header}*0.8*1.5);
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.header}*0.8*3.4);
	}
`

const Answer = styled.p`
	margin: 0;

	font-family: 'Play', sans-serif;
	color: #fcfcfc;
	font: 1em sans-serif;
	font-size: calc(${({ theme }) => theme.font.base}*1);
	text-align: left;
	font-weight: 400;
	background: #004f69;
	border: 1px #707070 solid;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	max-height: ${({ open }) => open ? '0' : 'unset' };
	padding: ${({ open }) => open ? '0' : '1.4em 1em' };

	${({ theme }) => theme.media.small} {
		font-size: calc(${({ theme }) => theme.font.base}*1.1);
	}
	${({ theme }) => theme.media.medium} {
	}
	${({ theme }) => theme.media.large} {
		padding: ${({ open }) => open ? '0' : '1.6em 1.2em' };
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.5);
		padding: ${({ open }) => open ? '0' : '1.8em 1.4em' };
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*2.5);
		padding: ${({ open }) => open ? '0' : '2.6em 1.6em' };
	}
`

const Arrow = styled.span`
	:before{
		
	}
`

const FAQ = () => {
	const data = useStaticQuery(
		graphql`
			query allContentfulFaqElementQuery {
				allContentfulFaqElement {
					edges {
						node {
							id
							title
							body {
								body
							}
						}
					}
				}
			}
		`
	)

	const [open, setAcordionOpen] = useState(false)

	const handleClick = (e) => {
				setAcordionOpen(!open)
			}

	const faqElement = data.allContentfulFaqElement.edges
	console.log()
	return (
		<Layout>
			<Wrapper>
				<SEO title='Blog list' />
				<h1>{'FAQ'}</h1>

				{faqElement.map(({ node: question }) => (
					<Card key={question.id} onClick={handleClick}>
						<Header>{question.title}<Arrow /></Header>
						<Answer open={open}>{question.body.body}</Answer>
					</Card>
				))}

				<BottomNav>
					<span>
						<Link to='/'>Back to Homepage</Link>
					</span>
				</BottomNav>
			</Wrapper>
		</Layout>
	)
}

export default FAQ
