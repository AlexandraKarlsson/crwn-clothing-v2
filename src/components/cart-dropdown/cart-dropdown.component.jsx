import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import {selectCartItems} from "../../store/cart/cart.selector";
import { useSelector} from "react-redux";

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
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