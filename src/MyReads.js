import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link
                to='/search'>
            </Link>
        </div>
    </div>
)

export default MyReads;