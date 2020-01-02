import React from 'react';
import './App.css';

import  {Switch,Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/signin-and-reg/signin-and-reg.component';



import { selectCurrentUser } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
	

	unsubscribeFromAuth = null
	

	componentDidMount(){
		const { checkUserSession } = this.props;
		checkUserSession();
		
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render()
	{
		return(
			<div>
				<Header />
				<Switch>
					<Route exact path = '/' component = {Homepage} />
					<Route path = '/shop' component = {ShopPage}/>
					<Route 
						exact 
						path = '/signin' 
						render={() => this.props.currentUser ? (<Redirect to ='/'/>) : (<SignInAndSignUpPage />)}/>

					<Route exact path = '/checkout' component = {CheckOutPage}/>
				</Switch>	

			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
