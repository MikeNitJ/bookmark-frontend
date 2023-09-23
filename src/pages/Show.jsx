import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Show = () => {
  const bookmark = useLoaderData();
  return (
    <div>
      <h1>{bookmark.title}</h1>

      <a href={bookmark.url}>
        <button>Check it out!</button>
      </a>
    </div>
  )
}

export default Show