import "./BookTable.css";
import React from "react";
import { useDebounce } from "use-debounce";

const URL = "https://www.googleapis.com/books/v1/volumes?q=Prueba";

const BookTable = () => {
    const [bookList, setBookList] = React.useState([]);

    const [filter, setFilter] = React.useState("");

    const [filterWithTime] = useDebounce(filter, 1000);

    React.useEffect(() => {
        fetch(URL + filterWithTime)
        .then((response) => response.json())
        .then((data) => setBookList(data));
    }, [filterWithTime]);

    return(
        <div className="book-list">
            <p>Buscador de libros:</p>
            <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}/>
            {bookList.map(element => console.log("hola"))}
            {/* <table className="book-list__table">
                <thead>
                    <tr>
                        <th>Autores</th>
                        <th>Título</th>
                        <th>Portada</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
}

export default BookTable;