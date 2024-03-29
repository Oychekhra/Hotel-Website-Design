import styled from "styled-components";


export const LoginWrapper =styled.div`
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

/* padding-top:100px; */
background-size:cover;
background-position:center;
background-repeat:no-repeat;

form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:30px;
    border:2px solid #14274A;
    padding:60px 30px;
    background-color:transparent;
    box-shadow: inset 0 0 0 2000px rgba(10, 20, 50, 0.30);


    ::placeholder{
        font-size:25px;
        color:#14274A;
    }
    
    input{
        margin-bottom:50px;
        border-radius:20px;
        width: 400px;
        padding:20px;
    }

    button{
        width:150px;
        padding:20px;
        color:white;
        background-color:#14274A;
        border-radius:20px;
        cursor: pointer;


    }
    
}
h1{
    font-size:80px;
    padding-bottom:10px;
    color:#14274A;
    font-weight:900;
    text-shadow:0px 3px 0px #b2a98f,
             0px 14px 10px rgba(0,0,0,0.15),
             0px 24px 2px rgba(0,0,0,0.1),
             0px 34px 30px rgba(0,0,0,0.1);
}
`