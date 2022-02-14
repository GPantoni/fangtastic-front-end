import { useEffect, useState, useContext, useReducer } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container, StyledLink } from './style';


import api from '../../services/api';

export default function Cart() {
  const [productData, setProductData] = useState(null);
  const [cartIds, setCartIds] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(getCart, []);
  const toProducts = true

  let cart = []

  function getCart() {
    
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.map((item) => {
      cartIds.push(item.id);
    });

    getProductData(cartIds);

  }

  function getProductData(ids) {
    const promise = api.getProductsById(ids);
    promise.then((res) => {
      setProductData(res.data);
      calculateTotal(res.data)
    });
    promise.catch();
  }

  function emptyCart() {
    localStorage.removeItem('cart')
  }

  function calculateTotal(items) {
    let total = 0;
    console.log(items)

    
    items.forEach(item => {
      const price = parseFloat(item.price)
      console.log(cart)
      const itemData = cart.find(cartItem => cartItem.id === item._id);
      const quantity = parseFloat(itemData.quantity)
      total += parseFloat(price*quantity);
    })
    setCartTotal(total);
  }

  if (!productData || !cart) {
    return '';
  }
  return (
    <>
      <Header toProducts={toProducts}/>
      <Container>
        {productData.map((product) => 
          <Product product={product}/>
        )}
        <p>Total: R$ {cartTotal}</p>
        <div>
        <button onClick={() => emptyCart()}>Esvaziar carrinho</button>
        <StyledLink to='/checkout'>
        Prosseguir para compra</StyledLink>
        </div>
      </Container>
    </>
  );
}
