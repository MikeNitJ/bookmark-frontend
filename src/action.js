import { redirect } from "react-router-dom";
// const url = 'https://people-app-q89t.onrender.com'

export const createAction = async ({ request }) => {
    const formData = await request.formData()

    const bookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    }

    await fetch( url + '/people', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
    })
    return redirect('/')
};

export const updateAction = async ({ params, request }) => {
    const formData = await request.formData()

    const bookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    }

    await fetch( url + '/people/' + params.id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
    })
    return redirect(`/${params.id}`)
};

export const deleteAction = async ({params}) => {
    await fetch( url + '/people/' + params.id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    })
    return redirect('/')
}

