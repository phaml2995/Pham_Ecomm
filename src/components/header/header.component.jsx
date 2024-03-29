import React from 'react';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart/cart-dropdown.component';
import {signOutStart} from '../../redux/user/user.actions';

const Header = ({currentUser,hidden, signOutStart}) => (
	
	<HeaderContainer>
		<LogoContainer to = "/">
			<Logo className = 'logo'/>
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to ="/shop">
				SHOP
			</OptionLink>
			<OptionLink to ="/contact">
				CONTACT
			</OptionLink>

			{
				currentUser ?
				(<OptionDiv onClick ={signOutStart} >SIGN OUT</OptionDiv>)
				:
				(<OptionLink to ='/signin'>SIGN IN</OptionLink>)
			}
			<CartIcon />
		</OptionsContainer>
		{}
		{hidden ? null : (<CartDropDown />)}
	</HeaderContainer>

);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);