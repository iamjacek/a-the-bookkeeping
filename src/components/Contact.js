import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../images/board_contact.svg'
import shape from '../images/shape_contact.svg'
import Button from '../components/Button'

const Wrapper = styled.div`
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	${({ theme }) => theme.media.large} {
		background-image: url(${shape});
		background-repeat: no-repeat;
		background-size: 55% 130%;
		background-position-x: 100%;
		background-position-y: 50%;
		flex-direction: row;
	}
`
const FormWrap = styled.div`
	width: 80%;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	${({ theme }) => theme.media.small} {
		max-width: 450px;
	}
	${({ theme }) => theme.media.xlarge} {
		max-width: 600px;
	}
	${({ theme }) => theme.media.xxlarge} {
		max-width: 1200px;
	}
`

const Text = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 62%;
	${({ theme }) => theme.media.large} {
		width: 100%;
		align-items: flex-start;
		p {
			text-align: left;
		}
	}

	h2 {
		margin-bottom: 20px;
		background: #D5D9DA;
		padding: .2em;
		border-radius: 5%;
	}
`

const FormHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	margin: 50px 0;
`

const Form = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 2em;
	margin-right: auto;
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: space-around;
		label {
			font-family: 'Play', sans-serif;
			font-weight: 700;
			font-size: calc(${({ theme }) => theme.font.base}*0.8);
			text-align: left;
			color: #004f69;
			margin-bottom: 5px;
			${({ theme }) => theme.media.xlarge} {
				font-size: calc(${({ theme }) => theme.font.base}*1);
				margin-bottom: 10px;
			}
			${({ theme }) => theme.media.xxlarge} {
				font-size: calc(${({ theme }) => theme.font.base}*2.2);
			}
		}
		input {
			height: 32px;
			font-weight: 700;
			font-family: 'Play', sans-serif;
			font-size: calc(${({ theme }) => theme.font.base}*1);
			background-color: transparent;
			border: none;
			border-bottom: 3px solid #004f69;
			margin-bottom: 25px;
			color: #004f69;
			${({ theme }) => theme.media.xlarge} {
				font-size: calc(${({ theme }) => theme.font.base}*1.3);
				height: 40px;
				margin-bottom: 30px;
			}
			${({ theme }) => theme.media.xxlarge} {
				font-size: calc(${({ theme }) => theme.font.base}*2.6);
				height: 80px;
				border-bottom: 8px solid #004f69;
				border-radius: 7px;
				margin-bottom: 60px;
			}
			:focus {
				border: 3px solid #004f69;
			}
		}
		textarea {
			background-color: transparent;
			border: 3px solid #004f69;
			border-radius: 5px;
			min-height: 100px;
			color: #004f69;
			font-weight: 700;
			font-family: 'Play', sans-serif;
			font-size: calc(${({ theme }) => theme.font.base}*1);
			margin-bottom: 25px;
			padding: 5px;
			${({ theme }) => theme.media.xlarge} {
				padding: 10px;
				font-size: calc(${({ theme }) => theme.font.base}*1.3);
				min-height: 160px;
			}
			${({ theme }) => theme.media.xxlarge} {
				padding: 15px;
				border: 8px solid #004f69;
				font-size: calc(${({ theme }) => theme.font.base}*2.6);
				margin-bottom: 50px;
				min-height: 260px;
			}
		}
		span {
			font-weight: 400;
			font-family: 'Play', sans-serif;
			font-size: calc(${({ theme }) => theme.font.base}*0.7);
			color: #004f69;
			margin-bottom: 10px;
			${({ theme }) => theme.media.xlarge} {
				font-size: calc(${({ theme }) => theme.font.base}*0.9);
			}
			${({ theme }) => theme.media.xxlarge} {
				font-size: calc(${({ theme }) => theme.font.base}*2);
				margin-bottom: 30px;
			}
		}
	}
`

const ImageWrapper = styled.div`
	width: 32%;
	img {
		width: 100%;
	}
	${({ theme }) => theme.media.large} {
		display: none;
	}
`

const ImageWrapperBig = styled.div`
	display: none;
	${({ theme }) => theme.media.large} {
		display: block;
		width: 100%;
		margin-bottom: 60px;
		img {
			width: 60%;
		}
	}
	${({ theme }) => theme.media.xlarge} {
		img {
			width: 80%;
		}
	}
	${({ theme }) => theme.media.xxlarge} {
		img {
			width: 150%;
		}
	}
`

const ContactBox = styled.div`
	display: none;
	${({ theme }) => theme.media.large} {
		margin: 0;
		display: block;
		p {
			text-align: left;
			font-weight: 700;
			margin: 0;
			margin-bottom: 30px;
		}
		h3 {
			font-family: 'Play', sans-serif;
			color: #004f69;
			font-size: calc(${({ theme }) => theme.font.base}*1);
			font-weight: 400;
			margin: 5px 0;
		}
	}
	${({ theme }) => theme.media.xlarge} {
		h3 {
			font-size: calc(${({ theme }) => theme.font.base}*1.2);
		}
	}
	${({ theme }) => theme.media.xxlarge} {
		h3 {
			font-size: calc(${({ theme }) => theme.font.base}*2.4);
		}
		transform: translateX(-300px);
	}
`

class Contact extends Component {
	state = {
		firstName: '',
		email: '',
		subject: '',
		message: ''
	}

	render() {
		return (
			<Wrapper id='contact'>
				<FormWrap>
					<FormHeader>
						<Text>
							<h2>Contact Us</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry’s
							</p>
						</Text>

						<ImageWrapper>
							<img alt='clipboard on A the payroll and bookkeeping' src={img} />
						</ImageWrapper>
					</FormHeader>
					<Form>
						<form name='contact' method='post' data-netlify='true' data-netlify-honeypot="bot-field">
							<input type="hidden" name="contact me" value="contact" />
							<label>Name</label>
							<input type='text' name='firstName' />
							<label>Email</label>
							<input type='text' name='email' />
							<label>Subject</label>
							<input type='text' name='subject' />
							<label>Message</label>
							<span>Ask a question or tell how would like us to help you</span>
							<textarea name='message' />
							<Button type='submit'>Submit</Button>
						</form>
					</Form>
				</FormWrap>

				<ContactBox>
					<ImageWrapperBig>
						<img alt='clipboard on A the payroll and bookkeeping' src={img} />
					</ImageWrapperBig>
					<h3>Let's colaborate</h3>
					<p>
						<strong>athepayrol@malpa.pl</strong>
					</p>
					<h3>Phone</h3>
					<p>
						<strong>077277727772</strong>
					</p>
				</ContactBox>
			</Wrapper>
		)
	}
}

export default Contact
