import React, { Component } from 'react';
import BookShelf from '../components/BookShelf';
import FindAddBook from '../components/FindAddBook';

class Home extends Component {
    render() {
        return (          
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf />
                    </div>
                    <div>
                        <FindAddBook />
                    </div>
                </div>
            </div>
        )}
}

export default Home