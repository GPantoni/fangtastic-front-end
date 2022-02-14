import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductBox } from "./style";
import CartContext from "../../contexts/CartContext";

export default function BoxProduct(props) {
  const { addToCart } = useContext(CartContext);

  return (
    
      <ProductBox className="box-shadow">
        <Link to={`/product/${props.data._id}`}>
        <img src={props.data.image} alt="" />
        <p>{props.data.name}</p>
        <p>R${props.data.price},00</p>
        </Link>
        <button
          onClick={() => {

            addToCart(props.data._id, props.cartList);
          }}
        >
          +
        </button>
      </ProductBox>
    
  );
}
