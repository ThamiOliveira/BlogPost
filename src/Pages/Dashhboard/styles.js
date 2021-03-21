import styled from 'styled-components';

export const Main = styled.div`
    background: #fafafa;
    h1{
        font-weight: 100;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`;
export const Infos = styled.div`
    box-shadow: 3px 3px 3px #888888;
    background: #fff;
    width: 380px;
    height: 300px;
    margin-bottom: 50px;
    margin-left: 0px;
    padding: 15px ;
    border-radius: 0px 50px 50px 0px;
    h4{
        color: #cdcdcd;
        margin-top: 0px;
        padding-bottom: 25px;
    }
    a{
        color: #cdcdcd;
    }
    h2{
        font-weight: 100;
    }
    p{
        font-weight: 50;
        padding-top: 25px;
        height: 180px;
    }

    h1{
        font-weight: bold;
    }
    
`;


export const Post = styled.div`
    display:flex;
    margin-left: 18px;
    margin-top: 50px;
    img{
        border-radius: 50px 0px 0px 50px;
        margin-bottom: 15px;
        margin-left: 15px;
        height: 300px;
        width: 280px;
    }
`;  