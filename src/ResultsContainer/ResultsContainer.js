import React from 'react';
import './ResultsContainer.css';
import BookList from '../BookList/BookList';

export default class ResultsContainer extends React.Component {

  static defaultProps = {
    items: [],
  }

  render() {
    return (
      <div className="ResultsContainer">
        {this.props.error && <p className="error">{this.props.error}</p>}
        <BookList items={this.props.items} />
      </div>
    );
  }
}