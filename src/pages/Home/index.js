import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import vamp from "../../assets/vamp-bg.jpg";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${vamp});
  background-size: cover;
`;
