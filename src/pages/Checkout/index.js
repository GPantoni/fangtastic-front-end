import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import Header from '../../components/Header';

import { Container } from './style';
import FormOfPayment from './FormOfPayment';

export default function Checkout() {
  const { token } = useContext(AuthContext);
  const [hide, setHide] = useState(true);

  const [formsOfPayment, setFormsOfPayment] = useState(null);


  useEffect(getFormsOfPayment, []);

  function getFormsOfPayment() {}

  function handleClickAdd(e) {
    e.preventDefault();
    console.log('ayy lmao');
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
        <form onSubmit={(e) => handleClickAdd(e)}>
          <p onClick={() => setHide(!hide)}>Adicionar forma de pagamento</p>
          {hide ? (
            ''
          ) : (
            <>
              <button>Cartão de crédito</button>
              <button>Cartão de débito</button>
              <button>Pacto de sangue</button>
              <button>Boleto bancário</button>
            </>
          )}
        </form>

        <FormOfPayment />
      </Container>
    </>
  );
}
