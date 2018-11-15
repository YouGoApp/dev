import React from 'react';

import Navigation from './pages/navigation/Navigation';

import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combine from './pages/redux/combine';

const store = createStore(
	combine,
	applyMiddleware(
		Thunk
	)
)

export default class App extends React.Component {
	
	render() {
		return (
      <Provider store={store}>
				<Navigation />
			</Provider>
    );
  }
}