import { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container } from './style';

import api from '../../services/api';

export default function Cart() {
  const [productData, setProductData] = useState(null);
  useEffect(getCart, []);
  const toProducts = true

  function getCart() {
    //GET cart
    //if logged in, get through api
    let cart = [];
    const cartIds = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.map((item) => {
      cartIds.push(item.id);
    });

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
  if (!productData) {
    return '';
  }
  return (
    <>
      <Header toProducts={toProducts}/>
      <Container>
        {productData.map((product) => 
          Product(product)
        )}
        <button>Prosseguir para compra</button>
      </Container>
    </>
  );
}
