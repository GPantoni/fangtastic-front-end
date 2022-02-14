import Header from "../../components/Header";
import { Wrapper } from "./style";

export default function Success() {
  const toSuccess = true;
  return (
    <>
      <Header toSuccess={toSuccess}/>
      <Wrapper>Pedido feito com sucesso!</Wrapper>
    </>
  );
}
