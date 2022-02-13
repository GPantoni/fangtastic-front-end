import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    border-radius: 5px;
    padding: 13px;
    margin: 30px;
    margin-top: 100px;

    background: #333;
    box-shadow: 0px 15px 15px 0px rgba(0,0,0,0.3);

    div {
        display: flex;
        align-items: center;

        width: 100%;
        padding: 10px;
        height: 60px;
        border-radius: 6px;
    }
`