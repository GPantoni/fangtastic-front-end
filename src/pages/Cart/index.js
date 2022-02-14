import { useEffect, useState, useContext, useReducer } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container, StyledLink } from './style';

//add sweetalert lib for confirm

import api from '../../services/api';

export default function Cart() {
  const [productData, setProductData] = useState(null);
  const [cartIds, setCartIds] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(getCart, []);
  const toProducts = true

  let cart = []

  function getCart() {
    //GET cart
    //if logged in, get through api
    
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
    });
    promise.catch();
  }

  function emptyCart() {
    localStorage.removeItem('cart')
  }

  function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.price);
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
