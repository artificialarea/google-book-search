import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ResultsContainer from './ResultsContainer/ResultsContainer';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [], 
      // moving stateful paramaters to SearchBar
      // q: '',
      // printType: '',
      // filter: '', 
    }
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(key => {
      if (params[key] !== '') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      }     
    });
    return queryItems.join('&');
  }

  fetchBooks() {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes';
    const apiKey = ''; /* don't git add/commit */

    // const options = {
    //   headers: new Headers({
    //     'Authorization': 'Bearer ' + apiKey,
    //   })
    // };

    const params = {
      q: this.state.q,
      printType: this.state.printType,
      filter: this.state.filter,
      key: apiKey, // may put in options/header later...
    };

    const queryString = this.formatQueryParams(params);
    const url = baseURL + '?' + queryString;

    // fetch(url, options)
    fetch(url)

  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">

        <SearchBar 

        />

        <ResultsContainer items={this.state.items} />
        
      </div>
    );
  }
}
