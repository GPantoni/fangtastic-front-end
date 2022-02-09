import styled from "styled-components";

export default function Product({ data }) {
  return (
    <ProductBox>
      <img src={data.image} alt="" />
      <p>{data.name}</p>
      <p>R${data.price},00</p>
      <button>Buy</button>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  height: 250px;
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #835dba;
  border-radius: 5px;
  img {
    height: 130px;
    width: 150px;
  }
`;
