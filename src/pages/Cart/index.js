import { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import { Container } from './style';

import CartContext from '../../contexts/CartContext';

export default function Cart() {

  useEffect(getCart, []);
  //contexto para itens no carrinho

  function getCart() {
    //GET cart
    //if logged in, get through api

    const cartIds = JSON.parse(localStorage.getItem('cart'));
    const cart = [];
    
    console.log(cartIds)

    console.log(cartIds.length)

    console.log(cart)

    /*cart.map(item => {
            if(id === item.id) {
                const source = {quantity: item.quantity + 1}
                item = Object.assign( item, source)
                return;
            }
            item.push({id: id, quantity: 1})
        }) */

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
