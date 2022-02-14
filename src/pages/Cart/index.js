import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Product from "./Product";
import { Container, StyledLink } from "./style";
import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);
  const [cartIds] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(getCart, []);
  const toProducts = true;
  const { setPrice } = useContext(AuthContext);

  let cart = [];
  
  function getCart() {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.forEach((item) => {
      cartIds.push(item.id);
    });

    getProductData(cartIds);
  }

  function getProductData(ids) {
    if (ids.length > 0) {
      const promise = api.getProductsById(ids);
      promise.then((res) => {
        setProductData(res.data);
        calculateTotal(res.data);
      });
      promise.catch();
    }
  }

  function emptyCart() {
    localStorage.removeItem("cart");
    setProductData(null);
  }

  function calculateTotal(items) {
    let total = 0;

    items.forEach((item) => {
      const price = parseFloat(item.price);
      const itemData = cart.find((cartItem) => cartItem.id === item._id);
      const quantity = parseFloat(itemData.quantity);
      total += parseFloat(price * quantity);
    });
    setCartTotal(total);
  }

  function handleFinish() {
    setPrice(cartTotal);
    navigate("/checkout");
  }

  if (!productData || !cart) {
    return (
      <>
        <Header toProducts={toProducts} />
        <Container>
          <p>Carrinho vazio!</p>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header toProducts={toProducts} />
      <Container>
        {productData.length > 0 ? (
          productData.map((product) => (
            <Product product={product} key={product._id} />
          ))
        ) : (
          <h1>Carrinho vazio!</h1>
        )}
        <p>Total: R${cartTotal},00</p>
        <div>
          <button onClick={() => emptyCart()}>Esvaziar carrinho</button>
          <StyledLink onClick={() => handleFinish()}>
            Prosseguir para compra
          </StyledLink>
        </div>
      </Container>
    </>
  );
}
