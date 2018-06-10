import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const MyReads = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <BookShelf title='Currently Reading' moveBookToDifferentShelf={props.moveBookToDifferentShelf} books={props.books.filter(f => f.shelf === 'currentlyReading')} /> 
            <BookShelf title='Want to Read' moveBookToDifferentShelf={props.moveBookToDifferentShelf} books={props.books.filter(f => f.shelf === 'wantToRead')} />  
            <BookShelf title='Read' moveBookToDifferentShelf={props.moveBookToDifferentShelf} books={props.books.filter(f => f.shelf === 'read')} />            
        </div>
        <div className="open-search"> 
            <Link
                to='/search'>
            </Link>
        </div>
    </div>
)

export default MyReads;