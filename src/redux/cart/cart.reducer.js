import  CartActionTypes  from './cart.types';
import { addItemToCart, subtractItemFromCart } from './cart.utils'

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems,action.payload) //spread in existing items + new added items
			};

		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			};

		case CartActionTypes.SUBTRACT_ITEM:
			return {
				...state,
				cartItems: subtractItemFromCart(state.cartItems,action.payload)
			};

		case CartActionTypes.CLEAR_CART:
			return{
				...state,
				cartItems: []
			}
			
		default:
			return state;
	}
}

export default cartReducer;