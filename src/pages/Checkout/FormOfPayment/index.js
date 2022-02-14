export default function FormOfPayment(props) {
    return(<div>
        {props.form === 'slip' ? <p>Boleto bancário</p> : <>
        <p>Cartão de débito</p>
        <input placeholder="numero do cartao" disabled={true}/></>}

    </div>)
}