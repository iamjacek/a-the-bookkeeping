import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardWrapper from '../components/CardWrapper'
import { Link } from 'gatsby'
import img from '../images/emot.svg'

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
	flex-direction: row;
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
	p:first-of-type {
		font-weight: 700;
		margin: 1em 0 1em 0;
	}
	p:nth-child(2) {
		margin: 1em 0 .5em 0;
	}
	p:nth-child(3) {
		margin: .5em 0 3em 0;
	}
`

const ContentWrapper = styled(Wrapper)`
flex-direction: column;
${({ theme }) => theme.media.large} {
		width: 80%;
	}
`

const FaceWrapper = styled.div`
	display: none;
	${({ theme }) => theme.media.large} {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 240px;
		height: 280px;
		margin-left: 7%;
	}
	${({ theme }) => theme.media.xxlarge} {transform: scale(1.7)}
`

const Eye = styled.div`
	position: relative;
	display: inline-block;
	border-radius: 50%;
	height: 30px;
	width: 30px;
	background: #f4f4f4;
	/* transform: translate(70px, 51px); */
	margin: 60px 0 0 81px;
	&:last-child {
		margin-left: 21px;
	}
	&:after {
		position: absolute;
		bottom: 17px;
		right: 10px;
		width: 12px;
		height: 12px;
		background: #000;
		border-radius: 50%;
		content: " ";
	}
`

const Face = styled.div`
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: cover;
	width: 240px;
	height: 180px;

`

const handleGoBack = () => {
	window.history.back()
}

const eyeMove = e => {
	//eyes follow cursor

	//before we check is the page 404 error page
	if (window.location.href.includes('404')) {
		console.log(window.location.href)
		const eye = document.querySelectorAll('.eye')
		let x = eye[1].offsetLeft + eye[1].offsetWidth / 2
		let y = eye[1].offsetTop + eye[1].offsetWidth / 2
		const pX = e.pageX
		const pY = e.pageY
		let rad = Math.atan2(pX - x, pY - y)
		let rot = rad * (180 / Math.PI) * -1 + 180
		eye[0].style.transform = 'rotate(' + rot + 'deg)'
		eye[1].style.transform = 'rotate(' + rot + 'deg)'
	}

}

const NotFoundPage = () => {
	useEffect(() => {
		document.body.addEventListener('mousemove', eyeMove)
	})
	return (
		<Layout>
			<SEO title='404: Not found' />
			<Wrapper id='notFoundPage'>
				<FaceWrapper>
					<Face>
						<Eye className='eye' />
						<Eye className='eye' />
					</Face>
				</FaceWrapper>
				<ContentWrapper>
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
				</ContentWrapper>
			</Wrapper>
		</Layout>
	)
}

export default NotFoundPage
