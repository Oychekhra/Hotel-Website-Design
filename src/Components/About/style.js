import styled from "styled-components";

export const MainContainer= styled.div`
display:flex;
flex-direction:column;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
height: 1080px;
flex-shrink:0;
box-shadow: inset 0 0 0 2000px rgba(20, 39, 74, 0.50);
`

export const MottoWrapper = styled.div`
padding:200px 210px;
display:flex;
flex-direction:column;
align-items:start;
justify-content:start;
color:white;
`
export const Buttondiv =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

export const Scroll =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color: white;
margin:40px 0;

 p{
    font-size:25px;
    margin-bottom:15px;
 }

 img{
    cursor: pointer;
 }
`


export const Button =styled.button`
width:${(props) => (props.$primary ? "268px": "236px")};
display:flex;
align-items:center;
justify-content:space-around;
background-color:#E0B973;
padding:23px 33px;
border-radius:10px;
border:none;
cursor: pointer;
margin:40px 0;

p{
    font-size:${(props) => (props.$primary ? "25px": "20px")};
    color:white;
    padding-left:10px
}
`

export const Testimonial  =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color: #14274a;
padding:40px 0;

h3{
   font-size:60px;
   padding-bottom:26px;
}
p{
   font-size:28px;
   padding-bottom:20px;
}
`
export const Arrowbutton =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap: 20px;

div{
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:10px;
   width:50px;
   height:50px;
   background-color:#E0B973;
   color:white;
   cursor: pointer;
   img{
      width: 30px;
      height: 30px;
      background-color:none;
   }
}
`
