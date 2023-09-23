const url = 'https://bookmark-backend-uza1.onrender.com'
// const url = 'http://localhost:4000/book'

export const bookLoader = async () => {
    const res = await fetch(url + "/book" )
   console.log(res); 
    const book = await res.json();
    console.log(book);
    return book;
}


export const showLoader = async({params}) => {
    const res = await fetch(url + "/book/" + params.id)
    const book = await res.json();
    return book
}
