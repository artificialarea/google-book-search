import React from 'react';
import './SearchBar.css';
import SearchInput from '../SearchInput/SearchInput';
import FilterPrintType from '../FilterPrintType/FilterPrintType'
import FilterBookType from '../FilterBookType/FilterBookType';


export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <header>
          <h1>Google Book Search</h1>
        </header>
        
        <SearchInput handleQuery={this.props.handleQuery}/>

        <div className="filters">
          <FilterPrintType handlePrintType={this.props.handlePrintType}/>
          <FilterBookType handleBookType={this.props.handleBookType}/>
        </div>
        
      </div>
    );
  }
}