import styled from "styled-components";

export const ProductBox = styled.div`
position: relative;
  height: 300px;
  width: 180px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 15px; //for some reason this is not centered horizontally
  justify-content: space-between;
  align-items: center;
  background: #333;

  border-radius: 13px;

  div {
    display: flex;
    
  }
  img {
    height: 150px;
    width: 150px;
    border-radius: 13px;
  }

  button {
    align-self: flex-end;
    background: #000;
    color: #111;
    border: none;
    border-radius: 15px;
    height: 30px;
    width: 30px;

    font-size: 20px;
    font-weight: 900;
    color: #333;

    margin: 0;
    padding: 0;
    
  }
  p {
    margin: 0;
    padding: 0;
    :first-of-type {
      font-weight: 900;
      font-size: 20px;
      margin: 13px 0;
      
    }
    text-align: left;
  }
`;