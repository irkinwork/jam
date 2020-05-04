import React from "react"

const Article = ({
  content: {
    title,
    text: {
      text
    },
    banner,
    publishedAt
  }
}) => {
  const url = banner?.file;
  return (
    <div>
      <h2>{title}</h2>
      {url && <img src={url} alt={title}/>}
      <p>
        {text}
      </p>
      <h5>{publishedAt}</h5>
    </div>
  )
}

export default Article
