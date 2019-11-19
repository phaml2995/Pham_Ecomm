import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_SK22ffji2HCoDnwHUXh56rt8004rwXLZTP"
	
	const onToken  = token =>{
		console.log(token);
		alert('Paymen Successful');
	}

	return(
		<StripeCheckout 
		label = 'Pay Now' 
		name='Solar Clothing Ltd.'
		billingAddress
		shippingAddress
		image = 'https://sendeyo.com/up/d/f3eb2117da'
		description = {`Your Total Is $${price}`}
		amount = {priceForStripe}
		paneLabel = 'Pay Now'
		token = {onToken}
		stripeKey = {publishableKey}
		/>	
	)
}

export default StripeCheckoutButton;