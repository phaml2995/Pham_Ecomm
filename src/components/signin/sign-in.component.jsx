import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const Signin = ({ emailSignInStart, googleSignInStart }) => {
	
	const [userCredentials, setCredentials] = useState({email:'',password:''})
	const { email, password } = userCredentials


	const handleSubmit = async event => {
		event.preventDefault();
		
		emailSignInStart(email,password);
		
	}

	const handleChange = (event) => {
		const {value,name}  = event.target;
		setCredentials({...userCredentials, [name]: value });
	}
	
	return (
		<div className = 'sign-in'>
			<h2>I already have an account</h2>
			<span>Signin with your email and password</span>

			<form onSubmit = {handleSubmit}>
				<FormInput 
				name = "email" 
				type ='email' 
				label = 'email'
				handleChange = {handleChange} 
				value = {email} 
				required
				/>
				<FormInput 
					name = "password" 
					type ='password'  
					label = 'password'
					value = {password}
					handleChange = {handleChange} 
					required
					
				/>
				<div className = 'buttons'>
					<CustomButton type='submit'>Sign in</CustomButton>
					<CustomButton  
						type= 'button' 
						onClick={googleSignInStart} 
						isGoogleSignIn>Google Sign In
					</CustomButton>
				</div>
			</form>
		</div>
	)
	
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})


export default connect(null,mapDispatchToProps)(Signin);
