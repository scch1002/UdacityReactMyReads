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
                    this.setState({
                    searchBooks: t,
                    emptyQuery: false
                    })
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
                    <BookShelf title="Search Results" books={this.state.searchBooks} />
                }
            </div>
        </div>
    )}
}
export default Search;