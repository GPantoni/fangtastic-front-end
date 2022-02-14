import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//add sweetalert lib for confirm

import AuthContext from '../../contexts/AuthContext';

import Header from '../../components/Header';

import { Container } from './style';
import FormOfPayment from './FormOfPayment';

export default function Checkout() {
  const navigate = useNavigate()
  const { token } = useContext(AuthContext);
  const [hide, setHide] = useState(true);

  const [formsOfPayment, setFormsOfPayment] = useState(null);


  useEffect(getFormsOfPayment, []);

  function getFormsOfPayment() {}

  function handleClickAdd(e) {
    e.preventDefault();
    navigate(`/add-form-of-payment/${e.target.value}`)
  }
  function handleClickOrder() {}
  //verificar login
  //se nao há login, falar pra fazer
  //verificar formas de pagamento registradas pelo usuario
  //caso nao exista nenhuma, só aparece o botão de adicionar forma de pagamento
  //caso sim, usar um radio para selecionar uma das formas de pagamento e confirmar o pedido
  //enviar objeto com timestamp para poder organizar o histórico de compras
  return (
    <>
      <Header />
      <Container>
        <p>Total: </p>
        <form>
          <p onClick={() => setHide(!hide)}>Adicionar forma de pagamento</p>
          {hide ? (
            ''
          ) : (
            <>
              <button value='credit' onClick={(e) => handleClickAdd(e)}>Cartão de crédito</button>
              <button value='blood' onClick={(e) => handleClickAdd(e)}>Pacto de sangue</button>
            </>
          )}
        </form>

        <FormOfPayment />
        <FormOfPayment form='slip' />
      </Container>
    </>
  );
}
