import {CheckoutItemContainer, ImageContainer, ItemImage, ItemName, ItemPrice, QuantityContainer, Arrow, ItemQuantity, ItemRemoveButton} from './checkout-item.styles';
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action";

const CheckoutItem = ({cartItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ItemImage src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <ItemName>{name}</ItemName>
            <QuantityContainer>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <ItemQuantity>{quantity}</ItemQuantity>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </QuantityContainer>
            <ItemPrice>{price}</ItemPrice>
            <ItemRemoveButton onClick={clearItemHandler}>&#10005;</ItemRemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;