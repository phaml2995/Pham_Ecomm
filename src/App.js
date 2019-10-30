import React from 'react';
import './App.css';
import  {Switch,Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-reg/signin-and-reg.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currenUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currenUser: user});
			console.log(user);
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render()
	{
		return(
			<div>
				<Header currenUser = {this.state.currenUser}/>
				<Switch>
					<Route exact path = '/' component = {Homepage} />
					<Route path = '/shop' component = {ShopPage}/>
					<Route path = '/signin' component = {SignInAndSignUpPage}/>
				</Switch>	
			</div>
		);
	}
}

export default App;
