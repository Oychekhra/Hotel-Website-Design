import styled from "styled-components";

export const Traingle =styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:70px;
 div{
    width: 0;  
    height: 0;  
    border-left: 70px solid transparent; 
    border-right: 70px solid transparent; 
    border-bottom: 70px solid #14274A;
 }

`

export const FooterWrapper =styled.div`
display:flex;
justify-content:space-between;
align-items:start;
background-color:#14274A;
height:280px;
width:100%;
padding:50px 185px;
color:white;

`
export const InfoWrapper =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:left;
    align-items:start;


    p{
    font-size:20px;
    padding-bottom:10px;
    cursor: pointer;
    
    }
    :hover p{
        text-decoration:underline;
    }

    h2{
        font-size:30px;
        letter-spacing:3.75px;
    }

    h5{
        font-size:15px;
        font-weight:lighter;
    }

    h6{
        font-size:15px;
        font-weight:400;
        padding-top:20px;
    }
    form{
        border: 2px solid #E0B973;

        input{
            border:none;
            background-color:#14274A;
            padding:10px;
            width:70%;

        
        }
        ::placeholder{
                color:white;
            }

        button{
            background-color:#E0B973;
            border:2px solid #E0B973;
            width:30%;
            padding:10px;
            cursor: pointer;
        }
    }
`

export const SocialMedia =styled.div`
display:flex;
justify-content: space-between;
align-items:start;

p{
    padding-left:15px
}
`
