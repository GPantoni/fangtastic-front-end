import { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container, StyledLink } from './style';

import api from '../../services/api';

export default function Cart() {
  const [productData, setProductData] = useState(null);
  const [cartIds, setCartIds] = useState([])
  useEffect(getCart, []);

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
    //look i forgot to use setCartIds but if it works, it works.
    getProductData(cartIds);

    //else, get from localstorage
    //either way, we end up with product ids for cart
  }

  function getProductData(ids) {
    const promise = api.getProductsById(ids);
    promise.then((res) => {
      setProductData(res.data);
    });
    promise.catch();
    //send ids to api
    //map res array into Product component
  }

  function emptyCart() {
    //confirm
    //if confirm, delete user cart and localstorage cart
  }

  if (!productData || !cart) {
    return '';
  }
  return (
    <>
      <Header />
      <Container >
        {productData.map((product) => 
          <Product product={product}/>
        )}
        <p>Total: R$ 0,00</p>
        <div>
        <button onClick={() => emptyCart()}>Esvaziar carrinho</button>
        <StyledLink to='/checkout'>
        Prosseguir para compra</StyledLink>
        </div>
      </Container>
    </>
  );
}
