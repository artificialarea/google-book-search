import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './SearchInput';

describe('<SearchInput />', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchInput />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});