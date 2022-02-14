import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../../contexts/AuthContext"

import api from "../../../services/api";

export default function FormOfPayment(props) {
    const navigate = useNavigate()
    const { token } = useContext(AuthContext);
    const cart = JSON.parse(localStorage.getItem('cart'))

    function handleClickOrder() {
        const order = {
            cart: [cart],
            formOfPayment: props.type
        }
        const promise = api.sendOrder(order, token)
        promise.then(navigate('/success'))
      }
    return(<div onClick={() => handleClickOrder()}>
        {props.type === 'blood' ? 
        <>
        <p>Pacto de sangue</p>
        <input placeholder={props.pledgeData.pledge} disabled={true}></input>
        </>
        : props.type === 'credit' ?
        <>
        <p>Cartão de débito</p>
        <input placeholder={props.cardData.number} disabled={true}/>
        </>
        :
        <p>Boleto bancário</p>
        }

    </div>)

}