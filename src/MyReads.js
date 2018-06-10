import React from 'react'
import BookShelf from './BookShelf'

const MyReads = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {props.bookShelves.map(m => <BookShelf title={m.title} books={m.books} />)}           
        </div>
        <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
    </div>
)

export default MyReads;