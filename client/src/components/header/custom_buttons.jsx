import { Box, Button, styled, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LoginDialogue from "../pages/login/LoginDialogue";
import { useState } from "react";



const Container = styled(Box)`
  margin-left: 300px;
  color: #000000;
  background: #ffffff;
  text-align: start;
  font-family: 'inter_regular, fallback-inter_regular, Arial, sans-serif';
  font-size: 17px;
  display: flex;
  align-items: center;

  & > button , & > p {
    margin-right : 40px;
  }
`

const CustButton = styled(Button)`
text-transform : none;
font-famnily : 'inter_regular, fallback-inter_regular, Arial, sans-serif';
color : black;
font-size : 16px;
lini-height : 24px;
`

const Buttons = () => {

  const [open , setOpen] = useState(false);

  const openDialog = ()=>{
    setOpen(true)
  }

  return (
    <Container>
      
      <CustButton variant="text" onClick={()=> openDialog()}> {<AccountCircleOutlinedIcon />} Login</CustButton>
      <ShoppingCartIcon />
      <Typography>Cart</Typography>
      <StorefrontIcon/>
      <Typography>Become a Seller</Typography>
      <LoginDialogue open={open } setOpen ={setOpen}/>
    </Container>
  );
};

export default Buttons;
