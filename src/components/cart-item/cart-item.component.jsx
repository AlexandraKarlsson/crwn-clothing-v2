import {CartItemContainer, ItemDetailsContainer, ItemName, ItemPrice} from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetailsContainer>
                <ItemName>{name}</ItemName>
                <ItemPrice>{quantity} x {price}</ItemPrice>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;