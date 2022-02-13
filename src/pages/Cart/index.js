import { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container } from './style';

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
  if (!productData || !cart) {
    return '';
  }
  return (
    <>
      <Header />
      <Container>
        {productData.map((product) => 
          <Product product={product}/>
        )}
        <button>Prosseguir para compra</button>
      </Container>
    </>
  );
}
