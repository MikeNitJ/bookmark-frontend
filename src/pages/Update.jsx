import React, {useState} from 'react'
import { useLoaderData, Form } from 'react-router-dom'


const Update = () => {
    const bookmark = useLoaderData();
    const [formData, setFormData] = useState(bookmark);

    const handleChange = (e) => {
        setFormData((prevState) => {
            return{...prevState, [e.target.name]: e.target.value}
        })
    }
  return (
    <div>
    <Form action={`/update/${bookmark._id}`} method='POST'>
      <input type='text' value={formData.title} onChange={handleChange} name="title" placeholder='enter title pls' />
      <input type='text' value={formData.url} onChange={handleChange} name="url" placeholder='enter url pls' />
      <input type='submit' value='create a bookmark' />
    </Form>
    </div>
  )
}

export default Update