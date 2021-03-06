
import { Badge } from '@material-ui/core';
import { Search,  ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';



const Container = styled.div`
height:56px;
display: flex;

${mobile({height:"50px"})}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;

width: 100%;

justify-content: space-between;
align-items: center;


${mobile({padding:"10px 0px"})}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`


const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;


${mobile({display:"none"})}
`
const Input = styled.input`
border: none;

${mobile({width:"50px"})}
`










const Center = styled.div`
flex: 1;
text-align: center;



${mobile({marginLeft:"2px"})}
`

const Logo = styled.h1
    `
    ${mobile({fontSize:"24px"})}
`







const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

${mobile({marginRight:"20px"})};
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;

${mobile({fontSize:"12px", marginLeft:"12px"})};

&:first-child{
    ${mobile({display:"none"})};
}
&:nth-child(2){
    ${mobile({display:"none"})};
}
`

export const Navbar = () => {
    return (

        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{color:"gray",fontSize:"16px"}}></Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo><span style={{color:"red"}}>Campus</span><span style={{color:"blue"}}>Master</span></Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge color="secondary" badgeContent={99}>
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>
                    </MenuItem>
                </Right>


            </Wrapper>
        </Container>

    )
}
