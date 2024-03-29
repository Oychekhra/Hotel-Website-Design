import styled from "styled-components";
export const RoomInfo =styled.div`
padding: 0 160px;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:80px;

`
export const ImageWrapper =styled.img`
width:1580px;`

export const RoundWrapper =styled.img`
transform:translateY(-80px);

`
export const RoomType =styled.div`
    width:1580px;
    background-color:#14274A;
    color:white;
    background-color:#14274A;
    text-align:center;
    font-size:60px;
    padding:40px 0;
    transform:translateY(-20px);  
`
export const CostInfo =styled.div`
display:flex;
align-items:center;
justify-content:space-around;
padding:80px 0;
width:1580px;
border-radius:0 0 20px 20px;
border: 2px solid #14274A;
transform:translateY(-20px);  

button{
    background-color:#E0B973;
    font-size:25px;
    text-align: center;
    padding:23px 44px;
    border-radius:20px;
    color:white;
    border:none;
    cursor: pointer;
}
`
export const CostInfoLeft =styled.div`
display:flex;
justify-content:space-around;
align-items:center;
cursor: pointer;

p{
    font-size:25px;
    font-weight:700;
    color:#14274A;
    padding-left:40px;
}

`