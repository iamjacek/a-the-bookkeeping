import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/style.scss";

const Wrapper = styled.div`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  background-color: #e4e4e4;
  overflow: auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.large} {
    min-height: 75vh;
  }
`;

const BottomNav = styled.div`
  width: 100%;
  margin: 1.2em 0;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.base}*.8);
  span {
    padding: 1em;
    cursor: pointer;
    text-align: center;
  }
  ${({ theme }) => theme.media.medium} {
    font-size: calc(${({ theme }) => theme.font.base}*1);
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*1.4);
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*2.2);
  }
  a:visited {
    color: #004f69;
  }
`;

const Card = styled.div`
  width: 90%;
  overflow: hidden;
  word-break: break-word;
  ${({ theme }) => theme.media.medium} {
    width: 75%;
  }
  ${({ theme }) => theme.media.large} {
    width: 60%;
  }
  ${({ theme }) => theme.media.xlarge} {
    width: 60%;
  }
  ${({ theme }) => theme.media.xxlarge} {
    width: 60%;
  }
`;

const Header = styled.h1`
  margin-bottom: 0px;
  font-family: "Ubuntu", sans-serif;
  border: 2px #707070 solid;
  font-size: calc(${({ theme }) => theme.font.header}*0.65);
  font-weight: 500;
  padding: 0.2em 0.5em;
  margin-top: unset;
  border-radius: 5px;

  ${({ theme }) => theme.media.small} {
    font-size: calc(${({ theme }) => theme.font.header}*0.65*1.1);
  }
  ${({ theme }) => theme.media.medium} {
  }
  ${({ theme }) => theme.media.large} {
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.header}*0.65*1.5);
    border: 2px #707070 solid;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.header}*0.65*3.4);
    border: 4px #707070 solid;
  }
`;

const Answer = styled.p`
  margin: 0;
  margin-bottom: 7px;
  font-family: "Play", sans-serif;
  color: #fcfcfc;
  font: 1em sans-serif;
  font-size: calc(${({ theme }) => theme.font.base}*1);
  text-align: left;
  font-weight: 400;
  background: #004f69;
  border: 1px #707070 solid;
  border-radius: 5px;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  padding: 0 1em;
  opacity: 0;
  transition: opacity 0.05s ease-in, max-height 0.05s ease-in;

  ${({ theme }) => theme.media.small} {
    font-size: calc(${({ theme }) => theme.font.base}*1);
  }

  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*1.3);
    border: 2px #707070 solid;
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*2.5);
    border: 4px #707070 solid;
  }
`;

const Arrow = styled.span`
  :before {
  }
`;

const FAQ = () => {
  const data = useStaticQuery(
    graphql`
      query allContentfulFaqElementQuery {
        allContentfulFaqElement {
          edges {
            node {
              id
              title
              body {
                body
              }
            }
          }
        }
      }
    `
  );

  //open accordion singles bookmark and allowy to close it when clicked on open once
  const handleClick = e => {
    const a = document.querySelectorAll(".cardAnswer");
    const checkIsOpen = e.target.parentNode.childNodes[1].classList.contains(
      "open"
    );
    if (checkIsOpen) {
      console.log("true story");
      e.target.parentNode.childNodes[1].classList.toggle("open");
    } else {
      a.forEach(element => {
        element.classList.remove("open");
      });
      e.target.parentNode.childNodes[1].classList.toggle("open");
    }
  };

  const faqElement = data.allContentfulFaqElement.edges;
  console.log();
  return (
    <Layout>
      <Wrapper>
        <SEO title="Blog list" />
        <h1>{"FAQ"}</h1>

        {faqElement.map(({ node: question }) => (
          <Card key={question.id} onClick={handleClick}>
            <Header>
              {question.title}
              <Arrow />
            </Header>
            <Answer className="cardAnswer">{question.body.body}</Answer>
          </Card>
        ))}

        <BottomNav>
          <span>
            <Link to="/">Back to Homepage</Link>
          </span>
        </BottomNav>
      </Wrapper>
    </Layout>
  );
};

export default FAQ;
