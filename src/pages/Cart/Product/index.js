import { Wrapper } from "./style";

export default function Product(props) {
    console.log(props)
  return (<Wrapper className="wrapperDiv">
  <img src={props.image}/>
    <p >{props.name}</p>
    <p>R$ {props.price}</p>
  </Wrapper>);
}
