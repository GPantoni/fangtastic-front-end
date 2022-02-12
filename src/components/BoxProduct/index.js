import styled from "styled-components";
import { Link } from "react-router-dom";

export default function BoxProduct({ data }) {
  function handleBuy(){
    console.log('Comprei o item ' + data.name)
  }
 
  return (
    <Link to={`/product/${data._id}`}>
    <ProductBox>
      <img src={data.image} alt="" /> 
      <p>{data.name}</p>
      <p>R${data.price},00</p>
      <button onClick={handleBuy}>Buy</button>
    </ProductBox>
    </Link>
  );
}

const ProductBox = styled.div`
  height: 250px;
  width: 160px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #835dba;
  border-radius: 5px;
  text-align: center;
  img {
    height: 130px;
    width: 150px;
  }
`;
