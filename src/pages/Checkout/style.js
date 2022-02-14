import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  margin: 30px;
  margin-top: 100px;

  div {
    display: flex;
    flex-direction: column;
    gap: 13px;
    box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.3);
    border-radius: 13px;
    padding: 13px;
    background: #333;
    :hover {
      background: pink;
    }
  }


`;
