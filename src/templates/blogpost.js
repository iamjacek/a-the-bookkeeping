import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import TagContainer from "../components/TagContainer"
import Button from "../components/Button"
import ButtonAlt from "../components/ButtonAlt"
import { Link as LinkSmooth } from "react-scroll"
import Img from "gatsby-image"

import Share from "../components/Share"
import cal from "../images/calendar.svg"

import useSiteMetadata from "../components/use-site-metadata"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Wrapper = styled.div`
  width: 90%;
  margin: 2.5em 5%;
  margin-top: 1em;
  background-color: #d5d9db;
  overflow: hidden;
  border-radius: 5px;
  padding: 0.5em;
  min-height: 72vh;
  ${({ theme }) => theme.media.small} {
    width: 70%;
    margin: 2.5em 15%;
    padding: 1rem 1.5rem;
  }
  ${({ theme }) => theme.media.large} {
    width: 70%;
    margin: 4em 15%;
    padding: 3em;
    padding-top: 1rem;
  }
  ${({ theme }) => theme.media.xxlarge} {
    width: 60%;
    margin: 9em 20%;
    padding: 7em;
    padding-top: 2em;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
  ${({ theme }) => theme.media.medium} {
    justify-content: flex-start;
    margin: 1em 1em;
  }
  ${({ theme }) => theme.media.xlarge} {
    margin-bottom: 2em;
  }
  ${({ theme }) => theme.media.xxlarge} {
    margin: 2em 1em;
    margin-bottom: 4em;
  }
`

const Calendar = styled.div`
  margin-right: 1em;
  background-image: url(${cal});
  background-size: cover;
  width: 40px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-line;
  text-align: center;
  padding-bottom: 4px;
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.base}*0.8);
  line-height: calc(${({ theme }) => theme.font.base}*0.9);
  font-weight: 800;
  a:visited {
    color: #004f69;
  }
  ${({ theme }) => theme.media.xlarge} {
    width: 60px;
    height: 65px;
    font-size: calc(${({ theme }) => theme.font.base}*1.3);
    padding-bottom: 4px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    width: 130px;
    height: 135px;
    font-size: calc(${({ theme }) => theme.font.base}*2.8);
  }
`

const Title = styled.div`
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.header}*0.55);
  width: calc(90% - (1em + 40px));
  text-align: center;
  transform: translateX(-0.5em);
  text-transform: uppercase;
  a:visited {
    color: #004f69;
  }
  ${({ theme }) => theme.media.medium} {
    text-align: left;
    transform: translateX(0);
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.header}*.8);
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.header}*1.6);
  }
`

const DateTag = styled.div`
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.base}*0.7);
  ${({ theme }) => theme.media.large} {
    margin: 0 0.5em;
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*1.1);
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*2.6);
  }
  span {
    color: #919191;
  }
`

const Description = styled.div`
  margin: 0.5em 0.5em;
  width: calc(100% - 1em);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  ${({ theme }) => theme.media.large} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  ${({ theme }) => theme.media.xxlarge} {
    margin: 3em 0.5em;
  }
`

const Editor = styled.div`
  font-weight: 400;
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.base}*0.7);
  ${({ theme }) => theme.media.large} {
    margin: 0 0.5em;
    margin-left: 0;
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*1.1);
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*2.6);
  }
  span {
    color: #919191;
  }
`

const BodyText = styled.p`
  width: calc(100% - 1em);

  /* margin: 2em 0.5em;
  column-count: 6;
  column-width: 250px; */
  max-width: 800px;
  p {
    text-align: left;
    margin: 4rem 0;
  }
`

const BottomNav = styled.div`
  cursor: pointer;
  width: 100%;
  margin-top: auto;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.base}*.8);
  span {
    padding: 0.8em;
  }
  ${({ theme }) => theme.media.medium} {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-top: auto;
    font-size: calc(${({ theme }) => theme.font.base}*.8);
  }

  a:visited {
    color: #004f69;
  }
`

const TagContainerWrap = styled.div`
  width: calc(100% - 1em);
  margin: 0 auto;
`

const Category = styled(Editor)`
  ${({ theme }) => theme.media.large} {
    margin: 0 0.5em;
  }
`

const ShareWrapper = styled.div`
  width: calc(100% - 1em);
  margin: 1em auto;
`

// get month and day from the publish date and change it dynamically inside of calendar icon
const getMonth = (date) => {
  switch (date.slice(3, 5)) {
    case "01":
      return "Jan"
    case "02":
      return "Feb"
    case "03":
      return "Mar"
    case "04":
      return "Apr"
    case "05":
      return "May"
    case "06":
      return "Jun"
    case "07":
      return "Jul"
    case "08":
      return "Aug"
    case "09":
      return "Sep"
    case "10":
      return "Oct"
    case "11":
      return "Nov"
    case "12":
      return "Dec"
  }
}

const getDay = (date) => {
  return date.slice(0, 2)
}

const scrollTop = () => {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "DD-MM-YYYY")
      body {
        json
      }
      tags
    }
  }
`

const BlogPost = (props) => {
  const { title, tags } = props.data.contentfulPost
  const { siteUrl, twitterHandle } = useSiteMetadata()
  const shareProps = {
    siteUrl: siteUrl,
    title: title,
    twitterHandle: twitterHandle,
    location: props.location,
    tags: tags,
  }

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} style={{ maxWidth: "200px" }} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} keywords={tags ? tags : null} />

      <Wrapper>
        <Head>
          <Calendar>
            {`
${getMonth(props.data.contentfulPost.publishedDate)}
${getDay(props.data.contentfulPost.publishedDate)}`}
          </Calendar>
          <Title>
            <h3>{title}</h3>
          </Title>
        </Head>

        <Description>
          <Editor>
            <span>By</span>
            {` Anna`}
          </Editor>
          <DateTag>
            <span>Posted</span>
            {` ${props.data.contentfulPost.publishedDate} `}
          </DateTag>
          <Category>
            <span>in</span>
            {` "A" - Payroll and Bookkeeping`}
          </Category>
        </Description>

        <BodyText>
          {documentToReactComponents(
            props.data.contentfulPost.body.json,
            options
          )}
        </BodyText>
        <TagContainerWrap>
          <TagContainer tags={tags} />
        </TagContainerWrap>
        <ShareWrapper>
          <Share socialConfig={shareProps} />
        </ShareWrapper>

        <BottomNav>
          <span onClick={scrollTop}>
            <ButtonAlt>Back to Top</ButtonAlt>
          </span>
          <span>
            <Link to="/blogposts">
              <Button>View more posts</Button>
            </Link>
          </span>

          <span>
            <Link to="/">
              {" "}
              <ButtonAlt>Back to Home </ButtonAlt>
            </Link>
          </span>
        </BottomNav>
      </Wrapper>
    </Layout>
  )
}
export default BlogPost
