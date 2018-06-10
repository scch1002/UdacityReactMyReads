import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    initialLoad: false,
    myBooks: []    
  }
  componentDidMount() {
    if (!this.state.initialLoad) {
      BooksAPI.getAll().then(t => this.setState(() => ({
        initialLoad: true,
        myBooks: t
      })));
    }
  }
  moveBookToDifferentShelf = (book, shelf) => {
    if (book.shelf === undefined) {
      this.setState((prevState) => {
        book.shelf = shelf;
        prevState.myBooks.push(book);
        return { 
          myBooks: prevState.myBooks
        };
      }, () => BooksAPI.update(book, shelf));
    } else if (shelf === 'none') {
      book.shelf = 'none';
      this.setState((prevState) => {
        prevState.myBooks.splice(prevState.myBooks.indexOf(book), 1);
        return { 
          myBooks: prevState.myBooks
        };
      }, () => BooksAPI.update(book, shelf));
    } else {
      this.setState((prevState) => {
        book.shelf = shelf;
        return { 
          myBooks: prevState.myBooks
        };
      }, () => BooksAPI.update(book, shelf));
    }
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads moveBookToDifferentShelf={this.moveBookToDifferentShelf} books={this.state.myBooks}/>
        )}>
        </Route>
        <Route exact path='/search' render={() => (
          <Search moveBookToDifferentShelf={this.moveBookToDifferentShelf} myBooks={this.state.myBooks} />
        )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
