import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';

class BooksApp extends React.Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired,
  }
  state = {
    bookShelves: []    
  }

  componentDidMount() {
    BooksAPI.getAll().then(t => this.setState(() => ({
      bookShelves: this.setupBookShelves(t)
    })));
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads bookShelves={this.state.bookShelves}/>
        )}>
        </Route>
        <Route exact path='/search' component={Search}>
        </Route>
      </div>
    )
  }
  setupBookShelves(books) {
    return [
    {
      title: "Currently Reading",
      books: books.filter(f => f.shelf === 'currentlyReading')
    },
    {
      title: "Want to Read",
      books: books.filter(f => f.shelf === 'wantToRead')
    },
    {
      title: 'Read',
      books: books.filter(f => f.shelf === 'read')
    }];
  }
}

export default BooksApp
