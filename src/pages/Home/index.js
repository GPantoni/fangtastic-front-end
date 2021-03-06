import styled from "styled-components";
import HOME from '../../assets/home.jpg'
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
  background-image: url(${HOME});
  background-position: center;
  background-size: cover;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    position: fixed;
    top: 33vh;
    .logo {
      font-size: 64px;
    }
  }
  div{
    display: flex;
    flex-direction: column;
    margin-top: 350px;
    gap: 10px;
  }
`;
