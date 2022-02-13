import styled from "styled-components";

export const ProductBox = styled.div`
position: relative;
  height: 300px;
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 15px; //for some reason this is not centered horizontally
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
    border-radius: 15px;
    height: 30px;
    width: 30px;

    font-size: 20px;
    font-weight: 900;
    color: #420d14;
    
  }
  p {
    :first-of-type {
      font-weight: 900;
      font-size: 20px;
      margin: 13px 0;
      
    }
    text-align: left;
  }
`;