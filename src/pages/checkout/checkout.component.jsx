import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import  CheckOutItem  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckOutPage = ({ cartItems, totalVal }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem => (
				<CheckOutItem key={cartItem.id} cartItem={cartItem}></CheckOutItem>
			))
		}
		<div className="total">
			<span>Total: ${totalVal}</span>
		</div>
		<div className="test-warning">
			*Please use the following for test payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeCheckoutButton price={totalVal}></StripeCheckoutButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalVal: selectCartTotal
})


export default connect(mapStateToProps)(CheckOutPage);