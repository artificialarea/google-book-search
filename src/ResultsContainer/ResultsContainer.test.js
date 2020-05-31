import React from 'react';
import ReactDOM from 'react-dom';
import ResultsContainer from './ResultsContainer';

describe('<ResultsContainer />', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ResultsContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});