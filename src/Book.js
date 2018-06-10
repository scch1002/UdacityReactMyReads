import React from 'react';

function onChangeBookShelf(event, movefunction, book) {
    movefunction(book, event.target.value);
}

const Book = (props) => (
    <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url('+ props.book.imageLinks.thumbnail + ')' }}></div>
        <div className="book-shelf-changer">
            <select onChange={event => onChangeBookShelf(event, props.moveBookToDifferentShelf, props.book)}>
            <option value="move" disabled>Move to...</option>
            <option selected={props.book.shelf === "currentlyReading"} value="currentlyReading">Currently Reading</option>
            <option selected={props.book.shelf === "wantToRead"}  value="wantToRead">Want to Read</option>
            <option selected={props.book.shelf === "read"}  value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
    </div>
);

export default Book;