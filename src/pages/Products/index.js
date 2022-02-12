import axios from "axios";
import { useState, useEffect, useContext } from "react";

import Header from "../../components/Header/index";
import Product from "../../components/Product/index";

import { Container } from "./style";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("");
  let cartList = [];

  function checkCart() {

    if(localStorage.getItem('cart')) {
      cartList = JSON.parse(localStorage.getItem('cart'))
    }
  }

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/products", {
      headers: {
        Type: `${type}`,
      },
    });
    promise.then((response) => {
      setProducts(response.data);
    });
    promise.catch((error) => console.log(error.response));
  }, [type]);

  checkCart();

  return (
    <>
      <Header setType={setType} />
      <Container>
        {products.map((item) => (
          <Product data={item} key={item._id} cartList={cartList}/>
        ))}
      </Container>
    </>
  );
}
