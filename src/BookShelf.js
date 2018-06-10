import React from 'react'

const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {props.books.map(m => <li><Book book={m} /></li>)}
        </ol>
        </div>
    </div>
)