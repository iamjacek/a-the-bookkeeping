import React, { Component } from 'react'
import styled from 'styled-components'
import star from '../images/star.svg'
import shapeServices from '../images/shape_services.svg'

const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	position: relative;
	width: 100%;
	min-height: 100vh;
	${({ theme }) => theme.media.large} {
		background-image: url(${shapeServices});
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	${({ theme }) => theme.media.medium} {
		flex-direction: row;
	}
	${({ theme }) => theme.media.xlarge} {
		max-width: 1500px;
	}
	${({ theme }) => theme.media.xxlarge} {
		max-width: 2400px;
	}
`
const Title = styled.div`
	text-align: center;
	width: 100%;
	margin: 30px auto;
	h2 {
		font-weight: 800;
	}
`
const Card = styled.div`
	position: relative;
	border: 2px solid #004e68;
	margin: 30px auto;
	padding: 20px;
	border-radius: 5px;
	width: ${({ special }) => (special ? '310px' : '280px')};
	height: ${({ special }) => (special ? '460px' : '440px')};
	background: ${({ special }) =>
		special ? 'linear-gradient(#212C3D -50%, #004F69 60%)' : 'linear-gradient(#e4e4e4, #d5d9db 15%)'};
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	${({ theme }) => theme.media.large} {
		margin: 30px 10px;
	}
	${({ theme }) => theme.media.xlarge} {
		margin: 30px 30px;
		width: ${({ special }) => (special ? '360px' : '330px')};
		height: ${({ special }) => (special ? '500px' : '480px')};
		border: 3px solid #004e68;
	}
	${({ theme }) => theme.media.xxlarge} {
		margin: 30px 30px;
		width: ${({ special }) => (special ? '860px' : '730px')};
		height: ${({ special }) => (special ? '1000px' : '880px')};
		border: 7px solid #004e68;
		border-radius: 7px;
	}
`

const CardTitle = styled.div`
	font-weight: 700;
	font-family: 'Play', sans-serif;
	font-size: 35px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
	text-align: center;
	margin-bottom: 20px;
	${({ theme }) => theme.media.xlarge} {
		font-size: 50px;
	}
    ${({ theme }) => theme.media.xxlarge} {
		font-size: 100px;
	}
`

const CardDescription = styled.div`
	font-weight: 400;
	font-family: 'Play', sans-serif;
	font-size: 14px;
	margin-bottom: 30px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
    ${({ theme }) => theme.media.xlarge} {
		font-size: 16px;
	}
    ${({ theme }) => theme.media.xxlarge} {
		font-size: 32px;
	}
`

const CardFeature = styled.div`
	font-weight: 400;
	font-family: 'Play', sans-serif;
	font-size: 14px;
	margin-bottom: 10px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	&:nth-child(6) {
		margin-bottom: 30px;
	}
    ${({ theme }) => theme.media.xlarge} {
		font-size: 16px;
	}
    ${({ theme }) => theme.media.xxlarge} {
		font-size: 32px;
	}
`

const Description = styled.div``

const Value = styled.div``

const PriceTag = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 10px;
`

const PriceDescription = styled.div`
	font-weight: 400;
	font-family: 'Play', sans-serif;
	font-size: 14px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
    ${({ theme }) => theme.media.xlarge} {
		font-size: 16px;
	}
    ${({ theme }) => theme.media.xxlarge} {
		font-size: 32px;
	}
`

const PriceValue = styled.div`
	font-weight: 700;
	font-family: 'Play', sans-serif;
	font-size: 34px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
    ${({ theme }) => theme.media.xlarge} {
		font-size: 40px;
	}
    ${({ theme }) => theme.media.xxlarge} {
		font-size: 80px;
	}
`

const PriceChange = styled(PriceValue)`
    font-size: 24px;
    transform: translateY(3px);
    ${({ theme }) => theme.media.xlarge} {
		font-size: 30px;
	}
    ${({ theme }) => theme.media.xxlarge} {
		font-size: 60px;
	}
`

const PriceWrapper = styled.div`
	display: flex;
	flex-direction: row;
`

const OrderButton = styled.button`
	position: relative;
	font-family: 'Ubuntu', sans-serif;
	font-size: calc(${({ theme }) => theme.font.base}*1);
	width: 175px;
	height: 30px;
	border-radius: 32px;
	border: none;
	background-color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};

	color: ${({ special }) => (special ? '#004e68' : '#FCFCFC ')};
	margin: 10px auto;
	transition: background-color .2s ease-out;
	cursor: pointer;
	text-align: center;
	:hover {
		background-color: ${({ special }) => (special ? '#E4E4E4' : '#007ba3')};
	}
	${({ theme }) => theme.media.xlarge} {
		width: 215px;
		height: 40px;
		font-size: calc(${({ theme }) => theme.font.base}*1.3);
	}
    ${({ theme }) => theme.media.xxlarge} {
			width: 415px;
		height: 60px;
		font-size: calc(${({ theme }) => theme.font.base}*2);
	}
`

const Star = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(5px, -1px);
	${({ theme }) => theme.media.xlarge} {
		transform: scale(1.4) translate(0px, 3px);
	}
	${({ theme }) => theme.media.xxlarge} {
		transform: scale(3) translate(-7px, 9px);
	}
`

const Foot = styled.div`
	font-weight: 400;
	font-family: 'Play', sans-serif;
	font-size: 14px;
	color: #004e68;
	text-align: center;
	margin: ${({ margin }) => (margin = margin)};
    p:nth-child(1) {
		margin-bottom: 10px;
	}
`

const FootWrapper = styled.div``

class PreService extends Component {
	render() {
		return (
			<Wrapper>
				<Title>
					<h2>Meet some of our plans</h2>
				</Title>
				<CardWrapper>
					<Card>
						<CardTitle>Basic</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore.
						</CardDescription>
						<CardFeature>
							<Description>Emloyees no.</Description>
							<Value>up to 5</Value>
						</CardFeature>
						<CardFeature>
							<Description>Emloyees no.</Description>
							<Value>up to 5</Value>
						</CardFeature>
						<CardFeature>
							<Description>Invoices</Description>
							<Value>up to 20</Value>
						</CardFeature>
						<CardFeature>
							<Description>Tax advice</Description>
							<Value>included</Value>
						</CardFeature>
						<PriceTag>
							<PriceDescription>Price starts from </PriceDescription>
							<PriceWrapper>
								<PriceValue>£1</PriceValue>
								<PriceChange>
									<sup>.00</sup>
								</PriceChange>
							</PriceWrapper>
						</PriceTag>
						<OrderButton>Order</OrderButton>
					</Card>

					<Card special>
						<Star src={star} />
						<CardTitle special>Premium</CardTitle>
						<CardDescription special>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore.
						</CardDescription>
						<CardFeature special>
							<Description>Emloyees no.</Description>
							<Value>up to 5</Value>
						</CardFeature>
						<CardFeature special>
							<Description>Emloyees no.</Description>
							<Value>up to 5</Value>
						</CardFeature>
						<CardFeature special>
							<Description>Invoices</Description>
							<Value>up to 20</Value>
						</CardFeature>
						<CardFeature special>
							<Description>Tax advice</Description>
							<Value>included</Value>
						</CardFeature>
						<PriceTag>
							<PriceDescription special>Price starts from </PriceDescription>
							<PriceWrapper>
								<PriceValue special>£1</PriceValue>
								<PriceChange special>
									<sup>.00</sup>
								</PriceChange>
							</PriceWrapper>
						</PriceTag>
						<OrderButton special>Order</OrderButton>
					</Card>

					<Card>
						<CardTitle>Enterprise</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore.
						</CardDescription>
						<CardFeature>
							<Description>Emloyees no.</Description>
							<Value>up to 5</Value>
						</CardFeature>
						<CardFeature>
							<Description>Emloyees no.</Description>
							<Value>up to 5</Value>
						</CardFeature>
						<CardFeature>
							<Description>Invoices</Description>
							<Value>up to 20</Value>
						</CardFeature>
						<CardFeature>
							<Description>Tax advice</Description>
							<Value>included</Value>
						</CardFeature>
						<PriceTag>
							<PriceDescription>Price starts from </PriceDescription>
							<PriceWrapper>
								<PriceValue>£1</PriceValue>
								<PriceChange>
									<sup>.00</sup>
								</PriceChange>
							</PriceWrapper>
						</PriceTag>
						<OrderButton>Order</OrderButton>
					</Card>
				</CardWrapper>
				<FootWrapper>
					<Foot margin='50px auto 0 auto'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Foot>
					<Foot margin='0 auto 80px auto'>
						<p>
							<strong>Lorem ipsum dolor.</strong>
						</p>
					</Foot>
				</FootWrapper>
			</Wrapper>
		)
	}
}

export default PreService
