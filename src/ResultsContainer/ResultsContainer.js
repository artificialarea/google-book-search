import React from 'react';
import './ResultsContainer.css';
import BookList from '../BookList/BookList';

export default class ResultsContainer extends React.Component {
  render() {
    return (
      <div className="ResultsContainer">
        <BookList items={this.props.items} />
      </div>
    );
  }
}