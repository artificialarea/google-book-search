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
      filter: '', 
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

  formatQueryParams(params) {
    // remove object properties if empty (default parameters)
    if (params['filter'] === '') {
      delete params['filter']
    } 
    if (params['printType'] === '') {
      delete params['printType']
    }

    const queryItems = Object.keys(params).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    });
    console.log(queryItems)
    return queryItems.join('&');
  }

  fetchBooks(event) {
    event.preventDefault();
    const baseURL = 'https://www.googleapis.com/books/v1/volumes';
    const apiKey = ''; /* DON'T GIT ADD/COMMIT */

    // const options = {
    //   headers: new Headers({
    //     'Authorization': 'Bearer ' + apiKey,
    //   })
    // };

    const params = {
      q: this.state.q,
      printType: this.state.printType,
      filter: this.state.filter,
      key: apiKey, // may pass within headers later...
    };

    const queryString = this.formatQueryParams(params);
    const url = baseURL + '?' + queryString;
    console.log(url);

    // fetch(url, options)
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error()
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(err => {
        console.log(err.message);
        this.setState({
          error: err.message,
        })
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
          handleSubmit={event => this.fetchBooks(event)}
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
     