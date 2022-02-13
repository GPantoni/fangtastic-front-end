import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import vamp from "../../assets/vamp-bg.jpg";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1 className="logo">fangtastic</h1>
        <div>
          <button onClick={() => navigate("/products")}>Produtos</button>
          <button onClick={() => navigate("/sign-in")}>Entrar</button>
          <button onClick={() => navigate("/sign-up")}>Cadastrar</button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${vamp});
  background-size: cover;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    position: fixed;
    top:50%;
  }
  div{
    display: flex;
    flex-direction: column;
    margin-top: 350px;
    gap: 10px;
  }
  button{
    background-color: #933611;
    border-radius: 15px; 
    font-weight: bold;
    color: white;
    border: solid white 1px;

  }
`;
