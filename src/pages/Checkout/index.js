import { useContext } from 'react';
import Header from '../../components/Header';
import AuthContext from '../../contexts/AuthContext';

import { StyledDiv } from './style';

export default function Checkout() {
  const { token } = useContext(AuthContext);
  //verificar login
  //se nao há login, falar pra fazer
  //verificar formas de pagamento registradas pelo usuario
  //caso nao exista nenhuma, só aparece o botão de adicionar forma de pagamento
  //caso sim, usar um radio para selecionar uma das formas de pagamento e confirmar o pedido
  //enviar objeto com timestamp para poder organizar o histórico de compras
  return (
    <>
      <Header />
      <StyledDiv className='add'> 
          Adicionar nova forma de pagamento
      </StyledDiv>
    </>
  );
}
