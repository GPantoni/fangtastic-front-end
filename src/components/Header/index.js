import { useState } from "react";
import styled from "styled-components";
import SideBar from "../SideBar/index";
import cart from "../../assets/cart.svg";
import menu from "../../assets/menu.svg";

export default function Header({ setType }) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <HeaderBox>
      {sideBar && <SideBar setSideBar={setSideBar} setType={setType} />}
      <img src={menu} alt="menu" onClick={() => setSideBar(true)} />
      <h1>FANGTASTIC</h1>
      <img src={cart} alt="" />
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
