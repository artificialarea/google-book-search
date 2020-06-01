import React from 'react';
import './FilterBookType.css';

export default class FilterBookType extends React.Component {
  render() {
    return (
      <div className="FilterBookType">
        <label htmlFor="BookType">Book Type:</label>
        <select onChange={event => this.props.handleBookType(event.target.value)}>
          <option value="">Any</option>
          <option value="ebooks">ebooks</option>
          <option value="free-ebooks">Free ebooks</option>
        </select>
      </div>
    );
  }
}