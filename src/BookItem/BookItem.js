import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component {

  static defaultProps = {
    imageLinks: '',
  }
  render() {
    return (
      <li className="BookItem">
        <div>
          <img src={this.props.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
        </div>
        <div>
          <h2 className="title">{this.props.volumeInfo.title}</h2>
          <p className="author">Author: {this.props.volumeInfo.authors}</p>
          {/* some books not for sale, ergo inline conditional render */}
          {this.props.saleInfo.listPrice && <p className="price">Price: $ {this.props.saleInfo.listPrice.amount}</p>}
          {this.props.searchInfo && <p className="description">{this.props.searchInfo.textSnippet}</p>}
          <a href={this.props.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="btn">See Full Details</a>
        </div>
      </li>
    );
  }
}