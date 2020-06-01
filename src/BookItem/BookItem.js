import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component {
  render() {
    return (
      <li className="BookItem">
        <h2 className="title">{this.props.volumeInfo.title}</h2>
        <img src={this.props.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
        <p className="author">by {this.props.volumeInfo.authors}</p>
        {/* some books not for sale, ergo inline conditional render */}
        {this.props.saleInfo.listPrice && <p className="price">{this.props.saleInfo.listPrice.amount} {this.props.saleInfo.listPrice.currencyCode}</p>}
        <p className="short-description">{this.props.searchInfo.textSnippet}</p>
      </li>
    );
  }
}