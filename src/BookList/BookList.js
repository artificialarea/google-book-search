import React from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem';

export default class BookList extends React.Component {
  render() {
    const { items } = this.props;
    const item = items.map((item, index) => 
      <BookItem 
        {...item} // spread operator passes all the item properties down
        key={index}
      />
    );

    return (
      <ul className="BookList">
        {item}
      </ul>
    );
  }
}