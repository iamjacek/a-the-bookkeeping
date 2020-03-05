import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
	position: relative;
	font-family: 'Ubuntu', sans-serif;
	font-size: calc(${({ theme }) => theme.font.base}*1);
	width: 185px;
	height: 30px;
	border-radius: 32px;
	border: none;
	background-color: ${({ special }) => (special ? '#FCFCFC' : '#004e68')};
	color: ${({ special }) => (special ? '#004e68' : '#FCFCFC ')};
	margin: 10px auto;
	transition: background-color .2s ease-out;
	cursor: pointer;
	:hover {
		background-color: ${({ special }) => (special ? '#E4E4E4' : '#007ba3')};
	}
	${({ theme }) => theme.media.small} {
	}
	${({ theme }) => theme.media.medium} {
	}
	${({ theme }) => theme.media.large} {
	}
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.4);
		width: 245px;
		height: 43px;
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*2.8);
		width: 525px;
		height: 83px;
	}
`

const Button = ({... props }) => (
    <Wrapper {... props}>
    {props.children}
    </Wrapper>
)

export default Button