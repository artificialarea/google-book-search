import React from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem';

export default class BookList extends React.Component {
  render() {
    return (
      <div className="BookList">
        <BookItem items={this.props.items}/>
      </div>
    );
  }
}