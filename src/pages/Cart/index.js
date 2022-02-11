import { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container } from './style';

export default function Cart() {
  useEffect(renderCart, []);
  //contexto para itens no carrinho

  function renderCart() {
    //GET cart
    //if logged in, get through api
    //else, get from localstorage
    //either way, we end up with product ids for cart
  }

  function getProductData() {
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
