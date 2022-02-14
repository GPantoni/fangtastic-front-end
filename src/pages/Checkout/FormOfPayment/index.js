export default function FormOfPayment(props) {
    return(<div>
        {console.log(props)}
        {props.type === 'blood' ? 
        <>
        <p>Pacto de sangue</p>
        <input placeholder={props.pledgeData.pledge}></input>
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