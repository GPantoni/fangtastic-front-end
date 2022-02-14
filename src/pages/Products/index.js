import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header/index";
import BoxProduct from "../../components/BoxProduct/index";
import { Container } from "./style";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("");
  const [cartList, setCartList] = useState([])

  function checkCart() {
    if (localStorage.getItem("cart")) {
      setCartList(JSON.parse(localStorage.getItem("cart")))
    }
  }
  

  useEffect(() => {
    checkCart();
    const promise = axios.get("https://back-fangtastic.herokuapp.com/products", {
      headers: {
        Type: `${type}`,
      },
    });
    promise.then((response) => {
      setProducts(response.data);
    });
    promise.catch((error) => console.log(error.response));

  }, [type]);

  

  return (
    <>
      <Header setType={setType} />
      <Container>
        {products.map((item) => (
          <BoxProduct data={item} key={item._id} cartList={cartList} />
        ))}
      </Container>
    </>
  );
}
