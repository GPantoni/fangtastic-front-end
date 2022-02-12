import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/index";
import BoxProduct from "../../components/BoxProduct/index";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("");

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

  return (
    <>
      <Header setType={setType} />
      <Container>
        {products.map((item) => (
          <BoxProduct data={item} key={item._id} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-color: #e5e5e5;
  justify-content: space-between;
  gap: 10px;
  padding: 60px 20px;
  overflow: auto;
`;
