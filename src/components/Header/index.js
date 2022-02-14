import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/index";
import { HeaderBox } from "./style";
import CART from "../../assets/cart.svg";
import MENU from "../../assets/menu.svg";
import arrow from "../../assets/arrow-undo.svg";

export default function Header({ setType, toProducts, toSuccess }) {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (toSuccess) {
    localStorage.removeItem("cart");
  }

  return (
    <HeaderBox>
      {sideBar && <SideBar setSideBar={setSideBar} setType={setType} />}
      {toProducts || toSuccess ? (
        <img src={arrow} alt="return" onClick={() => navigate("/products")} />
      ) : (
        <img src={MENU} alt="menu" onClick={() => setSideBar(true)} />
      )}
      <h1 className="logo" onClick={() => navigate("/")}>
        fangtastic
      </h1>
      <img src={CART} alt="cart" onClick={() => navigate("/cart")} />
      {cart ? <div className="notification"></div> : ""}
    </HeaderBox>
  );
}
