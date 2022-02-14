import styled from "styled-components";

export const HeaderBox = styled.div`
height: 70px;
width: 100vw;
background-color: #c7758e;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 10px;

position: fixed;
top: 0px;
left: 0px;
z-index: 300;

box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.43);

img {
  width: 30px;
  height: 50px;
  object-fit: initial;
}
h1 {
  font-weight: bold;
}

.notification {
  position: absolute;
  right: 10px;
  top: 35px;

  width: 13px;
  height: 13px;
  background: #80111f;
  border-radius: 50%;
}
`;
