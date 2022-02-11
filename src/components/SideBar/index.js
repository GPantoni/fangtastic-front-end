import styled from "styled-components";

export default function SideBar({ setType, setSideBar }) {
  return (
    <SideBarBox>
      <Left>
        <h1>FILTROS:</h1>
        <p onClick={() => setType("")}>Todos</p>
        <p onClick={() => setType("vestuario")}>Vestuario</p>
        <p onClick={() => setType("comida")}>Alimentos</p>
        <p onClick={() => setType("acessorio")}>Serviços</p>
      </Left>
      <Right onClick={() => setSideBar(false)}></Right>
    </SideBarBox>
  );
}

const SideBarBox = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  height: 100vh;
  background-color: #757575;
  padding: 20px;
  p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  h1 {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 25px;
  }
`;
const Right = styled.div`
  height: 100vh;
  width: 40%;
  background-color: black;
  opacity: 0.3;
`;
