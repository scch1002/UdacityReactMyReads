import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class Search extends Component {
    state = {
        searchText: '',
        searchBooks: [],
        emptyQuery: true   
    }
    onSearchTextChange = (event) => {
        this.setState({
            searchText: event.target.value
        },
        () =>
        BooksAPI.search(this.state.searchText)
            .then(t => {
                if (t !== undefined && t.error === undefined){
                    var searchBooks = [];
                    for(let book of t) {
                        var includedInMyBooks = this.props.myBooks.find(f => f.id === book.id);
                        if (includedInMyBooks !== undefined){
                            searchBooks.push(includedInMyBooks);
                        }
                        else {
                            searchBooks.push(book);
                        }                       
                    }
                    this.setState({
                        searchBooks: searchBooks,
                        emptyQuery: false
                        });
                }
                else {
                    this.setState({
                        searchBooks: [],
                        emptyQuery: true
                    })
                }
            })
        );
    }
    render () {
        return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" onChange={this.onSearchTextChange} value={this.state.searchText} placeholder="Search by title or author"/>
                </div>
            </div>
            <div className="search-books-results">
                { this.state.emptyQuery ?
                    'Empty Query'
                :
                    <BookShelf title="Search Results" moveBookToDifferentShelf={this.props.moveBookToDifferentShelf} books={this.state.searchBooks} />
                }
            </div>
        </div>
    )}
}
export default Search;