import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './BookList';

describe('<BookList />', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});