import { Wrapper } from "./style";

export default function Product(props) {
  return (<Wrapper className="wrapperDiv">
    <img src={props.image}/>
    <p >{props.name}</p>
    <p>R$ {props.price},00</p>
  </Wrapper>);
}
