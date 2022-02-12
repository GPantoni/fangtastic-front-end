import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../SideBar/index";
import cart from "../../assets/cart.svg";
import menu from "../../assets/menu.svg";
import arrow from "../../assets/arrow-undo.svg";

export default function Header({ setType, toProducts }) {
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderBox>
      {sideBar && <SideBar setSideBar={setSideBar} setType={setType} />}
      {toProducts ? (
        <img src={arrow} alt="return" onClick={() => navigate("/products")} />
      ) : (
        <img src={menu} alt="menu" onClick={() => setSideBar(true)} />
      )}
      <h1>FANGTASTIC</h1>
      <img src={cart} alt="cart" onClick={() => navigate("/cart")} />
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  height: 50px;
  width: 100vw;
  background-color: #582e6d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  position: fixed;
  top: 0px;
  left: 0px;
  img {
    width: 30px;
    height: 50px;
  }
  h1 {
    font-weight: bold;
  }
`;
