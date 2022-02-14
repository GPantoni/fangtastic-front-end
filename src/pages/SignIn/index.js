import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
  Title,
} from "../../components/FormComponents";
import AuthContext from "../../contexts/AuthContext.js";

export default function SignIn() {
  const navigate = useNavigate();

  const { setAndPersistToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const user = { ...formData };

    try {
      const promise = await api.signIn(user);
      setAndPersistToken(promise.data);
      navigate("/products");
    } catch (error) {
      console.error(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <Title className="logo" onClick={() => navigate('/')}>fangtastic</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <StyledLink onClick={() => navigate("/sign-up")}>
        Novo por aqui? Cadastre-se
      </StyledLink>
    </Container>
  );
}
