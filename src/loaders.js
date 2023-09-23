const url = 'https://bookmark-backend-uza1.onrender.com'

export const bookLoader = async () => {
    const res = await fetch(url + '/book')
    const book = await res.json();

    return book;
}


export const showLoader = async({params}) => {
    const res = await fetch(url + '/book/' + params.id)
    const book = await res.json();
    return book
}
