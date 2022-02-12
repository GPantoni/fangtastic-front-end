import { useContext } from 'react';

import { ProductBox } from './style'

import CartContext from '../../contexts/CartContext';


export default function Product( props ) {
  const { cart, addToCart } = useContext(CartContext)

  return (
    <ProductBox>
      <img src={props.data.image} alt="" />
      <p>{props.data.name}</p>
      <p>R${props.data.price},00</p>
      <button onClick={() => {addToCart(props.data._id, props.cartList)}}>Buy!</button>
    </ProductBox>
  );
}
