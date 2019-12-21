import React, { Component } from 'react'
import styled from 'styled-components'
import wallet from '../images/wallet.svg'
import img from '../images/bottom_home.svg'
import img2 from '../images/home_shape_bottom.svg'

const Outter = styled.div`
	position: relative;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: cover;
	
	background-color: #e4e4e4;
	width: 100%;
	min-height: 85vh;

	${({ theme }) => theme.media.medium} {
		background-image: url(${img2});
		
		
        display: flex;
        align-items: center;
	    justify-content: center;
        
	}
`
const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	background-color: transparent;
	min-height: 520px;
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin: 0 auto;
	height: 100%;
    ${({ theme }) => theme.media.small} {
        width: 325px;
	}
    ${({ theme }) => theme.media.medium} {
        flex-direction: row-reverse;
        width: 80%;
        transform: translateY(-12%);
	}
	${({ theme }) => theme.media.large} {
        
	}
	${({ theme }) => theme.media.xlarge} {
	}
	${({ theme }) => theme.media.xxlarge} {
	}
`
const ImageWrapper = styled.div`
	width: 250px;
	margin: 0 auto;
	${({ theme }) => theme.media.small} {
        width: 270px;
	}
	${({ theme }) => theme.media.medium} {
        width: 40%;
	}
	${({ theme }) => theme.media.large} {
	}
	${({ theme }) => theme.media.xlarge} {
	}
	${({ theme }) => theme.media.xxlarge} {
	}
`
const TextWrapper = styled.div`
	width: 290px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
    ${({ theme }) => theme.media.small} {
        width: 325px;
	}
	${({ theme }) => theme.media.medium} {
        width: 60%;
        p{
            width: 70%;
        }
	}
	${({ theme }) => theme.media.large} {
        p{
            width: 50%;
        }
	}
	${({ theme }) => theme.media.xlarge} {
	}
	${({ theme }) => theme.media.xxlarge} {
	}
`

const Img = styled.img`width: 100%;`

const Quote = styled.button`
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
	:hover {
		background-color: #007ba3;
	}
	${({ theme }) => theme.media.small} {
	}
	${({ theme }) => theme.media.medium} {
	}
	${({ theme }) => theme.media.large} {
       
	}
	${({ theme }) => theme.media.xlarge} {
        font-size: calc(${({ theme }) => theme.font.base}*1.5);
        width: 245px;
	    height: 43px;
	}
	${({ theme }) => theme.media.xxlarge} {
         font-size: calc(${({ theme }) => theme.font.base}*3);
        width: 525px;
	    height: 83px;
	}
`

class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Outter>
				<Wrapper>
					<ImageWrapper>
						<Img src={wallet} />
					</ImageWrapper>
					<TextWrapper>
						<h2>GET IT DONE WITH</h2>

						<h1>BOOKKEEPING</h1>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
						</p>

						<Quote>GET QUOTE</Quote>
					</TextWrapper>
				</Wrapper>
			</Outter>
		)
	}
}

export default Home
