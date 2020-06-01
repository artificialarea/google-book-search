import React from 'react';
import './FilterPrintType.css';

export default class FilterPrintType extends React.Component {
  render() {
    return (
      <div className="FilterPrintType">
        <label htmlFor="PrintType">Print Type:</label>
        <select onChange={event => this.props.handlePrintType(event.target.value)}>
          <option value="">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    );
  }
}