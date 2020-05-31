import React from 'react';
import ReactDOM from 'react-dom';
import FilterPrintType from './FilterPrintType';

describe('<FilterPrintType />', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FilterPrintType />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});