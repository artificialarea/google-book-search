import React from 'react';
import './SearchInput.css';

export default class SearchInput extends React.Component {
  render() {
    return (
      <div className="SearchInput">
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <label htmlFor="search">Search by title:</label>
          <input 
            type="text" 
            name="search" 
            placeholder="type here..."
            value={this.props.q}
            required
            onChange={(event => this.props.handleQuery(event.target.value))}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}