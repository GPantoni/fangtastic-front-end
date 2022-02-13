import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import SideBar from '../SideBar/index';
import { HeaderBox } from './style';

import CART from '../../assets/cart.svg';
import MENU from '../../assets/menu.svg';
import arrow from "../../assets/arrow-undo.svg";

import CartContext from '../../contexts/CartContext';

export default function Header({ setType, toProducts }) {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);

  const { cart, editCart } = useContext(CartContext); //caso cart nao esteja vazio, colocar notificacao no ícone

  return (
    <HeaderBox>
      {sideBar && <SideBar setSideBar={setSideBar} setType={setType} />}
      {toProducts? (
        <img src={arrow} alt="return" onClick={() => navigate("/products")} />
      ) : (
        <img src={MENU} alt="menu" onClick={() => setSideBar(true)} />
      )}
      <h1 className='logo' onClick={() => navigate("/")}>fangtastic</h1>
      <img src={CART} alt="cart" onClick={() => navigate("/cart")} />
    </HeaderBox>
  );
}

