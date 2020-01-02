import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import './signup.styles.scss';

const SignUp = ({ signUpStart }) => {
	
	const [userInfo, setUserInfo ] = useState({
		displayName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: ''
	});
	
	const { displayName, email, phone, password, confirmPassword } = userInfo;

	const handleSubmit = async event => {
		event.preventDefault();
		
		if (password !== confirmPassword) {
			alert("Password Don't Match")
			return;
		}
		
		signUpStart({displayName, email, phone, password});

	}

	const handleChange = event => {
		const { name, value } = event.target;

		setUserInfo({...userInfo ,[name]: value});
	}

	return (

		<div className = 'sign-up'>
			<h2 className = 'title'> I Don't Have An Account</h2>
			<span>Sign Up With Your Email And Password</span>
			<form className = 'sign-up-form' onSubmit={handleSubmit} >
				<FormInput 
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Name'
					required
				/>
				<FormInput 
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput 
					type='number'
					name='phone'
					value={phone}
					onChange={handleChange}
					label='Phone Number'
					required
				/>
				<FormInput 
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput 
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>		
				<CustomButton type='submit'>SIGN UP</CustomButton>	
			</form>
		</div>

	)
	
}

const mapDispatchToProps = dispatch => ({
	signUpStart: (userInfo) => dispatch(signUpStart(userInfo))
})


export default connect(null,mapDispatchToProps)(SignUp);