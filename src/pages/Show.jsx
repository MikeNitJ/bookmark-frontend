import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Show = () => {
  const bookmark = useLoaderData();
  return (
    <div>
      <h1>{bookmark.name}</h1>
      <img src={bookmark.image} alt={bookmark.name} />
      <h1>{bookmark.title}</h1>
    </div>
  )
}

export default Show