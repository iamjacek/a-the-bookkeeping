import React, { Component } from 'react'
import styled from 'styled-components'
import star from '../images/star.svg'

const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	position: relative;
	width: 100%;
	min-height: 100vh;
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
	justify-content: center;
`

const CardTitle = styled.div`
	font-weight: 700;
	font-family: 'Play', sans-serif;
	font-size: 35px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
	text-align: center;
	margin-bottom: 20px;
`

const CardDescription = styled.div`
	font-weight: 400;
	font-family: 'Play', sans-serif;
	font-size: 14px;
	margin-bottom: 30px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
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
`

const PriceValue = styled.div`
	font-weight: 700;
	font-family: 'Play', sans-serif;
	font-size: 34px;
	color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
`

const PriceChange = styled(PriceValue)`
    font-size: 24px;
    transform: translateY(3px);
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
`

const Star = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(5px, -1px);
`

const Foot = styled.div`
	font-weight: 400;
	font-family: 'Play', sans-serif;
	font-size: 14px;
	color: #004e68;
    text-align: center;
    margin: ${({margin}) => margin = margin};
`

class PreService extends Component {
	render() {
		return (
			<Wrapper>
				<Title>
					<h2>Meet some of our plans</h2>
				</Title>
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
					<CardTitle special>Basic</CardTitle>
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
				<Foot margin='50px auto 0 auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Foot>
				<Foot margin='0 auto 30px auto'>
					<strong>Lorem ipsum dolor.</strong>
				</Foot>
			</Wrapper>
		)
	}
}

export default PreService
