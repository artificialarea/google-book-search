import React from 'react';
import ReactDOM from 'react-dom';
import FilterBookType from './FilterBookType';

describe('<FilterBookType />', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FilterBookType />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});