import { redirect } from "react-router-dom";
const url = 'https://bookmark-backend-uza1.onrender.com'

export const createAction = async ({ request }) => {
    const formData = await request.formData()

    const bookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    }

    await fetch( url + '/book', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookmark),
    })
    return redirect('/')
};

export const updateAction = async ({ params, request }) => {
    const formData = await request.formData()

    const bookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    }

    await fetch( url + '/book/' + params.id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookmark),
    })
    return redirect(`/${params.id}`)
};

export const deleteAction = async ({params}) => {
    await fetch( url + '/book/' + params.id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    })
    return redirect('/')
}

