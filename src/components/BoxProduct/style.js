import styled from "styled-components";

export const ProductBox = styled.div`
position: relative;
  height: 300px;
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 13px;
  justify-content: space-between;
  align-items: center;
  background: #333;
  margin-top: 13px;

  border-radius: 13px;

  div {
    display: flex;
  }
  img {
    height: 130px;
    width: 150px;
    border-radius: 13px;
  }

  button {
    align-self: flex-end;
    background: #7a0415;
    color: #111;
    border: none;
    border-radius: 13px;
    height: 20px;
    
  }
  p {
    :first-of-type {
      font-weight: 700;
      margin: 13px 0;
    }
    text-align: left;
  }
`;