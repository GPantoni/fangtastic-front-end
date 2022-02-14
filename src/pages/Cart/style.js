import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;

  border-radius: 13px;
  padding: 13px;
  margin: 30px;
  margin-top: 100px;

  background: #333;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.3);
  div {
    width: 100%;
    display: flex;
    gap: 13px;
  }

  button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 13px;
    background: #471018;
    font-size: 17px;
    display: flex;
    align-items: center;
    :first-of-type {
      background: #333;
    }
  }

  .wrapperDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    height: 100px;
    width: 100%;
    padding: 10px;
    border-radius: 6px;

    div {
      display: block;
    }

    .product {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 170px;

      padding: 10px;
    }
  }
`;

export const StyledLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 50px;
  border: none;
  border-radius: 13px;
  background: #471018;
`;
