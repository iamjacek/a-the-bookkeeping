import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import img from '../images/bottom_home.svg'
import leftPlatform from '../images/left_platform.svg'
import rightPlatform from '../images/right_platform.svg'
import preserviceSVG from '../images/preservice-shape.svg'
import preserviceBIG from '../images/shape_preservice_big.svg'


const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: cover;
	background-position-y: 10px;

	background-color: #e4e4e4;
	width: 100%;
	min-height: 100vh;
	position: relative;
	overflow: hidden;
	${({ theme }) => theme.media.small} {
		background-image: url(${preserviceSVG});
		background-position-y: -5px;
	}
	${({ theme }) => theme.media.medium} {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	${({ theme }) => theme.media.large} {
		background-image: url(${preserviceBIG});
		background-position-y: 0;
	}
`
const Bookkeeping = styled.div`
position: relative;
	display: flex;
	flex-direction: column;
	height: 40%;

	${({ theme }) => theme.media.medium} {
		flex-direction: row-reverse;
	}
	${({ theme }) => theme.media.large} {
		
	}
`
const Payroll = styled.div`
position: relative;
	display: flex;
	flex-direction: column;
	height: 40%;

	${({ theme }) => theme.media.medium} {
		flex-direction: row;
	}
	${({ theme }) => theme.media.large} {
		
	}
`
const ImageWrapper = styled.div`
	position: relative;
	height: 30%;
	width: 100%;
	margin: 40px 0;
	img {
		width: 170%;
		transform: ${({ bottom }) => (bottom ? 'translateX(-50%)' : 'translateX(20%)')};
	}
	overflow: hidden;
	${({ theme }) => theme.media.small} {
		img {
			width: 120%;
			transform: ${({ bottom }) => (bottom ? 'translateX(-40%)' : 'translateX(20%)')};
		}
	}

	${({ theme }) => theme.media.medium} {
		position: absolute;
		top: 40%;
		left: ${({ bottom }) => (bottom ? '-45%' : '0')};
		right: ${({ bottom }) => (bottom ? '0' : '-45%')};
		img {
			transform: ${({ bottom }) => (bottom ? 'translateX(-40%)' : 'translateX(60%)')};
		}
	}
	${({ theme }) => theme.media.large} {
		transform: translateY(40%);
		position: relative;
		width: 50%;

		left: ${({ bottom }) => (bottom ? '0' : '0')};
		right: ${({ bottom }) => (bottom ? '0' : '0')};
		img {
			width: 200%;
			transform: ${({ bottom }) => (bottom ? 'translateX(-50%)' : 'translateX(0)')};
		}
	}
`
const TextWrapper = styled.div`
	width: 290px;
	margin: 0 auto;
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	${({ theme }) => theme.media.small} {
		width: 325px;
	}
	${({ theme }) => theme.media.medium} {
		width: 60%;
		p {
			width: 60%;
		}
	}
	${({ theme }) => theme.media.large} {
		
		width: 50%;
		p {
			width: 70%;
		}
	}
	${({ theme }) => theme.media.xlarge} {
	}
	${({ theme }) => theme.media.xxlarge} {
	}
`
const Button = styled.button`
	position: relative;
	font-family: 'Ubuntu', sans-serif;
	font-size: calc(${({ theme }) => theme.font.base}*1);
	width: 175px;
	height: 30px;
	border-radius: 32px;
	border: none;
	background-color: #004f69;
	color: #fcfcfc;
	margin: 10px auto;
	transition: background-color .2s ease-out;
	cursor: pointer;
	text-align: center;
	:hover {
		background-color: #007ba3;
	}
	${({ theme }) => theme.media.small} {
		width: 205px;
		height: 35px;
	}
	${({ theme }) => theme.media.medium} {
	}
	${({ theme }) => theme.media.large} {
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.5);
		width: 285px;
		height: 45px;
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*3);
		width: 625px;
		height: 88px;
	}
`

class PreService extends Component {
	render() {
		return (
			<Wrapper>
				<Bookkeeping>
					<ImageWrapper>
						<img alt='money' src={rightPlatform} />
					</ImageWrapper>
					<TextWrapper>
						<h2>GET IT DONE WITH</h2>

						<h1>BOOKKEEPING</h1>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</p>

						<Link to='/bookkeeping'>
							<Button>BOOKKEEPING</Button>
						</Link>
					</TextWrapper>
				</Bookkeeping>
				<Payroll>
					<ImageWrapper bottom>
						<img alt='credit card' src={leftPlatform} />
					</ImageWrapper>
					<TextWrapper>
						<h2>GET IT DONE WITH</h2>

						<h1>BOOKKEEPING</h1>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<Link to='/payroll'>
							<Button>TO PAYROLL</Button>
							</Link>
					</TextWrapper>
				</Payroll>
			</Wrapper>
		)
	}
}

export default PreService
