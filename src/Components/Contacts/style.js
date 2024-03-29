import styled from "styled-components";

export const ContactWrapper =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#14274A;

h1{
    padding-bottom:171px;
    padding-top:200px;
    font-size:80px;
    color:white;
    text-align:center;
}
`

export const Wrapper =styled.div`
display:grid;
grid-template-areas:"a a";
gap: 200px;
margin-top:100px;
`

export const ContactInfo =styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:start;
margin-top:200px;
padding:0 200px;

h3{
    font-size:60px;
    color: #14274A;
}
p{
    font-size:30px;
    color: #14274A;
    padding-top:30px;
}
`
export const HotelInfo =styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:start;

p{
    font-size:40px;
    color: #14274A;
}
`

export const InquireWrapper =styled.div`
form{
    display:flex;
    flex-direction:column;
    align-items: start;
    justify-content:start;

    input, textarea{
        width:570px;
        height:78px;
        border:2px solid rgba(20, 39, 74, 0.50);
        background-color: #FFF;
        margin-bottom:20px;
    }

    label{
        font-size:25px;
        color:#14274A; 
    }

    button{
        width:145px;
        color:white;
        font-size:20px;
        font-weight:700;
        background-color:#E0B973;
        padding:20px;
        border-radius:2px;
        border:none;
        transform:translateX(425px);
        cursor: pointer;
    }
}
`
