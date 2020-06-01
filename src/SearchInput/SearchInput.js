import React from 'react';
import './SearchInput.css';

export default class SearchInput extends React.Component {
  render() {
    return (
      <div className="SearchInput">
        <form>
          <label htmlFor="search">Search by title:</label>
          <input 
            type="text" 
            name="search" 
            placeholder="type here..."
            // value={this.state.q}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}