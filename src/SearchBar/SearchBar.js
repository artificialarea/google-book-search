import React from 'react';
import './SearchBar.css';
import SearchInput from '../SearchInput/SearchInput';
import FilterPrintType from '../FilterPrintType/FilterPrintType'
import FilterBookType from '../FilterBookType/FilterBookType';


export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      q: '',
      printType: '',
      filter: '', // aka bookType
    }
  }

  setQuery(q) {
    this.setState({
      q
    })
  }

  setPrintType(printType) {
    this.setState({
      printType
    })
  }

  setBookType(filter) {
    this.setState({
      filter
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="SearchBar">
        <header>
          <h1>Google Book Search</h1>
        </header>
        
        <SearchInput 
          // handleQuery={this.props.handleQuery}
          // query={this.state.q}
          handleQuery={query => this.setQuery(query)}
        />

        <div className="filters">
          <FilterPrintType 
            // handlePrintType={this.props.handlePrintType}
            // printType={this.state.printType}
            handlePrintType={type => this.setPrintType(type)}
          />
          <FilterBookType 
            // handleBookType={this.props.handleBookType}
            // bookType={this.state.filter}
            handleBookType={type => this.setBookType(type)}
          />
        </div>
        
      </div>
    );
  }
}
     