import React from 'react';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Preference from './pages/preference/Preference';
import Setting from './pages/setting/Setting';
import Loading from './pages/loading/Loading';
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