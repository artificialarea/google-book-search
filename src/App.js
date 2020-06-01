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
