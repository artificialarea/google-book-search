import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ResultsContainer from './ResultsContainer/ResultsContainer';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [], 
    }
  }

  updateState(data) {
    this.setState({
      items: data['items']
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar handleData={data => this.updateState(data)}/>
        <ResultsContainer items={this.state.items} />
      </div>
    );
  }
}
