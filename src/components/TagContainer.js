import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: .2em;
	margin: 0 0;
`

const TagElement = styled.div`
	background-color: #004f69;
	padding: 0.25em 0.5em;
	margin: 0.2em;
	border-radius: 2px;
	font-weight: 400;
	color: #e4e4e4;
	text-transform: uppercase;
	font-size: calc(${({ theme }) => theme.font.base}*0.8);
	${({ theme }) => theme.media.xlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.1);
	}
	${({ theme }) => theme.media.xxlarge} {
		font-size: calc(${({ theme }) => theme.font.base}*1.8);
	}
`

const TagContainer = ({ tags }) => {
 
    return (
        
        <Wrapper>
            {tags.map(tag => (<TagElement key={Math.random().toString(36).substr(2, 11)}>{tag}</TagElement>))}
        </Wrapper>
    )
}

export default TagContainer
