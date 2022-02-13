import { findDOMNode } from "react-dom";
import { Wrapper } from "./style";

export default function Product(props) {

  let quantity = 0
  function matchQuantityToId() {
    const thisItem = (JSON.parse(localStorage.getItem('cart'))).find(item => item.id == props.product._id) //will have to change to props once cart is acquired through login token
    quantity = thisItem.quantity
  }
  matchQuantityToId()
  return (<Wrapper className="wrapperDiv">
  <img src={props.product.image}/>
    <p >{props.product.name}</p>
    <p>R$ {props.product.price}</p>
    <p>Quantidade: {quantity}</p>
  </Wrapper>);
}
