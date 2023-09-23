import React from "react";
import { useLoaderData, Link, Form } from "react-router-dom";
import { deleteAction } from "../action";
import "../styles.css";

const Index = () => {
  const bookmark = useLoaderData();
  console.log(bookmark);

  return (
    <div>
      <h2>Create a Bookmark</h2>
      <Form action="/create" method="POST">
        <input type="text" name="title" placeholder="enter title please" />
        <input type="text" name="url" placeholder="enter url please" />
        <input type="submit" value="create a bookmark" />
      </Form>

      <h2>Bookmark</h2>
      {bookmark.map((book) => {
        return (
          <div className="card-container">
            {" "}
            <div key={book._id} className="card">
              <Link to={`/${book._id}`}>{book.title}</Link>

              <Form action={`/delete/${book._id}`} method="POST">
                <button type="submit" value="create a bookmark">
                  {" "}
                  Delete Me{" "}
                </button>
              </Form>

              <Link to={`/${book._id}/edit`}>
                <button type="submit" value="edit a bookmark">
                  Edit {book.name}
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
