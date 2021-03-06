import React, { useEffect } from "react"
import styled from "styled-components"
import { Link, useStaticQuery } from "gatsby"
import TagContainer from "../components/TagContainer"
import cal from "../images/calendar.svg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.medium} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
  }
  ${({ theme }) => theme.media.large} {
    margin-bottom: 2.2em;
  }
  ${({ theme }) => theme.media.xlarge} {
    margin-bottom: 3.2em;
  }
  ${({ theme }) => theme.media.xxlarge} {
    margin-bottom: 6.2em;
  }
`

const Card = styled.div`
  width: 85%;
  position: relative;
  padding: 1.5em;
  background-color: #d5d9db;
  border-radius: 5px;
  margin: 1em auto;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s linear;
  ${({ theme }) => theme.media.medium} {
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
  }
  ${({ theme }) => theme.media.large} {
    width: 31.33%;
    justify-content: flex-start;
  }
  :hover {
    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-0.2em);
    background-color: #cbd0d3;
  }
  ${({ theme }) => theme.media.xlarge} {
    padding: 2em;
    :hover {
      transform: translateY(-0.3em);
    }
  }
  ${({ theme }) => theme.media.xxlarge} {
    padding: 4em;
    :hover {
      transform: translateY(-0.8em);
    }
  }
`

const Head = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0.2em;
  margin: 0;
  height: 70px;

  h3 {
    margin: 0;
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
  a {
    color: #004f69;
  }
  ${({ theme }) => theme.media.xlarge} {
    width: 60px;
    height: 65px;
    font-size: calc(${({ theme }) => theme.font.base}*1.3);
    padding-bottom: 8px;
  }
  ${({ theme }) => theme.media.xxlarge} {
    width: 140px;
    height: 145px;
    font-size: calc(${({ theme }) => theme.font.base}*2.8);
    padding-bottom: 20px;
  }
`

const DateTag = styled.div`
  margin-top: 0.4em;
  margin-bottom: -0.6em;
  padding: 0;
  font-weight: 400;
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.base}*0.7);
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*1.1);
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.base}*2.1);
  }
`

const Title = styled.div`
  color: #004f69;
  font-size: calc(${({ theme }) => theme.font.header}*0.55);
  width: calc(100% - (1em + 40px));
  text-align: center;

  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: #004f69;
  }
  a:visited {
    color: #004f69;
  }
  ${({ theme }) => theme.media.xlarge} {
    font-size: calc(${({ theme }) => theme.font.header}*.8);
  }
  ${({ theme }) => theme.media.xxlarge} {
    font-size: calc(${({ theme }) => theme.font.header}*1.6);
  }
`

const ReadMore = styled.p`
  font-weight: 700;
  color: #004f69;
  text-align: left;
  margin: 1em 0;
  flex-grow: 2;
  a:visited {
    color: #004f69;
  }
  a {
    color: #004f69;
  }
`

const TagWrap = styled.div`
  margin-top: auto;
  flex-grow: 1;
`

const CardWrapper = ({ lastPosts }) => {
  const data = useStaticQuery(
    graphql`
      query BlogPostsPageQuery {
        allContentfulPost(sort: { fields: publishedDate, order: ASC }) {
          edges {
            node {
              id
              title
              slug
              publishedDate(formatString: "DD-MM-YYYY")
              body {
                json
                body
              }
              tags
              description
            }
          }
        }
      }
    `
  )
  const blogPosts = data.allContentfulPost.edges

  // get month and day from the publish date and change it dynamicaly inside of calendar icon
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
      default:
        return "Jan"
    }
  }

  const getDay = (date) => {
    return date.slice(0, 2)
  }

  const checkHeight = () => {
    const cards = document.querySelectorAll(".card")
    let height = 0
    cards.forEach((e) => {
      if (e.offsetHeight > height) {
        height = e.offsetHeight
      }
    })
    return height
  }

  const setHeight = () => {
    const cards = document.querySelectorAll(".card")
    const heightVal = checkHeight()
    cards.forEach((e) => {
      e.style.height = heightVal + "px"
    })
  }

  const resetHeight = () => {
    const cards = document.querySelectorAll(".card")
    cards.forEach((e) => {
      e.style.height = "unset"
    })
  }

  const getWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    )
  }

  useEffect(() => {
    if (getWidth() >= 1007) {
      setHeight()
    }
    window.addEventListener("resize", () => {
      const a = getWidth()
      if (a >= 1007) {
        setHeight()
      } else {
        resetHeight()
      }
    })

    // if blogs exist and user are in 404 and not in the blogspost list we just want to show 2 blog posts
    if (blogPosts && lastPosts) {
      let cards = document.querySelectorAll(".card")

      if (cards.length >= 3) {
        const counter = cards.length - 1

        for (let x = counter; x > 1; x--) {
          console.log(x)
          cards[x].style.display = "none"
        }
      }
    }
  })

  return (
    <Wrapper>
      {blogPosts.map(({ node: post }) => (
        <Card key={post.id} className="card">
          <Link
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              alignContent: "flex-start",
            }}
            to={`/blogpost/${post.slug}`}
          >
            <Head>
              <Calendar>
                {`
${getMonth(post.publishedDate)}
${getDay(post.publishedDate)}`}
              </Calendar>
              <Title>
                <h3>{post.title}</h3>
              </Title>
            </Head>
            <DateTag>{`${post.publishedDate}`}</DateTag>

            <ReadMore>{post.description}</ReadMore>
            <TagWrap>
              <TagContainer tags={post.tags} />
            </TagWrap>
          </Link>
        </Card>
      ))}
    </Wrapper>
  )
}

export default CardWrapper
