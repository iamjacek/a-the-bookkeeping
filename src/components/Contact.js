import React, { Component } from "react"
import styled from "styled-components"
import img from "../images/board_contact.svg"
import shape from "../images/shape_contact.svg"
import Button from "../components/Button"
import { navigate } from "gatsby-link"

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
    background: #d5d9da;
    padding: 0.2em;
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
      font-family: "Play", sans-serif;
      font-weight: 700;
      font-size: calc(${({ theme }) => theme.font.base}*0.8);
      text-align: left;
      color: #004f69;
      margin-bottom: 15px;
      padding-left: 2px;
      ${({ theme }) => theme.media.xlarge} {
        font-size: calc(${({ theme }) => theme.font.base}*1);
        margin-bottom: 20px;
      }
      ${({ theme }) => theme.media.xxlarge} {
        font-size: calc(${({ theme }) => theme.font.base}*2.2);
      }
    }
    input {
      height: 32px;
      font-weight: 700;
      font-family: "Play", sans-serif;
      font-size: calc(${({ theme }) => theme.font.base}*1);
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #004e68;
      margin-bottom: 5px;
      color: #004f69;
      ${({ theme }) => theme.media.xlarge} {
        font-size: calc(${({ theme }) => theme.font.base}*1.3);
        height: 40px;
      }
      ${({ theme }) => theme.media.xxlarge} {
        font-size: calc(${({ theme }) => theme.font.base}*2.6);
        height: 80px;
        border-bottom: 5px solid #004e68;
        border-radius: 7px;
      }
      &:focus {
        border: 2px solid #004f68;
        ${({ theme }) => theme.media.xxlarge} {
          border: 5px solid #004e68;
        }
      }
    }
    textarea {
      background-color: transparent;
      border: 2px solid #004f68;
      border-radius: 5px;
      min-height: 100px;
      color: #004f69;
      font-weight: 700;
      font-family: "Play", sans-serif;
      font-size: calc(${({ theme }) => theme.font.base}*1);
      margin-bottom: 5px;
      padding: 5px;
      ${({ theme }) => theme.media.xlarge} {
        padding: 10px;
        font-size: calc(${({ theme }) => theme.font.base}*1.3);
        min-height: 160px;
      }
      ${({ theme }) => theme.media.xxlarge} {
        padding: 15px;
        border: 5px solid #004e68;
        font-size: calc(${({ theme }) => theme.font.base}*2.6);
        min-height: 260px;
      }
      &:focus {
        border: 3px solid #004f68;
        ${({ theme }) => theme.media.xxlarge} {
          border: 8px solid #004e68;
        }
      }
    }
    span {
      font-weight: 400;
      font-family: "Play", sans-serif;
      font-size: calc(${({ theme }) => theme.font.base}*0.7);
      color: #004f69;
      margin-top: -10px;
      ${({ theme }) => theme.media.xlarge} {
        margin-top: -20px;
      }

      margin-bottom: 20px;
      ${({ theme }) => theme.media.xlarge} {
        font-size: calc(${({ theme }) => theme.font.base}*0.9);
      }
      ${({ theme }) => theme.media.xxlarge} {
        font-size: calc(${({ theme }) => theme.font.base}*2);
        margin-bottom: 35px;
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
      font-family: "Play", sans-serif;
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const formValidation = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let count = 0
    if (re.test(document.querySelector("input[name=email]").value)) ++count
    if (document.querySelector("input[name=firstName]").value.length > 1)
      ++count
    if (document.querySelector("textarea[name=message]").value.length > 5)
      ++count

    return count
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    if (formValidation() === 3) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch((error) => alert(error))
    }
  }

  return (
    <Wrapper id="contact">
      <FormWrap>
        <FormHeader>
          <Text>
            <h2>Contact Us</h2>
            <p>
              Please either send an email or fill this form below to get in
              touch
            </p>
          </Text>

          <ImageWrapper>
            <img alt="clipboard on A the payroll and bookkeeping" src={img} />
          </ImageWrapper>
        </FormHeader>
        <Form>
          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
            />
            <label for="firstName">Name</label>

            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
            />
            <label for="email">Email</label>

            <input
              type="text"
              name="subject"
              id="subject"
              onChange={handleChange}
            />
            <label for="subject">Subject</label>

            <textarea name="message" onChange={handleChange} id="message" />
            <label fro="message">Message</label>
            <span>Ask a question or tell how would like us to help you</span>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </FormWrap>

      <ContactBox>
        <ImageWrapperBig>
          <img alt="clipboard on A the payroll and bookkeeping" src={img} />
        </ImageWrapperBig>
        <h3>Let's collaborate</h3>
        <p>
          <strong>office@apayroll.co.uk</strong>
        </p>
        <h3>Phone</h3>
        <p>
          <strong>07413 932625</strong>
        </p>
      </ContactBox>
    </Wrapper>
  )
}

export default Contact
