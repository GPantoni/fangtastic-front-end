import { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container } from './style';

import api from '../../services/api';

export default function Cart() {
  useEffect(getCart, []);
  //contexto para itens no carrinho

  function getCart() {
    //GET cart
    //if logged in, get through api

    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartIds = [];

    console.log(cart);

    cart.map((item) => {
      cartIds.push(item.id);
    });
    console.log(cartIds);

    getProductData();

    //else, get from localstorage
    //either way, we end up with product ids for cart
  }

  function getProductData(ids) {
    const promise = api.getProductsById(ids);
    //send ids to api
    //map res array into Product component
  }

  return (
    <>
      <Header />
      <Container>
        <Product />
        <Product />
        <button>Prosseguir para compra</button>
      </Container>
    </>
  );
}
