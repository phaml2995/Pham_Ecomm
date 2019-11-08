import React from 'react';

import {ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => ( //functional component
	<div className ='cart-icon' onClick={toggleCartHidden} > 
		<ShoppingIcon className='shopping-icon'/>
		<span className='item-count'>{itemCount}</span>
	</div>
)

//Selector: only select the qiantity of the state cartItems
const mapStateToProps = state  => ({
	itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);