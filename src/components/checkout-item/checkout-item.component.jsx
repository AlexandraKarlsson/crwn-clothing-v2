import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {CheckoutItemContainer, ImageContainer, ItemImage, ItemName, ItemPrice, QuantityContainer, Arrow, ItemQuantity, ItemRemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

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