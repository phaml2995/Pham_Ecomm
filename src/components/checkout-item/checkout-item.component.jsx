import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss'
import { removeItemFromCart, addItem, subtractItem } from '../../redux/cart/cart.actions';

const CheckOutItem = ({ cartItem, removeItem, addItem, subtractItem}) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return(
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item"/>
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="signs" onClick={()=> subtractItem(cartItem)}>&#10134;</div>
					<span className="value">{quantity}</span>
				<div className="signs" onClick={()=> addItem(cartItem)}>&#10133;</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick ={()=>removeItem(cartItem)}>&#10008;</div>
		</div>

	);
};

const mapDispatchToProps = dispatch => ({
	removeItem : item => dispatch(removeItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	subtractItem: item => dispatch(subtractItem(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);