import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import { Container } from './style';

import AuthContext from '../../contexts/AuthContext';

import api from '../../services/api';

export default function AddFormOfPayment() {
  const navigate = useNavigate()
  const form = useParams().form;
  const { token } = useContext(AuthContext)
  console.log(token) //OK

  const [cardData, setCardData] = useState({
    number: '',
    expDate: '',
    securityCode: '',
    name: '',
  });

  const [pledgeData, setPledgeData] = useState({
    name: '',
    house: '',
    pledge: '',
  });

  function handleChange({ target }) {
    if (form === 'credit') {
      setCardData({ ...cardData, [target.name]: target.value });
    } else {
      setPledgeData({ ...pledgeData, [target.name]: target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form === 'credit') {
      const promise = api.addFormOfPayment({ type: form, cardData}, token);
      promise.then(navigate('/checkout'))
    } else {
      const promise = api.addFormOfPayment({type: form, pledgeData}, token)
      promise.then(navigate('/checkout'))
    }

  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          {form === 'credit' ? (
            <>
              <h1>Cartão de crédito</h1>
              <input
                placeholder='Número do cartão'
                name='number'
                value={cardData.number}
                required
                onChange={(e) => handleChange(e)}
              />
              <div>
                <input
                  placeholder='Data de validade'
                  name='expDate'
                  value={cardData.expDate}
                  required
                  onChange={(e) => handleChange(e)}
                />
                <input
                  placeholder='Código de segurança'
                  name='securityCode'
                  value={cardData.securityCode}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <input
                placeholder='Nome'
                name='name'
                value={cardData.name}
                required
                onChange={(e) => handleChange(e)}
              />
              
            </>
          ) : (
            <>
            <h1>Pacto de sangue</h1>
            <input
                placeholder='Nome verdadeiro'
                name='name'
                value={pledgeData.name}
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder='Casa'
                name='house'
                value={pledgeData.house}
                
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder='Digite aqui seu juramento de sangue...'
                name='pledge'
                value={pledgeData.pledge}
                required
                onChange={(e) => handleChange(e)}
              />

            </>
          )}
          <button>Salvar forma de pagamento</button>
        </form>
      </Container>
    </>
  );
}
