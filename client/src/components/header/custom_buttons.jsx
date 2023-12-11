import { Box, Button, styled, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';

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
  return (
    <Container>
      <AccountCircleOutlinedIcon />
      <CustButton variant="text">Login</CustButton>
      <ShoppingCartIcon />
      <Typography>Cart</Typography>
      <StorefrontIcon/>
      <Typography>Become a Seller</Typography>
    </Container>
  );
};

export default Buttons;
