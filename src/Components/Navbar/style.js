import styled from "styled-components";

export const NavbarWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
padding:0 210px;
position:absolute;
top:0;
width:100%;
`
export const LogoCon =styled.div`
/* width:256px;
height:149px; */
padding:30px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#E0B973;
color: #14274a;
border-bottom-left-radius:30px;
border-bottom-right-radius:30px;

`
export const NavRight =styled.div`
display: flex;
justify-content:space-between;
align-items:center;

p{
    padding-left: 80px;
    font-size:25px;
    color:white;
    cursor: pointer;
}

:hover p{
    text-decoration:underline;
}

`

