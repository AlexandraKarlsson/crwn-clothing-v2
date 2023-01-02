import {useContext} from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {CartContext} from "../../contexts/cart.context";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    const navigateToCheckout = useNavigate()

    const goToCheckoutHandler = () => {
        navigateToCheckout('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length > 0 ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>):
                    <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown;