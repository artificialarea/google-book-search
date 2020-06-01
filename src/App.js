import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ResultsContainer from './ResultsContainer/ResultsContainer';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [], 
      // maxResults: 10 // default: 10, max: 50
    }
  }

  updateState(data) {
    // REFACTOR?
    // there must be a better way to handle error when
    // fetch response 200.ok but no items
    // Scenario: q: dog, printType: magazines, filter: ebooks
    if (!data['items']) {
      this.setState({
        items: [],
        error: 'Sorry, no books available. Try a different search.'
      })
    } else {
      delete this.state.error;
      this.setState({
        items: data['items']
      })
    }
  }

  updateStateError(err) {
    this.setState({
      error: err,
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar 
          handleData={data => this.updateState(data)}
          handleError={err => this.updateStateError(err)}
        />
        <ResultsContainer 
          items={this.state.items} 
          error={this.state.error}
        />
      </div>
    );
  }
}