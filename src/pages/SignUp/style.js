import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #3b035b;
`;

const Form = styled.form`
  width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin-bottom: 32px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;

  width: 90%;

  color: #000;
  background: #ffffff;
  padding: 15px 16px;
  border-radius: 5px;

  ::placeholder {
    color: #000;
    font-family: "Raleway", sans-serif;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 90%;

  color: #ffffff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;

  text-align: center;

  padding: 12px;

  background: #57197a;
  border-radius: 5px;
`;

const StyledLink = styled.span`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

const Title = styled.h1`
  cursor: pointer;

  color: #ffffff;
  font-style: normal;
  font-weight: bolder;
  font-size: xx-large;
  line-height: 50px;
`;

export { Container, Form, Input, Button, StyledLink, Title };
