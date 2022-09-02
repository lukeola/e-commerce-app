import React from 'react'
// import styled from 'styled-components'
import { AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './navbar.css'
import { Badge } from '@mui/material';



// const Container = styled.div`
//     height: 60px;

// `;
// const Wrapper = styled.div `
//   padding: 10px 20px;
//   display: flex;
//   align-item: center;
//   justify-content: space-between; 
// `;
// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-item: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

// const SearchContainer = styled.div`
//     border: 1px solid lightgray;
//     display: flex;
//     align-item: center;
    
// `


// const Center = styled.div`
//   flex: 1;
// `;

// const Right = styled.div`
//   flex: 1;
// `;


const Navbar = () => {
  return (
   
    // <Container>
    //   <Wrapper>
    //     <Left>
    //     <Language>En</Language>
    //     <SearchContainer>
    //       Input
    //       <AiOutlineSearch/>
    //     </SearchContainer>
    //     </Left>
    //     <Center>Center</Center>
    //     <Right>Right</Right>

    //   </Wrapper>
    // </Container>


<div className="Navbar_Container">
  <div className="Wrapper">
    <div className="Left">
      <div className="Language">EN</div>
      <div className="SearchContainer">
        <input type="text" />
        <AiOutlineSearch style={{color:"grey", fontSize:16}}/>
      </div>
    </div>
    <div className="Center"><h1 id='Logo'>THE3KSHOP</h1></div>
    <div className="Right">
      <div className="MenuItems">
        <li>REGISTER</li>
        <li>SIGN IN</li>
        <li> <Badge  badgeContent={4} color="primary" >
                <AiOutlineShoppingCart style={{fontSize:20}}/>
              </Badge>
        </li>

      </div>
    </div>
  </div>
</div>

  )
}


export default Navbar