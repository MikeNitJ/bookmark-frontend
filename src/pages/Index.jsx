import React from 'react'
import { useLoaderData, Link, Form } from 'react-router-dom'
import { deleteAction } from '../action';

const Index = () => {
  const bookmark = useLoaderData();
console.log(bookmark);

  return (
  <div>
    <h2>Create a Bookmark</h2>
    <Form action="/create" method='POST'>
      <input type='text' name="title" placeholder='enter title please' />
      <input type='text' name="url" placeholder='enter url please' />
      <input type='submit' value='create a bookmark' />
    </Form>

    <h2>Bookmark</h2>
    {bookmark.map((book) => {
    return <div key={book._id} className=''>
      <Link to={`/${book._id}`}>
        {book.name}
      </Link>
      <img src={book.image} alt={book.name} />
      <h3>{book.title}</h3>

    <Form action={`/delete/${book._id}`} method='POST'>
      <button type='submit' className="bg-pink-300 rounded-full" value='create a bookmark'> Delete Me </button>
    </Form>

    <Link to={`/${book._id}/edit`}>
    <button type='submit' className="bg-pink-300 rounded-full" value='edit a bookmark'>Edit {book.name}</button>
    </Link>

    </div>
  })};
  </div>
  );
}

export default Index