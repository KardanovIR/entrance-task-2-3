import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


import './css/main.css'

import Schedule from './js/Schedule'
import Add from './js/Add'

import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset';
import {createHttpLink} from 'apollo-link-http';
import gql from 'graphql-tag'
import {graphql, ApolloProvider} from 'react-apollo'

import './js/Modal'

const client = new ApolloClient({
	link: createHttpLink({uri: 'http://localhost:3010/graphql'}),
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {
			fetchPolicy: 'network-only',
			errorPolicy: 'all',
		},
		watchQuery: {
			fetchPolicy: 'network-only',
			errorPolicy: 'ignore',
		},
	}
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<div>
						<header className="app-header">
							<div className="app-header-left-container">
								<div className="app-header-item">
									<div className="app-header-main-logo">
										<Link to="/">
											<img src="assets/logo.svg" alt="Яндекс Переговорки" height="32" width="174"/>
										</Link>
									</div>
								</div>
							</div>
							<div className="app-header-right-container">
								<Link className="button button-default" title="Создать встречу" to="/add">
									<span className="mail-ComposeButton-Text">Создать встречу</span></Link>
							</div>
						</header>
						
						{/*Routers*/}
						<Route exact path="/" id={1} component={Schedule}/>
						<Route path="/add" id={2} component={Add}/>
						<Route path="/add/:id" id={1} component={Add}/>
					</div>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
