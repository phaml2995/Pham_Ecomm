import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signup.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {displayName, email, phone, password, confirmPassword} = this.state;

		if (password !== confirmPassword) {
			alert("Password Don't Match")
			return;
		} 

		try {

			const { user } = await auth.createUserWithEmailAndPassword(email,password);

			await createUserProfileDocument(user, { displayName, phone });

			this.setState({         //To clear the SIGN UP form afterwards
				displayName: '',
				email: '',
				phone: '',
				password: '',
				confirmPassword: ''
			})
		} catch (error) {
			console.error(error);
		}
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({[name]: value});
	}

	render() {
		const {displayName, email, phone, password, confirmPassword} = this.state;
		return (

			<div className = 'sign-up'>
				<h2 className = 'title'> I Don't Have An Account</h2>
				<span>Sign Up With Your Email And Password</span>
				<form className = 'sign-up-form' onSubmit={this.handleSubmit} >
					<FormInput 
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Name'
						required
					/>
					<FormInput 
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput 
						type='number'
						name='phone'
						value={phone}
						onChange={this.handleChange}
						label='Phone Number'
						required
					/>
					<FormInput 
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput 
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>		
					<CustomButton type='submit'>SIGN UP</CustomButton>	
				</form>
			</div>

		)
	}
}

export default SignUp;