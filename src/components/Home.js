import React, { Component } from 'react';
import styled from 'styled-components';
import wallet from '../images/wallet.svg'
import img from '../images/bottom_home.svg'


const Outter = styled.div`
position: relative;
    background-image:  url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 100% 100%;
    background-color: #E4E4E4;
`
const Wrapper = styled.div`
    * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    background-color: transparent;
    min-height: 85vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 12%;
    margin: 0 auto;
    
    h2, h1, p{
        font-family: 'Play', sans-serif;
        color: #004F69;
    }
    h1{
        margin-top: -7px;
        margin-bottom: 20px;
        font-size: 40px;
        font-weight: 800;
    }
    h2{
        margin-bottom: 0;
        font-size: 33px;
        font-weight: 400;
    }
    p{
        font-size: 14px;
        margin-top: 0;
        text-align: center;
        font-weight: 400;
        margin-bottom: 40px;
    }
`
const ImageWrapper = styled.div`
    width: 250px;
    height: 180px;
    margin: 0 auto;
`
const Img = styled.img`
    width: 100%;
`
const Quote = styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    width: 175px;
    height: 30px;
    border-radius: 32px;
    border: none;
    background-color: #004F69;
    color: #FCFCFC;
`



class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Outter>
                <Wrapper>
                    <ImageWrapper>
                        <Img src={wallet} />
                    </ImageWrapper>
                    <h2>GET IT DONE WITH</h2>

                    <h1>BOOKKEEPING</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>

                    <Quote>GET QUOTE</Quote>

                    
                </Wrapper>
            </Outter>

        )
    }

}

export default Home;

