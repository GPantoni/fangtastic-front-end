import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";

export default function Product() {
  const [product, setProduct] = useState({});
  const [cont, setCont] = useState(0);
  const { idProduct } = useParams();
  const toProducts = true;

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/product", {
      headers: {
        id: `${idProduct}`,
      },
    });
    promise.then((response) => {
      setProduct(response.data[0]);
    });
    promise.catch((error) => console.log(error.response));
  }, [idProduct]);

  return (
    <>
      <Header toProducts={toProducts} />
      <Container>
        <img src={product.image} alt="asd" />
        <h1>{product.name}</h1>
        <p>Preço: R${product.price},00</p>
        <p>Quantidade: </p>
        <Amount>
          <RemoveButton
            onClick={() => (cont > 0 ? setCont(cont - 1) : setCont(0))}
          >
            -
          </RemoveButton>
          <div>{cont}</div>
          <AddButton onClick={() => setCont(cont + 1)}>+</AddButton>
        </Amount>
        <button
          onClick={() => console.log(`Voce comprou ${cont} ${product.name}, totalizando R$${product.price*cont},00`)}
        >
          Comprar
        </button>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #835dba;
  gap: 10px;
  img {
    margin-top: 70px;
    width: 300px;
    height: 300px;
    background-color: white;
  }
`;

const Amount = styled.div`
  display: flex;
  div {
    display: flex;
    height: 20px;
    width: 25px;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
  }
`;

const RemoveButton = styled.button`
  all: unset;
  display: flex;
  height: 20px;
  width: 25px;
  align-items: center;
  justify-content: center;
  background-color: grey;
  border-radius: 10px 0px 0px 10px;
`;
const AddButton = styled.button`
  all: unset;
  display: flex;
  height: 20px;
  width: 25px;
  align-items: center;
  justify-content: center;
  background-color: grey;
  border-radius: 0px 10px 10px 0px;
`;
