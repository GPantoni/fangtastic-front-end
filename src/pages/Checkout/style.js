import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  flex-direction: column;
  gap: 13px;

width: 100%;
margin: 30px;
margin-top: 100px;

div, form {
  display: flex;
  flex-direction: column;
  gap: 13px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.3);
  border-radius: 13px;
  padding: 13px;
}

form {
  background: #666;
}

div {
  background: #333;
  :hover {
    background: pink;
  }
}
input, button {
  height: 50px;
  border: none;
  border-radius: 13px;
  padding: 13px;
}
button {
  :hover {
    background: red;
  }
}

p {
  margin: 13px 0;
}

.display-none {
  display: none;
}
  
`
