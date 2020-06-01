import React from 'react';
import ReactDOM from 'react-dom';
import BookItem from './BookItem';

describe('<BookItem />', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookItem />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});