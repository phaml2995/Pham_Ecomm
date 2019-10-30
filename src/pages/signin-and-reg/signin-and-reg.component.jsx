import React from 'react';
import './signin-and-reg.styles.scss';
import Signin from '../../components/signin/sign-in.component'; 
import SignUp from '../../components/signup/signup.component';
const SignInAndSignUpPage = () => (

	<div className = 'signin-and-reg'>
		<Signin />
		<SignUp />
	</div>
)

export default SignInAndSignUpPage;