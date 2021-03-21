import styled from "styled-components";

export const Main = styled.div`
    background: #cdcdcd;
    height: 110%;
    padding: 15px;
    a{
        color: #000;
    }
`;

export const Info = styled.div`
    background: #fff;
    color: #000;
    width: 80%;
    margin-left: 10%;
    padding: 50px;
    border-radius: 15px;
    
    h1, h4{
        font-weight: 100;
    }
    p{
        font-size: 17px;
    }
    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
`;

export const Perfil = styled.div`
    display: flex;
    row-direction: row;
    padding-bottom: 30px;
    h1{
        padding: 30px;
    }
`;

export const Comentario = styled.div`
    background: #cdcdcd;
    border-radius: 15px;
    padding: 15px;
    margin-top: 15px;
    h4{
        padding: 5px;
    }
`;