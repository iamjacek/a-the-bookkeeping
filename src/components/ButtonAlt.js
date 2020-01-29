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
	background-color: transparent;
	color: #004e68;
	margin: 0 auto;
	cursor: pointer;
	:hover {
		border: 1px solid #004e68;
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

const ButtonAlt = ({... props }) => (
    <Wrapper {... props}>
    {props.children}
    </Wrapper>
)

export default ButtonAlt