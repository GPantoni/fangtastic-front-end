import { Wrapper } from "./style";

export default function Product(props) {

  let quantity = 0
  function matchQuantityToId() {
    if(localStorage.getItem('cart') && props.product) {
      const thisItem = (JSON.parse(localStorage.getItem('cart'))).find(item => item.id === props.product._id) //will have to change to props once cart is acquired through login token
      quantity = thisItem.quantity
    }
    
  }
  matchQuantityToId()
  return (
  props.product ? 
  <Wrapper className="wrapperDiv">
  <div className="product">
  <img src={props.product.image} alt="product" />
  <p >{props.product.name}</p>
  
  </div>
  <div>
  <p>Quantidade: {quantity}</p>
  <p>R$ {props.product.price}</p></div>
</Wrapper>
: 
    ''
  );
}
